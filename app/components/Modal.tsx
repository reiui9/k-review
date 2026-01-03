"use client";

import { useEffect, useRef } from "react";

export function Modal({
  open,
  title,
  onClose,
  children,
}: {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => closeRef.current?.focus());

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-xl border-2 border-[#333] bg-black p-8 shadow-[0_0_20px_rgba(0,255,65,0.1)] retro-border">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute -top-5 -right-5 h-10 w-10 rounded-full border-2 border-[#333] bg-black text-xl leading-none text-[#00ff41] hover:bg-[#00ff41] hover:text-black hover:border-[#00ff41] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00ff41]"
          aria-label="Close"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
