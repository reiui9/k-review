export function formatCount(n: number): string {
  return new Intl.NumberFormat("en-US").format(n);
}

export function formatRating(n: number): string {
  return Number.isFinite(n) ? n.toFixed(1) : "0.0";
}


