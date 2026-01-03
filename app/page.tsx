"use client";

import { useState, useMemo } from "react";
import Link from "next/link"; 

import { ItemAvatar } from "@/app/components/ItemAvatar";
import { StarRating } from "@/app/components/StarRating";
import { EARTH_ITEMS, Category } from "@/app/lib/earth-data";
import { formatCount } from "@/app/lib/format";
import { ItemDetailModal } from "@/app/components/ItemDetailModal";
import { useItemStats } from "@/app/lib/useItemStats";

const CATEGORIES: { id: Category; label: string }[] = [
  { id: "ALL", label: "전체" },
  { id: "CONSUMABLE", label: "소비템" },
  { id: "MAP", label: "맵" },
  { id: "SYSTEM", label: "시스템" },
  { id: "NPC", label: "NPC" },
  { id: "NATURE", label: "자연" },
];

type SortOption = "RATING_DESC" | "RATING_ASC" | "REVIEW_COUNT";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("ALL");
  const [sortOption, setSortOption] = useState<SortOption>("RATING_DESC");
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const { stats, isLoaded } = useItemStats();

  // 모든 아이템에 동적 통계 적용
  const allItems = useMemo(() => {
    return EARTH_ITEMS.map((item) => {
      const itemStats = stats[item.id];
      if (itemStats) {
        return {
          ...item,
          ratingAvg: itemStats.ratingAvg,
          ratingCount: itemStats.reviewCount, // ratingCount를 리뷰 수와 동일하게 처리 (별점만 남기는 기능이 없으므로)
          reviewCount: itemStats.reviewCount,
        };
      }
      return item;
    });
  }, [stats]);

  const filteredItems = useMemo(() => {
    let items = [...allItems];

    if (selectedCategory !== "ALL") {
      items = items.filter((item) => item.category === selectedCategory);
    }

    items.sort((a, b) => {
      if (sortOption === "RATING_DESC") return b.ratingAvg - a.ratingAvg;
      if (sortOption === "RATING_ASC") return a.ratingAvg - b.ratingAvg;
      if (sortOption === "REVIEW_COUNT") return b.reviewCount - a.reviewCount;
      return 0;
    });

    return items;
  }, [selectedCategory, sortOption, allItems]);

  const selectedItem = useMemo(
    () => allItems.find((i) => i.id === selectedItemId) || null,
    [allItems, selectedItemId]
  );

  return (
    <div className="min-h-screen earth-bg text-white font-sans selection:bg-[#00ff41] selection:text-black">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-8">
        {/* Header */}
        <div className="text-[#00ff41] text-xl font-mono font-semibold tracking-[0.22em] uppercase text-center mb-2">
          K-SERVER
        </div>

        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-4">
            <span className="text-[#00ff41] text-3xl animate-pulse">★</span>
            <h1 className="earth-title text-5xl sm:text-7xl lg:text-[90px] leading-none text-white">
              K-REVIEW
            </h1>
            <span className="text-[#00ff41] text-3xl animate-pulse">★</span>
          </div>
          <div className="mt-3 text-lg sm:text-2xl tracking-[0.5em] text-white/70 font-mono uppercase">
            System Analysis
          </div>
        </div>

        {/* Intro Box */}
        <div className="mb-8 border-2 border-[#333] bg-black/80 px-6 py-4 retro-border">
          <div className="flex items-center gap-3 text-white/85">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-sm bg-[#00ff41] text-black text-sm font-bold">
              !
            </span>
            <p className="text-sm sm:text-base font-mono text-[#00ff41]">
              [SYSTEM] 대한민국(K-Server) 밸런스 패치를 위한 청문회가 시작되었습니다.
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center bg-[#111] p-4 border border-[#333] rounded-lg">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-sm font-bold rounded-full transition-all border ${
                  selectedCategory === cat.id
                    ? "bg-[#00ff41] text-black border-[#00ff41]"
                    : "bg-black text-white border-[#333] hover:border-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-white/50 uppercase">Sort by:</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as SortOption)}
              className="bg-black text-white border border-[#333] px-3 py-2 text-sm rounded focus:outline-none focus:border-[#00ff41]"
            >
              <option value="RATING_DESC">별점 높은순 (갓패치)</option>
              <option value="RATING_ASC">별점 낮은순 (똥망겜)</option>
              <option value="REVIEW_COUNT">리뷰 많은순 (핫이슈)</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {!isLoaded ? (
            <div className="col-span-full py-20 text-center text-white/50">
              시스템 데이터를 불러오는 중...
            </div>
          ) : (
            filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedItemId(item.id)}
                className="group block text-left h-full border-2 border-[#333] bg-black px-4 py-6 transition-all hover:-translate-y-1 hover:border-[#00ff41] hover:shadow-[0_4px_0_0_#00ff41] focus:outline-none"
              >
                <div className="flex flex-col items-center">
                  <ItemAvatar item={item} size={80} className="mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-lg font-bold tracking-tight text-white mb-1 group-hover:text-[#00ff41]">
                    {item.name}
                  </div>
                  <div className="text-xs text-white/50 mb-3 font-mono">
                    {item.category}
                  </div>
                  <div className="mb-2">
                    <StarRating value={item.ratingAvg} size={16} />
                  </div>
                  <div className="text-xs font-mono text-white/60">
                    {formatCount(item.reviewCount)} reviews
                  </div>
                </div>
              </button>
            ))
          )}
        </div>
        
        {/* Footer */}
        <div className="mt-20 flex flex-col items-center gap-4 text-center text-white/40 text-sm font-mono pb-10">
          <a 
            href="https://forms.google.com/your-form-id-here" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-b border-transparent hover:border-[#00ff41] hover:text-[#00ff41] transition-colors"
          >
            📢 새로운 아이템 제보하기
          </a>
          <div>
            © 2024 K-SERVER REVIEW. All rights reserved.
          </div>
        </div>
      </div>

      <ItemDetailModal
        item={selectedItem}
        open={!!selectedItem}
        onClose={() => setSelectedItemId(null)}
      />
    </div>
  );
}
