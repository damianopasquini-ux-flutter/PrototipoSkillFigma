import React from "react";

/* ------------------------------------------------------------------ */
/*  Card / Tip                                                         */
/*  Figma node 5962:48586 – file 1KwGa2GwNraywm2ukpfGHe               */
/* ------------------------------------------------------------------ */

type MatchBet = {
  sport?: string;
  competition?: string;
  date?: string;
  homeTeam?: string;
  awayTeam?: string;
  marketType?: string;
  result?: string;
  odds?: string;
};

type TipsterInfo = {
  name?: string;
  level?: string;
  levelColor?: string;
  rating?: string;
  avatarUrl?: string;
};

export type CardTipProps = {
  className?: string;
  tipster?: TipsterInfo;
  betType?: string;
  timeAgo?: string;
  totalOdds?: string;
  matches?: MatchBet[];
  showHeader?: boolean;
  showDescription?: boolean;
  description?: string;
  showMoreLabel?: string;
  replaysCount?: number;
  showFooter?: boolean;
};

export function CardTip({
  className,
  tipster = {
    name: "SuperBet100!",
    level: "Promessa",
    levelColor: "#016399",
    rating: "5,0",
    avatarUrl: "",
  },
  betType = "MULTIPLA (7)",
  timeAgo = "1 ora fa",
  totalOdds = "x100.75",
  matches = [
    { competition: "Label", date: "12/10/24 - 18:30", homeTeam: "Team 1", awayTeam: "Team 2", marketType: "Market type", result: "Result", odds: "1.50" },
    { competition: "Label", date: "12/10/24 - 18:30", homeTeam: "Team 1", awayTeam: "Team 2", marketType: "Market type", result: "Result", odds: "1.50" },
    { competition: "Label", date: "12/10/24 - 18:30", homeTeam: "Team 1", awayTeam: "Team 2", marketType: "Market type", result: "Result", odds: "1.50" },
  ],
  showHeader = true,
  showDescription = false,
  description = "Lorem ipsum dolor sit amet consed eiu dolor sit amet consed eiu...",
  showMoreLabel = "+ altri esiti",
  replaysCount = 10,
  showFooter = true,
}: CardTipProps) {
  return (
    <div
      className={
        className ||
        "bg-[var(--appereance-surface-frame-default,white)] flex flex-col items-start overflow-hidden rounded-lg shadow-[0px_2px_8px_1px_rgba(0,0,0,0.1)] w-[328px]"
      }
    >
      {/* Header / Tipster */}
      {showHeader && (
        <div className="bg-[var(--tip-surface-active,#262c2f)] flex items-center p-2 rounded-t-lg w-full">
          <div className="flex flex-1 gap-2 items-center">
            {/* Avatar */}
            <div className="w-[38px] h-[38px] rounded-full bg-[#444] overflow-hidden shrink-0">
              {tipster.avatarUrl && (
                <img src={tipster.avatarUrl} alt={tipster.name} className="w-full h-full object-cover" />
              )}
            </div>
            {/* Name + badge */}
            <div className="flex flex-col gap-1 items-start justify-center flex-1 min-w-0">
              <span className="font-bold text-sm leading-[18px] text-white font-['Mulish',sans-serif]">
                {tipster.name}
              </span>
              <div
                className="flex gap-[2px] items-center h-4 px-[6px] rounded-full"
                style={{ backgroundColor: tipster.levelColor || "#016399" }}
              >
                <span className="font-bold text-xs leading-[14px] text-white tracking-[0.12px] font-['Roboto',sans-serif]">
                  &#9733; {tipster.rating}
                </span>
                <span className="text-white text-xs font-['Roboto',sans-serif]">|</span>
                <span className="font-medium text-xs leading-[14px] text-white font-['Roboto',sans-serif]">
                  {tipster.level}
                </span>
              </div>
            </div>
            {/* Three dots */}
            <div className="w-6 h-6 flex items-center justify-center shrink-0">
              <svg width="4" height="16" viewBox="0 0 4 16" fill="none">
                <circle cx="2" cy="2" r="1.5" fill="white" />
                <circle cx="2" cy="8" r="1.5" fill="white" />
                <circle cx="2" cy="14" r="1.5" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Title row */}
      <div className="bg-[var(--tip-surface-alt-2,white)] flex items-center justify-between p-2 w-full">
        <div className="flex flex-col items-start justify-end h-[30px] w-[180px]">
          <span className="font-bold text-sm leading-[18px] text-[var(--appereance-font-color-active,#262c2f)] uppercase font-['Roboto',sans-serif]">
            {betType}
          </span>
          <span className="font-normal text-[10px] leading-[14px] text-[var(--appereance-font-color-alt,#5c6063)] font-['Roboto',sans-serif]">
            {timeAgo}
          </span>
        </div>
        <div className="bg-[var(--appereance-surface-page-default,#eff0f0)] flex flex-col items-end justify-center h-[30px] p-2 rounded-lg">
          <span className="font-bold text-sm leading-[18px] text-[var(--appereance-font-color-active,#262c2f)] text-right font-['Roboto',sans-serif]">
            {totalOdds}
          </span>
        </div>
      </div>

      {/* Description (optional) */}
      {showDescription && (
        <div className="flex flex-col items-start px-2 w-full">
          <div className="border border-[var(--appereance-border-default-alt,#e9eaea)] flex items-center justify-center p-2 rounded-lg w-full">
            <p className="text-xs leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] font-['Roboto',sans-serif]">
              {description}{" "}
              <span className="font-medium text-[#00653b] cursor-pointer">Leggi di pi&ugrave;</span>
            </p>
          </div>
        </div>
      )}

      {/* Match list */}
      <div className="flex flex-col items-start overflow-hidden relative w-full max-h-[276px]">
        {matches.map((match, i) => (
          <div
            key={i}
            className="border-b border-dashed border-[var(--appereance-border-default-alt,#e9eaea)] flex flex-col items-start w-full"
          >
            {/* Match header */}
            <div className="flex flex-col gap-1 items-start pt-2 px-2 w-full">
              <div className="flex gap-2 items-center w-full">
                <div className="flex flex-1 gap-1 items-center min-w-0">
                  {/* Sport icon */}
                  <div className="w-4 h-4 rounded-full bg-[#e9eaea] shrink-0" />
                  <span className="flex-1 font-normal text-xs leading-[14px] text-[var(--appereance-font-color-alt,#5c6063)] truncate font-['Roboto',sans-serif]">
                    {match.competition || "Label"}
                  </span>
                </div>
                <span className="font-normal text-xs leading-[14px] text-[var(--appereance-font-color-alt,#5c6063)] text-center font-['Roboto',sans-serif]">
                  {match.date || "12/10/24 - 18:30"}
                </span>
              </div>
              <div className="flex gap-1 items-center h-[18px] w-full">
                <span className="font-bold text-sm leading-[18px] text-[var(--appereance-font-color-active,#262c2f)] font-['Roboto',sans-serif]">
                  {match.homeTeam || "Team 1"}
                </span>
                <span className="font-bold text-sm leading-[18px] text-[var(--appereance-font-color-active,#262c2f)] font-['Roboto',sans-serif]">
                  -
                </span>
                <span className="font-bold text-sm leading-[18px] text-[var(--appereance-font-color-active,#262c2f)] truncate flex-1 font-['Roboto',sans-serif]">
                  {match.awayTeam || "Team 2"}
                </span>
              </div>
            </div>
            {/* Outcome row */}
            <div className="flex gap-4 items-center px-2 py-[7px] w-full">
              <div className="flex flex-col flex-1 gap-1 items-start min-w-0">
                <span className="font-normal text-xs leading-[14px] text-[var(--appereance-font-color-alt,#5c6063)] truncate w-full font-['Roboto',sans-serif]">
                  {match.marketType || "Market type"}
                </span>
                <div className="flex gap-1 items-start">
                  <span className="font-medium text-xs leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] font-['Roboto',sans-serif]">
                    {match.result || "Result"}
                  </span>
                  <span className="font-medium text-xs leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] truncate font-['Roboto',sans-serif]">
                    ({match.odds || "1.50"})
                  </span>
                </div>
              </div>
              {/* Result button placeholder */}
              <div className="w-6 h-6 rounded-full bg-[#e9eaea] shrink-0 flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M5 0v10M0 5h10" stroke="#5c6063" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        ))}

        {/* "More" overlay */}
        {showMoreLabel && (
          <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start">
            <div className="w-full h-[92px] bg-gradient-to-b from-transparent via-white/80 to-white" />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[var(--appereance-cart-surface-default,#262c2f)] flex gap-1 items-center justify-center px-2 py-1 rounded-full">
              <span className="font-bold text-xs leading-[14px] text-white whitespace-nowrap font-['Roboto',sans-serif]">
                {showMoreLabel}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      {showFooter && (
        <div className="border-t border-[var(--appereance-border-default-alt,#e9eaea)] flex flex-col gap-3 items-start justify-center p-3 rounded-b-lg w-full">
          <div className="flex items-center justify-between h-7 w-full">
            {/* Replays */}
            <div className="flex gap-2 items-center h-full">
              <div className="bg-[var(--tip-button-active,#e9eaea)] flex items-center justify-center h-full px-2 rounded-full">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M17 1l4 4-4 4" stroke="#262c2f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4" stroke="#262c2f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 13v2a4 4 0 01-4 4H3" stroke="#262c2f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-normal text-xs leading-[18px] text-[var(--appereance-font-color-active,#262c2f)] font-['Roboto',sans-serif]">
                  {replaysCount}
                </span>
              </div>
            </div>
            {/* Share */}
            <div className="flex items-center justify-end px-2 py-[2px] rounded-full cursor-pointer">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" stroke="#262c2f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardTip;
