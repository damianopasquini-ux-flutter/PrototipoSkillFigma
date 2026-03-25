import React from "react";

/* ------------------------------------------------------------------ */
/*  Card / Bet&Fun                                                     */
/*  Figma node 14468:47176 - file 1KwGa2GwNraywm2ukpfGHe              */
/* ------------------------------------------------------------------ */

interface BetFunItem {
  label: string;
  imageUrl?: string;
  bgColor?: string;
  bgGradient?: string;
}

interface BetFunItemProps {
  item: BetFunItem;
  onClick?: () => void;
}

function BetFunItemCard({ item, onClick }: BetFunItemProps) {
  const bgStyle: React.CSSProperties = {};
  if (item.bgGradient) {
    bgStyle.backgroundImage = item.bgGradient;
  } else if (item.bgColor) {
    bgStyle.backgroundColor = item.bgColor;
  }

  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 w-[62px] shrink-0 bg-transparent border-none cursor-pointer p-0"
    >
      {/* Circular avatar */}
      <div
        className="w-[62px] h-[62px] rounded-full border-2 border-[var(--appereance-filter-chips-border-alt,white)] overflow-hidden shrink-0"
        style={bgStyle}
      >
        {item.imageUrl && (
          <img
            src={item.imageUrl}
            alt={item.label}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Label */}
      <span className="font-['Roboto',sans-serif] font-medium text-[var(--font-size-xs,12px)] leading-[var(--font-line-height-xs,14px)] text-[var(--appereance-font-color-active,#262c2f)] text-center h-[28px] w-full">
        {item.label}
      </span>
    </button>
  );
}

/* ------------------------------------------------------------------ */

const DEFAULT_ITEMS: BetFunItem[] = [
  { label: "Salva il bottino", bgColor: "#005f3a" },
  {
    label: "Ruota dei bonus",
    bgGradient: "linear-gradient(to bottom, #feeda4, #fdc435)",
  },
  {
    label: "Quiz Bet",
    bgGradient: "linear-gradient(146deg, #83a4d4 32%, #b6fbff 139%)",
  },
  {
    label: "Easy Bet",
    bgGradient: "linear-gradient(44deg, #00744a 17%, #b9d732 129%)",
  },
  { label: "Aviator", bgColor: "#ffffff" },
  {
    label: "Totocalcio",
    bgGradient: "linear-gradient(225deg, #0b7d3e 0%, #005f3b 100%)",
  },
  { label: "Shining Crown", bgColor: "#ffffff" },
  { label: "Pirots 4", bgColor: "#ffffff" },
  { label: "VipS Game Show", bgColor: "#ffffff" },
];

/* ------------------------------------------------------------------ */

export interface CardBetFunProps {
  items?: BetFunItem[];
  onItemClick?: (item: BetFunItem, index: number) => void;
}

export function CardBetFun({
  items = DEFAULT_ITEMS,
  onItemClick,
}: CardBetFunProps) {
  return (
    <div className="bg-[var(--appereance-surface-page-default,#eff0f0)] flex flex-col items-start py-6 w-full">
      <div className="flex items-center gap-[var(--spacing-16,16px)] px-[var(--spacing-16,16px)] overflow-x-auto w-full">
        {items.map((item, idx) => (
          <BetFunItemCard
            key={idx}
            item={item}
            onClick={() => onItemClick?.(item, idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default CardBetFun;
