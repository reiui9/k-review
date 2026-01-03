import { NextRequest, NextResponse } from 'next/server';

import { EARTH_ITEM_BY_ID } from '@/app/lib/earth-data';
import { ensureDbReady, sql } from '@/app/lib/db.server';

function clampInt(n: number, min: number, max: number) {
	return Math.max(min, Math.min(max, Math.trunc(n)));
}

function toMs(value: unknown): number {
	if (value instanceof Date) return value.getTime();
	if (typeof value === 'string') return new Date(value).getTime();
	if (typeof value === 'number') return value;
	return Date.now();
}

export async function GET(req: NextRequest) {
	await ensureDbReady();

	const itemId = req.nextUrl.searchParams.get('itemId');
	if (!itemId) {
		return NextResponse.json({ error: 'itemId is required' }, { status: 400 });
	}

	const sortParam = req.nextUrl.searchParams.get('sort');
	const sort = sortParam === 'top' ? 'top' : 'latest';

	const limitParam = req.nextUrl.searchParams.get('limit');
	const limit = clampInt(Number(limitParam ?? 200), 1, 200);

	const totalRows = (await sql`
      SELECT COUNT(*)::int AS total
      FROM reviews
      WHERE item_id = ${itemId};
    `) as unknown as Array<{ total: number }>;

	const total = totalRows?.[0]?.total ?? 0;

	const rows =
		sort === 'top'
			? ((await sql`
          SELECT
            id,
            item_id AS "itemId",
            name,
            text,
            rating,
            likes,
            created_at AS "createdAt"
          FROM reviews
          WHERE item_id = ${itemId}
          ORDER BY likes DESC, created_at DESC
          LIMIT ${limit};
        `) as unknown as Array<{
					id: string;
					itemId: string;
					name: string;
					text: string;
					rating: number;
					likes: number;
					createdAt: unknown;
			  }>)
			: ((await sql`
          SELECT
            id,
            item_id AS "itemId",
            name,
            text,
            rating,
            likes,
            created_at AS "createdAt"
          FROM reviews
          WHERE item_id = ${itemId}
          ORDER BY created_at DESC
          LIMIT ${limit};
        `) as unknown as Array<{
					id: string;
					itemId: string;
					name: string;
					text: string;
					rating: number;
					likes: number;
					createdAt: unknown;
			  }>);

	const reviews = rows.map((r) => ({
		...r,
		createdAt: toMs(r.createdAt),
	}));

	return NextResponse.json({ reviews, total, sort });
}

export async function POST(req: NextRequest) {
	await ensureDbReady();

	const body = (await req.json().catch(() => null)) as null | {
		itemId?: unknown;
		name?: unknown;
		text?: unknown;
		rating?: unknown;
	};

	const itemId = typeof body?.itemId === 'string' ? body.itemId.trim() : '';
	const name = typeof body?.name === 'string' ? body.name.trim() : '';
	const text = typeof body?.text === 'string' ? body.text.trim() : '';
	const ratingNum =
		typeof body?.rating === 'number'
			? body.rating
			: typeof body?.rating === 'string'
			? Number(body.rating)
			: NaN;

	const rating = clampInt(Number(ratingNum), 1, 5);

	if (!itemId || !EARTH_ITEM_BY_ID[itemId]) {
		return NextResponse.json({ error: 'Invalid itemId' }, { status: 400 });
	}
	if (name.length < 1 || name.length > 24) {
		return NextResponse.json(
			{ error: 'Invalid name (1~24 chars)' },
			{ status: 400 }
		);
	}
	if (text.length < 1 || text.length > 100) {
		return NextResponse.json(
			{ error: 'Invalid text (1~100 chars)' },
			{ status: 400 }
		);
	}

	const id =
		typeof crypto !== 'undefined' && 'randomUUID' in crypto
			? crypto.randomUUID()
			: `r_${Math.random().toString(36).slice(2)}`;

	const inserted = (await sql`
      INSERT INTO reviews (id, item_id, name, text, rating, likes, created_at)
      VALUES (${id}, ${itemId}, ${name}, ${text}, ${rating}, 0, NOW())
      RETURNING
        id,
        item_id AS "itemId",
        name,
        text,
        rating,
        likes,
        created_at AS "createdAt";
    `) as unknown as Array<{
		id: string;
		itemId: string;
		name: string;
		text: string;
		rating: number;
		likes: number;
		createdAt: unknown;
	}>;

	const row = inserted[0];
	if (!row) {
		return NextResponse.json({ error: 'Insert failed' }, { status: 500 });
	}

	return NextResponse.json({
		review: { ...row, createdAt: toMs(row.createdAt) },
	});
}
