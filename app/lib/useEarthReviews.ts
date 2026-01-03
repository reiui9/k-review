'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Review } from './earth-data';
import { triggerReviewUpdate } from './useItemStats';

export type ReviewSortKey = 'latest' | 'top';

export function useEarthReviews(itemId: string) {
	const [sort, setSort] = useState<ReviewSortKey>('latest');
	const [reviewsRaw, setReviewsRaw] = useState<Review[]>([]);
	const [myLikes, setMyLikes] = useState<Record<string, true>>({});
	const [isLoaded, setIsLoaded] = useState(false);
	const [total, setTotal] = useState(0);

	// 1) Load reviews from API
	useEffect(() => {
		let active = true;
		setIsLoaded(false);

		async function fetchReviews() {
			try {
				const params = new URLSearchParams({ itemId, sort, limit: '100' });
				const res = await fetch(`/api/reviews?${params.toString()}`);
				if (!res.ok) throw new Error('Failed to fetch');
				const data = await res.json();
				if (active) {
					setReviewsRaw(data.reviews);
					setTotal(data.total);

					// Load my likes from local storage (client-only state)
					// or handle it via API if we had user auth.
					// For now, we keep "my likes" in local storage just to show red hearts.
					const storedLikes = localStorage.getItem('earth-likes');
					if (storedLikes) {
						setMyLikes(JSON.parse(storedLikes));
					}

					setIsLoaded(true);
				}
			} catch (e) {
				console.error(e);
				if (active) setIsLoaded(true);
			}
		}

		fetchReviews();

		return () => {
			active = false;
		};
	}, [itemId, sort]);

	// 2) Client-side sort is handled by API now, but we can double-check or rely on API.
	// Actually the API returns sorted data. But let's keep the reviewsRaw as is.
	const reviews = reviewsRaw;

	const isLiked = useCallback(
		(reviewId: string) => Boolean(myLikes[reviewId]),
		[myLikes]
	);

	const addReview = useCallback(
		async (input: { name: string; text: string; rating: number }) => {
			try {
				const res = await fetch('/api/reviews', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						itemId,
						name: input.name,
						text: input.text,
						rating: input.rating,
					}),
				});
				if (!res.ok) throw new Error('Failed to post review');

				const data = await res.json();
				const newReview = data.review;

				setReviewsRaw((prev) => [newReview, ...prev]);
				setTotal((n) => n + 1);
				triggerReviewUpdate();
			} catch (e) {
				console.error(e);
				alert('Failed to add review');
			}
		},
		[itemId]
	);

	const toggleLike = useCallback(
		async (reviewId: string) => {
			const wasLiked = myLikes[reviewId];
			// Optimistic update
			setMyLikes((prev) => {
				const next = { ...prev };
				if (wasLiked) delete next[reviewId];
				else next[reviewId] = true;

				localStorage.setItem('earth-likes', JSON.stringify(next));
				return next;
			});

			setReviewsRaw((prev) =>
				prev.map((r) => {
					if (r.id !== reviewId) return r;
					return { ...r, likes: Math.max(0, r.likes + (wasLiked ? -1 : 1)) };
				})
			);

			try {
				const res = await fetch('/api/reviews/like', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ reviewId, increment: !wasLiked }),
				});
				if (!res.ok) throw new Error('Failed to like');
			} catch (e) {
				console.error(e);
				// Revert on error could be implemented here
			}
		},
		[myLikes]
	);

	return {
		isLoaded,
		sort,
		setSort,
		reviews,
		total,
		addReview,
		toggleLike,
		isLiked,
	};
}
