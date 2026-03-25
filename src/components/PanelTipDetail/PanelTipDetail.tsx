import React from "react";
import { Button } from "../Button/Button";

/* ------------------------------------------------------------------ */
/*  Sisal DS - Panel / Tip Detail                                      */
/*  Detail view of a betting tip with match rows and social actions     */
/* ------------------------------------------------------------------ */

function CloseButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-[var(--appereance-top-navigation-panel-icon-surface,#c9cacb)] rounded-full size-6 flex items-center justify-center shrink-0"
      aria-label="Chiudi"
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M1 1l8 8M9 1l-8 8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </button>
  );
}

export interface TipMatchRow {
  sport?: string;
  date?: string;
  teams?: string;
  marketType?: string;
  result?: string;
  odds?: string;
}

export interface TipsterInfo {
  name?: string;
  avatarSrc?: string;
  rating?: number;
  badge?: string;
}

export interface PanelTipDetailProps {
  className?: string;
  title?: string;
  tipType?: string;
  totalOdds?: string;
  timeAgo?: string;
  tipster?: TipsterInfo;
  matches?: TipMatchRow[];
  replayCount?: number;
  showTipster?: boolean;
  onClose?: () => void;
  onReplay?: () => void;
  onShare?: () => void;
}

function MatchRow({
  sport = "Label",
  date = "12/10/24 - 18:30",
  teams = "Team 1 - Team 2",
  marketType = "Market type",
  result = "Result (1.50)",
  onAdd,
}: TipMatchRow & { onAdd?: () => void }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {/* Header row */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-1">
          <span className="w-4 h-4 flex items-center justify-center text-[var(--appereance-font-color-alt,#5c6063)]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 4-7 8-7s8 3 8 7" />
            </svg>
          </span>
          <span className="font-['Roboto',sans-serif] font-normal text-xs leading-[14px] text-[var(--appereance-font-color-alt,#5c6063)]">
            {sport}
          </span>
        </div>
        <span className="font-['Roboto',sans-serif] font-normal text-xs leading-[14px] text-[var(--appereance-font-color-alt,#5c6063)]">
          {date}
        </span>
      </div>

      {/* Teams */}
      <span className="font-['Roboto',sans-serif] font-bold text-sm leading-[18px] text-[var(--appereance-font-color-active,#262c2f)]">
        {teams}
      </span>

      {/* Market + result + add btn */}
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col">
          <span className="font-['Roboto',sans-serif] font-normal text-xs leading-[14px] text-[var(--appereance-font-color-alt,#5c6063)]">
            {marketType}
          </span>
          <span className="font-['Roboto',sans-serif] font-bold text-sm leading-[18px] text-[var(--appereance-font-color-active,#262c2f)]">
            {result}
          </span>
        </div>
        <button
          type="button"
          onClick={onAdd}
          className="w-8 h-8 rounded-full border border-[var(--appereance-border-default-active,#c9cacb)] flex items-center justify-center text-[var(--appereance-font-color-active,#262c2f)] hover:bg-[var(--appereance-surface-frame-selected,#bed62f)]/10"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M7 1v12M1 7h12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export function PanelTipDetail({
  className,
  title = "Dettaglio tip",
  tipType = "MULTIPLA (7)",
  totalOdds = "x100.75",
  timeAgo = "1 ora fa",
  tipster = {
    name: "SuperBet100!",
    rating: 5.0,
    badge: "Promessa",
  },
  matches = [
    { sport: "Label", date: "12/10/24 - 18:30", teams: "Team 1 - Team 2", marketType: "Market type", result: "Result (1.50)" },
    { sport: "Label", date: "12/10/24 - 18:30", teams: "Team 1 - Team 2", marketType: "My Combo (10.10)", result: "Result" },
    { sport: "Label", date: "12/10/24 - 18:30", teams: "Team 1 - Team 2", marketType: "Market type", result: "Result (1.50)" },
  ],
  replayCount = 10,
  showTipster = true,
  onClose,
  onReplay,
  onShare,
}: PanelTipDetailProps) {
  return (
    <div
      className={
        className ||
        "bg-[var(--appereance-surface-panel-default,white)] flex flex-col items-start overflow-clip rounded-t-[var(--radius-panel,8px)] w-[360px]"
      }
    >
      {/* Header */}
      <div className="flex gap-2 h-14 items-center px-4 rounded-t-[var(--radius-panel,8px)] w-full">
        <h2 className="flex-1 font-['Mulish',sans-serif] font-extrabold text-2xl leading-7 text-[var(--appereance-font-color-active,#262c2f)]">
          {title}
        </h2>
        <CloseButton onClick={onClose} />
      </div>

      {/* Tipster info */}
      {showTipster && (
        <div className="flex items-center gap-3 px-4 py-2 w-full bg-[var(--tip-surface-alt,#262c2f)]">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-[var(--appereance-border-default-alt,#5c6063)] overflow-hidden flex items-center justify-center">
            {tipster.avatarSrc ? (
              <img src={tipster.avatarSrc} alt="" className="w-full h-full object-cover" />
            ) : (
              <span className="text-white text-lg font-bold font-['Mulish',sans-serif]">
                {tipster.name?.charAt(0) || "?"}
              </span>
            )}
          </div>
          <div className="flex-1 flex flex-col gap-0.5">
            <span className="font-['Roboto',sans-serif] font-bold text-sm leading-[18px] text-white">
              {tipster.name}
            </span>
            <div className="flex items-center gap-1">
              <span className="bg-[#ff8e0d] text-[#262c2f] font-['Roboto',sans-serif] font-bold text-[10px] leading-3 px-1 py-0.5 rounded">
                {tipster.rating?.toFixed(1)}
              </span>
              {tipster.badge && (
                <span className="bg-[#0d4ea5] text-white font-['Roboto',sans-serif] font-medium text-[10px] leading-3 px-1.5 py-0.5 rounded">
                  {tipster.badge}
                </span>
              )}
            </div>
          </div>
          {/* 3-dots menu */}
          <button type="button" className="w-6 h-6 flex items-center justify-center text-[var(--appereance-font-color-alt,#c9cacb)]">
            <svg width="4" height="16" viewBox="0 0 4 16" fill="currentColor">
              <circle cx="2" cy="2" r="1.5" />
              <circle cx="2" cy="8" r="1.5" />
              <circle cx="2" cy="14" r="1.5" />
            </svg>
          </button>
        </div>
      )}

      {/* Tip type + odds */}
      <div className="flex items-center justify-between px-4 py-3 w-full">
        <div className="flex flex-col">
          <span className="font-['Roboto',sans-serif] font-bold text-sm leading-[18px] text-[var(--appereance-font-color-active,#262c2f)]">
            {tipType}
          </span>
          <span className="font-['Roboto',sans-serif] font-normal text-xs leading-[14px] text-[var(--appereance-font-color-alt,#929597)]">
            {timeAgo}
          </span>
        </div>
        <span className="font-['Roboto',sans-serif] font-bold text-base leading-5 text-[var(--appereance-font-color-active,#262c2f)]">
          {totalOdds}
        </span>
      </div>

      {/* Match rows */}
      <div className="flex flex-col gap-4 px-4 pb-4 w-full divide-y divide-[var(--appereance-border-default-alt,#e9eaea)]">
        {matches.map((match, i) => (
          <div key={i} className={i > 0 ? "pt-4" : ""}>
            <MatchRow {...match} />
          </div>
        ))}
      </div>

      {/* Social actions bar */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-[var(--appereance-border-default-alt,#e9eaea)] w-full">
        <div className="flex items-center gap-1 text-[var(--appereance-font-color-active,#262c2f)]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 1l4 4-4 4M21 5H7a4 4 0 000 8h1M7 23l-4-4 4-4M3 19h14a4 4 0 000-8h-1" />
          </svg>
          <span className="font-['Roboto',sans-serif] font-medium text-xs leading-[14px]">{replayCount}</span>
        </div>
        <button
          type="button"
          onClick={onShare}
          className="w-6 h-6 flex items-center justify-center text-[var(--appereance-font-color-active,#262c2f)]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" />
          </svg>
        </button>
      </div>

      {/* Replay CTA */}
      <div className="flex items-center justify-center gap-2 px-4 py-4 w-full">
        <Button
          label="Rigioca tip"
          variant="default"
          className="flex-1 inline-flex items-center justify-center gap-2 px-6 h-10 rounded-full font-bold text-sm font-['Roboto',sans-serif] bg-[var(--appereance-surface-frame-selected,#bed62f)] text-[var(--appereance-font-color-active,#262c2f)] cursor-pointer"
          onClick={onReplay}
        />
      </div>
    </div>
  );
}

export default PanelTipDetail;
