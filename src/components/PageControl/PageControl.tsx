import React from "react";

/* ── Dot ── */
type DotProps = {
  selected?: boolean;
};

function Dot({ selected = false }: DotProps) {
  return (
    <div className="flex items-start">
      <div
        className={`min-w-2 min-h-2 rounded-full ${
          selected
            ? "bg-[#bed62f] w-6 h-2"
            : "bg-[#c9cacb] w-2 h-2 max-w-2 max-h-2"
        }`}
      />
    </div>
  );
}

/* ── PageControl ── */
type PageControlProps = {
  className?: string;
  total?: number;
  activeIndex?: number;
  onDotClick?: (index: number) => void;
};

export function PageControl({
  className,
  total = 5,
  activeIndex = 0,
  onDotClick,
}: PageControlProps) {
  return (
    <div
      className={
        className ||
        "flex items-center justify-center gap-2"
      }
    >
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          className="bg-transparent border-0 p-0 cursor-pointer"
          onClick={() => onDotClick?.(i)}
          type="button"
          aria-label={`Go to page ${i + 1}`}
        >
          <Dot selected={i === activeIndex} />
        </button>
      ))}
    </div>
  );
}

export default PageControl;
