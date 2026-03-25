import React from "react";

/* ------------------------------------------------------------------ */
/*  Sisal DS - Selfie Bet                                              */
/*  Social sharing card: camera selfie with "Ho vinto!" overlay        */
/* ------------------------------------------------------------------ */

const DEFAULT_SELFIE = "https://www.figma.com/api/mcp/asset/64c0e279-93e0-4f51-873e-b00a794ba207";

export interface SelfBetFooterProps {
  brand?: "Sisal" | "Pokerstars" | "Snai";
  tipsterUrl?: string;
}

function SelfBetFooter({
  brand = "Sisal",
  tipsterUrl = "sisal.it/tipster",
}: SelfBetFooterProps) {
  return (
    <div className="bg-[var(--tip-surface-alt,black)] flex gap-2 items-start justify-center px-4 py-3 w-full">
      <div className="flex-1 flex flex-col gap-1 items-start justify-center">
        <span className="font-['Mulish',sans-serif] font-bold text-sm leading-[18px] text-[var(--appereance-font-color-active,#bed62f)]">
          Tipster
        </span>
        <span className="font-['Roboto',sans-serif] font-medium text-[10px] leading-3 text-white text-center">
          Il primo social del mondo delle scommesse
        </span>
      </div>
      <span className="font-['Roboto',sans-serif] font-normal text-[10px] leading-3 text-[var(--card-match-bg-text-alt,#c9cacb)] text-center whitespace-nowrap">
        {tipsterUrl}
      </span>
    </div>
  );
}

export interface SelfBetProps {
  className?: string;
  brand?: "Sisal" | "Pokerstars" | "Snai";
  amount?: string;
  showAmount?: boolean;
  quota?: string;
  selfieSrc?: string;
  showFooter?: boolean;
}

export function SelfBet({
  className,
  brand = "Sisal",
  amount = "49999,99\u20AC",
  showAmount = true,
  quota = "9999.99",
  selfieSrc = DEFAULT_SELFIE,
  showFooter = true,
}: SelfBetProps) {
  const brandLabel = brand === "Pokerstars" ? "PokerStars" : brand === "Snai" ? "Snai" : "Sisal";

  return (
    <div className={className || "flex flex-col items-start w-[360px]"}>
      {/* Main visual area */}
      <div className="bg-[var(--tip-surface-alt,black)] h-[444px] overflow-hidden relative w-full">
        {/* Background confetti / decorative layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] to-black" />

        {/* Brand logo */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="font-['Mulish',sans-serif] font-extrabold text-base leading-5 text-white flex items-center gap-1">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1l2 5h5l-4 3 1.5 5L8 11l-4.5 3L5 9 1 6h5l2-5z" fill="#bed62f" />
            </svg>
            {brandLabel}
          </span>
        </div>

        {/* Selfie circle */}
        <div className="absolute top-[57px] left-1/2 -translate-x-1/2 w-[258px] h-[258px] rounded-full overflow-hidden border-4 border-[#bed62f]/20 z-10">
          <img
            src={selfieSrc}
            alt="Selfie"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Quota badge */}
        <div className="absolute top-[278px] left-1/2 -translate-x-1/2 z-20 flex gap-1 items-center justify-center bg-[var(--appereance-surface-frame-selected,#bed62f)] rounded-full px-4 py-1">
          <span className="font-['Mulish',sans-serif] font-bold text-lg leading-5 text-[var(--font-color-black,#262c2f)]">
            Quota
          </span>
          <span className="font-['Mulish',sans-serif] font-extrabold text-2xl leading-7 text-[var(--font-color-black,#262c2f)]">
            {quota}
          </span>
        </div>

        {/* Ho vinto! + amount */}
        <div className="absolute top-[344px] left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-10">
          <span className="font-['Akshar',sans-serif] font-medium text-[56px] leading-none text-white uppercase">
            Ho vinto!
          </span>
          {showAmount && (
            <span className="font-['Mulish',sans-serif] font-extrabold text-[30px] leading-7 text-[var(--label-selfie-bet-fill,#b6ff00)] text-center drop-shadow-[0_0_7px_rgba(0,0,0,0.77)] tracking-wide">
              {amount}
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      {showFooter && <SelfBetFooter brand={brand} />}
    </div>
  );
}

export default SelfBet;
