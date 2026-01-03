"use client";

import { useEffect, useState } from "react";
import { loadDb } from "./storage";
import { EARTH_ITEMS } from "./earth-data";

export type ItemStats = {
  ratingAvg: number;
  reviewCount: number;
};

export function useItemStats() {
  const [stats, setStats] = useState<Record<string, ItemStats>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // 모든 아이템의 초기 통계 설정 (데이터가 없을 때를 대비해 0으로 초기화하거나 시드 데이터 기준)
  // 여기서는 로컬 DB의 리뷰를 기준으로 재계산합니다.
  
  const refreshStats = () => {
    const db = loadDb();
    const newStats: Record<string, ItemStats> = {};

    // 1. 모든 아이템에 대해 초기화
    EARTH_ITEMS.forEach(item => {
      newStats[item.id] = {
        ratingAvg: 0,
        reviewCount: 0,
      };
    });

    // 2. 리뷰 데이터를 순회하며 통계 집계
    const sums: Record<string, number> = {};
    const counts: Record<string, number> = {};

    db.reviews.forEach(review => {
      if (!sums[review.itemId]) {
        sums[review.itemId] = 0;
        counts[review.itemId] = 0;
      }
      sums[review.itemId] += review.rating;
      counts[review.itemId] += 1;
    });

    // 3. 평균 계산
    EARTH_ITEMS.forEach(item => {
      const sum = sums[item.id] || 0;
      const count = counts[item.id] || 0;
      newStats[item.id] = {
        ratingAvg: count === 0 ? 0 : sum / count,
        reviewCount: count,
      };
    });

    setStats(newStats);
    setIsLoaded(true);
  };

  useEffect(() => {
    refreshStats();
    
    // 다른 탭이나 창에서 변경된 경우를 감지하기 위해 storage 이벤트 리스너 추가
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "earth-reviews:v1") {
        refreshStats();
      }
    };
    
    // 커스텀 이벤트 (같은 창 내에서 리뷰 작성 시 업데이트를 위해)
    const handleLocalUpdate = () => refreshStats();

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("review-updated", handleLocalUpdate);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
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

