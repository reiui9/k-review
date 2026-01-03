"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { ItemAvatar } from "@/app/components/ItemAvatar";
import { ReviewModal } from "@/app/components/ReviewModal";
import { StarRating } from "@/app/components/StarRating";
import { StarRatingInput } from "@/app/components/StarRatingInput";
import { formatCount, formatRating } from "@/app/lib/format";
import type { EarthItem } from "@/app/lib/earth-data";
import { useEarthReviews } from "@/app/lib/useEarthReviews";

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.8"
      className={filled ? "text-white" : "text-white/70"}
    >
      <path d="M12 21s-7.2-4.4-9.4-8.6C.7 9 2.3 6.3 5.4 6.1c1.8-.1 3.5.9 4.6 2.4 1.1-1.5 2.8-2.5 4.6-2.4 3.1.2 4.7 2.9 2.8 6.3C19.2 16.6 12 21 12 21z" />
    </svg>
  );
}

export default function ItemDetailClient({ item }: { item: EarthItem }) {
  const { isLoaded, sort, setSort, reviews, total, addReview, toggleLike, isLiked } =
    useEarthReviews(item.id);

  const [composerRating, setComposerRating] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const reviewTitle = useMemo(() => {
    const count = isLoaded ? total : item.reviewCount;
    return `${formatCount(count)} Reviews`;
  }, [isLoaded, item.reviewCount, total]);

  return (
    <div className="min-h-screen earth-bg text-white">
      <div className="mx-auto max-w-5xl px-6 pb-20 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/85 hover:text-white"
        >
          <span className="text-amber-400">★</span>
          <span className="font-semibold tracking-[0.18em] uppercase">
            Earth <span className="text-white/70">Reviews</span>
          </span>
          <span className="text-amber-400">★</span>
        </Link>

        <div className="mt-10 flex flex-col items-center text-center">
          <ItemAvatar item={item} size={160} />
          <h1 className="mt-7 text-5xl sm:text-6xl font-semibold tracking-tight">
            {item.name}
          </h1>
          <p className="mt-2 text-lg sm:text-xl text-white/70">{item.tagline}</p>

          <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 text-white/75">
            <StarRating value={item.ratingAvg} size={20} />
            <div className="text-lg">
              {formatRating(item.ratingAvg)} / 5 ({formatCount(item.ratingCount)}{" "}
              ratings)
            </div>
          </div>
        </div>

        <div className="mt-10 border-4 border-white bg-black/40">
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto]">
            <div className="px-6 py-6">
              <div className="text-sm uppercase tracking-[0.25em] text-white/70">
                Your rating
              </div>
              <div className="mt-4">
                <StarRatingInput
                  value={composerRating}
                  onChange={setComposerRating}
                  size={38}
                />
              </div>
            </div>
            <div className="border-t-4 border-white sm:border-t-0 sm:border-l-4">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="h-full w-full bg-white px-10 py-8 text-2xl font-semibold text-black transition-colors hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/70"
              >
                Write a review
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="text-3xl sm:text-4xl font-semibold">{reviewTitle}</div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setSort("latest")}
              className={[
                "px-4 py-2 text-sm uppercase tracking-[0.25em] transition-colors",
                sort === "latest"
                  ? "border-2 border-white text-white"
                  : "text-white/65 hover:text-white",
              ].join(" ")}
            >
              Latest
            </button>
            <button
              type="button"
              onClick={() => setSort("top")}
              className={[
                "px-4 py-2 text-sm uppercase tracking-[0.25em] transition-colors",
                sort === "top"
                  ? "border-2 border-white text-white"
                  : "text-white/65 hover:text-white",
              ].join(" ")}
            >
              Top
            </button>
          </div>
        </div>

        <div className="mt-6 space-y-6">
          {!isLoaded ? (
            <div className="border-4 border-white bg-black/40 px-6 py-8 text-white/75">
              Loading…
            </div>
          ) : reviews.length === 0 ? (
            <div className="border-4 border-white bg-black/40 px-6 py-8 text-white/75">
              No reviews yet. Be the first!
            </div>
          ) : (
            reviews.map((r) => (
              <div
                key={r.id}
                className="border-4 border-white bg-black/55 px-6 py-6"
              >
                <div className="text-white/70 text-sm tracking-wide">
                  {r.name}
                </div>
                <div className="mt-2 text-lg sm:text-xl leading-8 text-white/90">
                  {r.text}
                </div>

                <div className="mt-5 flex items-center justify-between gap-4">
                  <StarRating value={r.rating} size={18} />
                  <button
                    type="button"
                    onClick={() => toggleLike(r.id)}
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/60 px-2 py-1"
                    aria-label={isLiked(r.id) ? "Unlike" : "Like"}
                  >
                    <HeartIcon filled={isLiked(r.id)} />
                    <span className="tabular-nums">{formatCount(r.likes)}</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <ReviewModal
          open={modalOpen}
          itemName={item.name}
          initialRating={composerRating}
          onClose={() => setModalOpen(false)}
          onSubmit={(data) => {
            addReview(data);
            setModalOpen(false);
            setComposerRating(0);
          }}
        />
      </div>
    </div>
  );
}


