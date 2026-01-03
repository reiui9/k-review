import type { HTMLAttributes } from "react";

function StarIcon({
  filled,
  size,
  className,
}: {
  filled: boolean;
  size: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 2.4l2.9 6.1 6.7.6-5.1 4.3 1.6 6.6L12 16.9 5.9 20l1.6-6.6-5.1-4.3 6.7-.6L12 2.4z" />
    </svg>
  );
}

export function StarRating({
  value,
  size = 18,
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement> & { value: number; size?: number }) {
  const clamped = Math.max(0, Math.min(5, value));
  const pct = (clamped / 5) * 100;

  return (
    <div
      className={["relative inline-flex", className].filter(Boolean).join(" ")}
      aria-label={`Rating: ${clamped.toFixed(1)} out of 5`}
      {...rest}
    >
      <div className="flex gap-1 text-white/20">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} filled={false} size={size} />
        ))}
      </div>
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 overflow-hidden"
        style={{ width: `${pct}%` }}
      >
        <div className="flex w-max gap-1 text-[#ffd700] drop-shadow-[0_0_2px_rgba(255,215,0,0.5)]">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} filled size={size} />
          ))}
        </div>
      </div>
    </div>
  );
}
