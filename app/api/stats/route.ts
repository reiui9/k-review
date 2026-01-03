import { NextResponse } from 'next/server';

import { ensureDbReady, sql } from '@/app/lib/db.server';

export async function GET() {
	await ensureDbReady();

	const rows = (await sql`
      SELECT
        item_id AS "itemId",
        AVG(rating)::float8 AS "ratingAvg",
        COUNT(*)::int AS "reviewCount"
      FROM reviews
      GROUP BY item_id;
    `) as unknown as Array<{
		itemId: string;
		ratingAvg: number | string | null;
		reviewCount: number | string;
	}>;

	const stats: Record<string, { ratingAvg: number; reviewCount: number }> = {};

	for (const r of rows) {
		const ratingAvg = r.ratingAvg == null ? 0 : Number(r.ratingAvg);
		const reviewCount = Number(r.reviewCount);
		stats[r.itemId] = {
			ratingAvg: Number.isFinite(ratingAvg) ? ratingAvg : 0,
			reviewCount: Number.isFinite(reviewCount) ? reviewCount : 0,
		};
	}

	return NextResponse.json({ stats });
}
