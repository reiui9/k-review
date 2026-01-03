import { EARTH_SEED_REVIEWS, type Review } from "./earth-data";

export type EarthDb = {
  version: 1;
  reviews: Review[];
  myLikes: Record<string, true>;
};

const STORAGE_KEY = "earth-reviews:v1";

function cloneSeed(): EarthDb {
  return {
    version: 1,
    reviews: EARTH_SEED_REVIEWS.map((r) => ({ ...r })),
    myLikes: {},
  };
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isReview(value: unknown): value is Review {
  if (!isObject(value)) return false;
  return (
    typeof value.id === "string" &&
    typeof value.itemId === "string" &&
    typeof value.name === "string" &&
    typeof value.text === "string" &&
    typeof value.rating === "number" &&
    typeof value.likes === "number" &&
    typeof value.createdAt === "number"
  );
}

export function loadDb(): EarthDb {
  if (typeof window === "undefined") return cloneSeed();

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const seed = cloneSeed();
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
      return seed;
    }

    const parsed = JSON.parse(raw) as unknown;
    if (!isObject(parsed)) throw new Error("Invalid db");
    if (parsed.version !== 1) throw new Error("Invalid db version");
    if (!Array.isArray(parsed.reviews)) throw new Error("Invalid reviews");
    if (!parsed.reviews.every(isReview)) throw new Error("Invalid review shape");

    const myLikes =
      isObject(parsed.myLikes) && parsed.myLikes
        ? (Object.fromEntries(
            Object.entries(parsed.myLikes).filter(([, v]) => v === true),
          ) as Record<string, true>)
        : {};

    return {
      version: 1,
      reviews: parsed.reviews,
      myLikes,
    };
  } catch {
    const seed = cloneSeed();
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
    } catch {
      // ignore storage errors
    }
    return seed;
  }
}

export function saveDb(db: EarthDb): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
}


