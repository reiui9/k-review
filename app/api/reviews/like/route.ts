import { NextRequest, NextResponse } from "next/server";

import { ensureDbReady, sql } from "@/app/lib/db.server";

export async function POST(req: NextRequest) {
  await ensureDbReady();

  const body = (await req.json().catch(() => null)) as null | {
    reviewId?: unknown;
    delta?: unknown;
  };

  const reviewId = typeof body?.reviewId === "string" ? body.reviewId : "";
  const deltaRaw =
    typeof body?.delta === "number"
      ? body.delta
      : typeof body?.delta === "string"
        ? Number(body.delta)
        : NaN;

  const delta = deltaRaw === -1 ? -1 : deltaRaw === 1 ? 1 : 0;

  if (!reviewId || delta === 0) {
    return NextResponse.json(
      { error: "Invalid payload (reviewId, delta=±1)" },
      { status: 400 },
    );
  }

  const rows =
    (await sql`
      UPDATE reviews
      SET likes = GREATEST(likes + ${delta}, 0)
      WHERE id = ${reviewId}
      RETURNING likes;
    `) as unknown as Array<{ likes: number }>;

  const nextLikes = rows?.[0]?.likes;
  if (typeof nextLikes !== "number") {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ likes: nextLikes });
}


