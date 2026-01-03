"use client";

import { useMemo, useState } from "react";
import { ItemAvatar } from "@/app/components/ItemAvatar";
import { ReviewModal } from "@/app/components/ReviewModal";
import { StarRating } from "@/app/components/StarRating";
import { formatCount, formatRating } from "@/app/lib/format";
import type { EarthItem } from "@/app/lib/earth-data";
import { useEarthReviews } from "@/app/lib/useEarthReviews";
import { Modal } from "./Modal";

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
      className={filled ? "text-[#00ff41]" : "text-white/30"}
    >
      <path d="M12 21s-7.2-4.4-9.4-8.6C.7 9 2.3 6.3 5.4 6.1c1.8-.1 3.5.9 4.6 2.4 1.1-1.5 2.8-2.5 4.6-2.4 3.1.2 4.7 2.9 2.8 6.3C19.2 16.6 12 21 12 21z" />
    </svg>
  );
}

export function ItemDetailModal({
  item,
  open,
  onClose,
}: {
  item: EarthItem | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!item) return null;

  return (
    <ItemDetailContent item={item} open={open} onClose={onClose} />
  );
}

function ItemDetailContent({
  item,
  open,
  onClose,
}: {
  item: EarthItem;
  open: boolean;
  onClose: () => void;
}) {
  const { isLoaded, sort, setSort, reviews, total, addReview, toggleLike, isLiked } =
    useEarthReviews(item.id);

  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  const reviewTitle = useMemo(() => {
    const count = isLoaded ? total : item.reviewCount;
    return `${formatCount(count)} Reviews`;
  }, [isLoaded, item.reviewCount, total]);

  return (
    <>
      <Modal open={open} title={item.name} onClose={onClose}>
        <div className="max-h-[80vh] overflow-y-auto pr-2 custom-scrollbar">
          <div className="flex flex-col items-center text-center">
            <ItemAvatar item={item} size={120} />
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white">
              {item.name}
            </h2>
            <p className="mt-2 text-lg text-[#00ff41] font-mono">{item.tagline}</p>
            <p className="mt-4 text-white/80 leading-relaxed max-w-md">
              {item.description}
            </p>

            <div className="mt-6 flex items-center gap-3 bg-[#111] border border-[#333] px-4 py-2 rounded-lg">
              <StarRating value={item.ratingAvg} size={24} />
              <div className="text-xl font-bold text-white">
                {formatRating(item.ratingAvg)} <span className="text-sm text-white/50 font-normal">/ 5.0</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between border-b border-[#333] pb-4">
            <div className="text-xl font-bold font-mono text-[#00ff41]">{reviewTitle}</div>
            
            <div className="flex gap-2">
               <button
                type="button"
                onClick={() => {
                   const text = `[K-Server Review] ${item.name} - ${item.tagline}\n평점: ${formatRating(item.ratingAvg)}\n\n#K_Server_Review`;
                   window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`, '_blank');
                }}
                className="bg-[#111] border border-[#333] text-white px-3 py-2 text-sm font-bold uppercase tracking-wider hover:border-[#00ff41] hover:text-[#00ff41] transition-colors"
                title="Share on X"
              >
                X
              </button>
               <button
                type="button"
                onClick={() => {
                   const text = `[K-Server Review] ${item.name} - ${item.tagline}`;
                   navigator.clipboard.writeText(`${text}\n${window.location.href}`);
                   alert("클립보드에 복사되었습니다!");
                }}
                className="bg-[#111] border border-[#333] text-white px-3 py-2 text-sm font-bold uppercase tracking-wider hover:border-[#00ff41] hover:text-[#00ff41] transition-colors"
                title="Copy Link"
              >
                Share
              </button>
               <button
                type="button"
                onClick={() => setReviewModalOpen(true)}
                className="bg-[#00ff41] text-black px-4 py-2 text-sm font-bold uppercase tracking-wider hover:bg-[#00cc33] transition-colors"
              >
                리뷰 쓰기
              </button>
            </div>
          </div>

          <div className="mt-4 flex gap-2 justify-end mb-4">
              <button
                onClick={() => setSort("latest")}
                className={`text-xs uppercase px-2 py-1 ${sort === 'latest' ? 'text-[#00ff41] border-b border-[#00ff41]' : 'text-white/50'}`}
              >
                Latest
              </button>
              <button
                onClick={() => setSort("top")}
                className={`text-xs uppercase px-2 py-1 ${sort === 'top' ? 'text-[#00ff41] border-b border-[#00ff41]' : 'text-white/50'}`}
              >
                Top
              </button>
          </div>

          <div className="space-y-4">
            {!isLoaded ? (
              <div className="py-8 text-center text-white/50 animate-pulse">
                데이터를 불러오는 중...
              </div>
            ) : reviews.length === 0 ? (
              <div className="py-8 text-center text-white/50">
                아직 리뷰가 없습니다. 첫 번째 평가자가 되어보세요!
              </div>
            ) : (
              reviews.map((r) => (
                <div
                  key={r.id}
                  className="bg-[#111] border border-[#333] p-4 rounded-md"
                >
                  <div className="flex justify-between items-start">
                    <div className="text-[#00ff41] font-mono text-sm">
                      {r.name}
                    </div>
                    <div className="text-xs text-white/40">
                      {new Date(r.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="mt-2 text-white/90 leading-relaxed text-sm">
                    {r.text}
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <StarRating value={r.rating} size={14} />
                    <button
                      type="button"
                      onClick={() => toggleLike(r.id)}
                      className="flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors"
                    >
                      <HeartIcon filled={isLiked(r.id)} />
                      <span>{formatCount(r.likes)}</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </Modal>

      <ReviewModal
        open={reviewModalOpen}
        itemName={item.name}
        initialRating={0}
        onClose={() => setReviewModalOpen(false)}
        onSubmit={(data) => {
          addReview(data);
          setReviewModalOpen(false);
        }}
      />
    </>
  );
}

