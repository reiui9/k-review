import type { EarthItem } from "@/app/lib/earth-data";

export function ItemAvatar({
  item,
  size = 96,
  className,
}: {
  item: EarthItem;
  size?: number;
  className?: string;
}) {
  const style: React.CSSProperties = {
    width: size,
    height: size,
    backgroundImage: `radial-gradient(circle at 28% 28%, ${item.accentFrom}, ${item.accentTo})`,
  };

  return (
    <div
      className={[
        "relative rounded-full border-2 border-white/70 shadow-[0_0_0_2px_rgba(0,0,0,0.6)_inset]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.35),transparent_55%)]" />
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_75%,rgba(0,0,0,0.35),transparent_60%)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="select-none text-white/85 text-2xl font-semibold tracking-[0.2em]">
          {item.name.slice(0, 1).toUpperCase()}
        </span>
      </div>
    </div>
  );
}


