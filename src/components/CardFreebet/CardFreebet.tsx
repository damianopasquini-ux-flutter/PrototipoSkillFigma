import React from "react";

/* ------------------------------------------------------------------ */
/*  Card / Freebet                                                     */
/*  Figma node 7084:100945 – file 1KwGa2GwNraywm2ukpfGHe              */
/* ------------------------------------------------------------------ */

export type CardFreebetProps = {
  className?: string;
  value?: string;
  title?: string;
  deadline?: string;
  selected?: boolean;
  showRadio?: boolean;
  sportIconUrl?: string;
};

export function CardFreebet({
  className,
  value = "555\u20AC",
  title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  deadline = "Scade il 07/11/2024",
  selected = false,
  showRadio = true,
  sportIconUrl = "",
}: CardFreebetProps) {
  return (
    <div
      className={
        className ||
        `bg-[var(--appereance-card-freebet-fill,#262c2f)] border-2 border-solid flex gap-[10px] items-center overflow-hidden pl-3 pr-2 py-2 relative rounded-lg shadow-[0px_2px_8px_1px_rgba(0,0,0,0.1)] w-[243px]
        ${selected ? "border-[var(--appereance-icon-fill-selected,#bed62f)]" : "border-[var(--appereance-card-freebet-border,#5c6063)]"}`
      }
    >
      {/* Radio button */}
      {showRadio && (
        <div className="w-6 h-6 shrink-0 flex items-center justify-center">
          <div
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
            ${selected ? "border-[#bed62f]" : "border-[#929597]"}`}
          >
            {selected && <div className="w-3 h-3 rounded-full bg-[#bed62f]" />}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col flex-1 gap-[2px] items-start justify-center min-w-0">
        {/* Value */}
        <span className="font-bold text-lg leading-5 text-[var(--badge-notification-fill-selected,#bed62f)] font-['Mulish',sans-serif]">
          {value}
        </span>
        {/* Title */}
        <p className="font-medium text-sm leading-[18px] text-white h-[18px] overflow-hidden text-ellipsis whitespace-nowrap w-full font-['Roboto',sans-serif]">
          {title}
        </p>
        {/* Deadline */}
        <span className="font-normal text-xs leading-[14px] text-[var(--appereance-tab-bar-text-active,#c9cacb)] font-['Roboto',sans-serif]">
          {deadline}
        </span>
      </div>

      {/* Sport icon overlay (top-right) */}
      {sportIconUrl && (
        <div className="absolute right-[10px] top-[-18px] w-[66px] h-[66px] opacity-20 pointer-events-none">
          <img src={sportIconUrl} alt="" className="w-full h-full object-contain" />
        </div>
      )}
      {!sportIconUrl && (
        <div className="absolute right-[10px] top-[-8px] w-[48px] h-[48px] opacity-10 pointer-events-none">
          {/* Default basketball icon */}
          <svg viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="22" stroke="white" strokeWidth="2" />
            <path d="M2 24h44M24 2v44M6 6c10 8 10 28 0 36M42 6c-10 8-10 28 0 36" stroke="white" strokeWidth="2" />
          </svg>
        </div>
      )}
    </div>
  );
}

export default CardFreebet;
