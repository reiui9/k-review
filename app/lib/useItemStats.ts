"use client";

import { useEffect, useState } from "react";
import { EARTH_ITEMS } from "./earth-data";

export type ItemStats = {
  ratingAvg: number;
  reviewCount: number;
};

export function useItemStats() {
  const [stats, setStats] = useState<Record<string, ItemStats>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  const refreshStats = async () => {
    try {
      const res = await fetch("/api/stats");
      if (!res.ok) throw new Error("Failed to fetch stats");
      const data = await res.json();
      
      // Merge with default items to ensure all items have an entry
      const newStats: Record<string, ItemStats> = {};
      EARTH_ITEMS.forEach(item => {
        newStats[item.id] = {
           ratingAvg: 0, 
           reviewCount: 0 
        };
      });

      // Override with data from API
      Object.entries(data.stats).forEach(([itemId, val]: [string, any]) => {
         newStats[itemId] = {
           ratingAvg: Number(val.ratingAvg),
           reviewCount: Number(val.reviewCount)
         };
      });

      setStats(newStats);
      setIsLoaded(true);
    } catch (e) {
      console.error(e);
      // Fallback: don't break UI, just show zeros or loaded state
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    refreshStats();
    
    // 커스텀 이벤트 (같은 창 내에서 리뷰 작성 시 업데이트를 위해)
    const handleLocalUpdate = () => refreshStats();
    window.addEventListener("review-updated", handleLocalUpdate);

    return () => {
      window.removeEventListener("review-updated", handleLocalUpdate);
    };
  }, []);

  return { stats, isLoaded, refreshStats };
}

// 이벤트를 발생시키는 유틸리티 함수
export function triggerReviewUpdate() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("review-updated"));
  }
}

