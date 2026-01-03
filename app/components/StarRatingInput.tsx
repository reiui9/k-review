"use client";

import { useMemo, useState } from "react";

function StarIcon({
  active,
  size,
}: {
  active: boolean;
  size: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={active ? "text-amber-400" : "text-white/40"}
      fill={active ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 2.4l2.9 6.1 6.7.6-5.1 4.3 1.6 6.6L12 16.9 5.9 20l1.6-6.6-5.1-4.3 6.7-.6L12 2.4z" />
    </svg>
  );
}

export function StarRatingInput({
  value,
  onChange,
  size = 34,
  disabled = false,
  label = "Rating",
}: {
  value: number;
  onChange: (next: number) => void;
  size?: number;
  disabled?: boolean;
  label?: string;
}) {
  const [hover, setHover] = useState<number | null>(null);
  const displayValue = hover ?? value;
  const stars = useMemo(() => [1, 2, 3, 4, 5], []);

  return (
    <div
      className={[
        "flex items-center gap-2",
        disabled ? "opacity-60" : "",
      ].join(" ")}
      role="radiogroup"
      aria-label={label}
    >
      {stars.map((n) => {
        const active = n <= displayValue;
        return (
          <button
            key={n}
            type="button"
            className={[
              "rounded-sm outline-none focus:ring-2 focus:ring-white/60",
              disabled ? "cursor-not-allowed" : "cursor-pointer",
            ].join(" ")}
            role="radio"
            aria-checked={value === n}
            disabled={disabled}
            onMouseEnter={() => setHover(n)}
            onMouseLeave={() => setHover(null)}
            onFocus={() => setHover(n)}
            onBlur={() => setHover(null)}
            onClick={() => onChange(n)}
          >
            <StarIcon active={active} size={size} />
            <span className="sr-only">{n} stars</span>
          </button>
        );
      })}
    </div>
  );
}


