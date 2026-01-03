"use client";

import { useMemo, useState } from "react";

import { Modal } from "./Modal";
import { StarRatingInput } from "./StarRatingInput";

export function ReviewModal({
  open,
  itemName,
  initialRating,
  onClose,
  onSubmit,
}: {
  open: boolean;
  itemName: string;
  initialRating: number;
  onClose: () => void;
  onSubmit: (data: { name: string; text: string; rating: number }) => void;
}) {
  if (!open) return null;

  return (
    <ReviewModalInner
      itemName={itemName}
      initialRating={initialRating}
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
}

function ReviewModalInner({
  itemName,
  initialRating,
  onClose,
  onSubmit,
}: {
  itemName: string;
  initialRating: number;
  onClose: () => void;
  onSubmit: (data: { name: string; text: string; rating: number }) => void;
}) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(initialRating || 0);

  const canSubmit = useMemo(() => {
    return (
      name.trim().length > 0 &&
      text.trim().length > 0 &&
      rating >= 1 &&
      rating <= 5
    );
  }, [name, text, rating]);

  return (
    <Modal open title={`Review ${itemName}`} onClose={onClose}>
      <h2 className="text-center text-3xl font-bold tracking-wide text-white">
        Review <span className="text-[#00ff41]">{itemName}</span>
      </h2>

      <div className="mt-8 space-y-6">
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="닉네임 (익명)"
            className="w-full border border-[#333] bg-[#111] px-5 py-4 text-lg text-white placeholder:text-white/30 focus:outline-none focus:border-[#00ff41] transition-colors rounded-none"
          />
        </div>

        <div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="이 아이템에 대한 솔직한 평가를 남겨주세요."
            rows={5}
            className="w-full resize-none border border-[#333] bg-[#111] px-5 py-4 text-lg text-white placeholder:text-white/30 focus:outline-none focus:border-[#00ff41] transition-colors rounded-none"
          />
        </div>

        <div className="flex justify-center">
          <StarRatingInput
            value={rating}
            onChange={setRating}
            size={40}
            label="Your rating"
          />
        </div>

        <button
          type="button"
          disabled={!canSubmit}
          onClick={() => {
            if (!canSubmit) return;
            onSubmit({ name, text, rating });
          }}
          className={[
            "mt-4 w-full border border-[#333] px-6 py-4 text-xl font-bold transition-all uppercase tracking-widest",
            canSubmit
              ? "bg-[#00ff41] text-black hover:bg-[#00cc33] hover:shadow-[0_0_15px_rgba(0,255,65,0.4)]"
              : "cursor-not-allowed bg-[#111] text-white/30",
          ].join(" ")}
        >
          Submit Review
        </button>
      </div>
    </Modal>
  );
}
