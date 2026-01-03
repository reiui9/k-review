'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import type { Review } from './earth-data';
import { loadDb, saveDb } from './storage';

import { triggerReviewUpdate } from './useItemStats';

export type ReviewSortKey = 'latest' | 'top';

export function useEarthReviews(itemId: string) {
	const [sort, setSort] = useState<ReviewSortKey>('latest');
	const [reviewsRaw, setReviewsRaw] = useState<Review[]>([]);
	const [myLikes, setMyLikes] = useState<Record<string, true>>({});
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const db = loadDb();
		setMyLikes(db.myLikes ?? {});
		setReviewsRaw(db.reviews.filter((r) => r.itemId === itemId));
		setIsLoaded(true);
	}, [itemId]);

	const reviews = useMemo(() => {
		const list = [...reviewsRaw];
		if (sort === 'top') {
			list.sort((a, b) => b.likes - a.likes || b.createdAt - a.createdAt);
			return list;
		}
		list.sort((a, b) => b.createdAt - a.createdAt);
		return list;
	}, [reviewsRaw, sort]);

	const isLiked = useCallback(
		(reviewId: string) => Boolean(myLikes[reviewId]),
		[myLikes]
	);

	const addReview = useCallback(
		(input: { name: string; text: string; rating: number }) => {
			const db = loadDb();
			const id =
				typeof crypto !== 'undefined' && 'randomUUID' in crypto
					? crypto.randomUUID()
					: `r_${Math.random().toString(36).slice(2)}`;

			const review: Review = {
				id,
				itemId,
				name: input.name.trim(),
				text: input.text.trim(),
				rating: Math.max(1, Math.min(5, Math.round(input.rating))),
				likes: 0,
				createdAt: Date.now(),
			};

			db.reviews = [review, ...db.reviews];
			saveDb(db);

			setMyLikes(db.myLikes ?? {});
			setReviewsRaw(db.reviews.filter((r) => r.itemId === itemId));

			// 통계 업데이트 트리거
			triggerReviewUpdate();
		},
		[itemId]
	);

	const toggleLike = useCallback(
		(reviewId: string) => {
			const db = loadDb();
			db.myLikes ||= {};

			const idx = db.reviews.findIndex((r) => r.id === reviewId);
			if (idx < 0) return;

			const liked = Boolean(db.myLikes[reviewId]);
			const next = { ...db.reviews[idx] };

			if (liked) {
				delete db.myLikes[reviewId];
				next.likes = Math.max(0, next.likes - 1);
			} else {
				db.myLikes[reviewId] = true;
				next.likes += 1;
			}

			db.reviews = db.reviews.map((r, i) => (i === idx ? next : r));
			saveDb(db);

			setMyLikes({ ...db.myLikes });
			setReviewsRaw(db.reviews.filter((r) => r.itemId === itemId));
		},
		[itemId]
	);

	return {
		isLoaded,
		sort,
		setSort,
		reviews,
		total: reviewsRaw.length,
		addReview,
		toggleLike,
		isLiked,
	};
}
