import 'server-only';

import { neon } from '@neondatabase/serverless';

import { EARTH_SEED_REVIEWS } from '@/app/lib/earth-data';

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
	throw new Error(
		'DATABASE_URL is not set. Please add it to .env.local (Neon connection string).'
	);
}

export const sql = neon(DATABASE_URL);

let initPromise: Promise<void> | null = null;

export async function ensureDbReady(): Promise<void> {
	if (initPromise) return initPromise;

	initPromise = (async () => {
		// 1) Schema
		await sql`
      CREATE TABLE IF NOT EXISTS reviews (
        id TEXT PRIMARY KEY,
        item_id TEXT NOT NULL,
        name TEXT NOT NULL,
        text TEXT NOT NULL,
        rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
        likes INT NOT NULL DEFAULT 0 CHECK (likes >= 0),
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `;

		await sql`
      CREATE INDEX IF NOT EXISTS reviews_item_created_idx
      ON reviews (item_id, created_at DESC);
    `;

		await sql`
      CREATE INDEX IF NOT EXISTS reviews_item_likes_idx
      ON reviews (item_id, likes DESC, created_at DESC);
    `;

		// 2) Seed (only if empty)
		const rows =
			(await sql`SELECT COUNT(*)::int AS count FROM reviews;`) as unknown as Array<{
				count: number;
			}>;

		const count = rows?.[0]?.count ?? 0;
		if (count > 0) return;

		for (const r of EARTH_SEED_REVIEWS) {
			await sql`
        INSERT INTO reviews (id, item_id, name, text, rating, likes, created_at)
        VALUES (
          ${r.id},
          ${r.itemId},
          ${r.name},
          ${r.text},
          ${r.rating},
          ${r.likes},
          ${new Date(r.createdAt)}
        )
        ON CONFLICT (id) DO NOTHING;
      `;
		}
	})();

	return initPromise;
}
