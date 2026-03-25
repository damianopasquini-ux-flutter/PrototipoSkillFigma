import React from "react";

/* ------------------------------------------------------------------ */
/*  Sisal DS - Card Match                                             */
/*  Variants: Extended (with shirts) and Compact (text-only list)     */
/* ------------------------------------------------------------------ */

/* ---------- shared sub-components ---------- */

export interface BadgeProps {
  label: string;
  variant?: "promo" | "breaking-bets" | "new";
  className?: string;
}

export function Badge({ label, variant = "promo", className }: BadgeProps) {
  const bgMap: Record<string, string> = {
    promo: "bg-[var(--badge-default-fill-promo,#ffbf00)]",
    "breaking-bets": "bg-[var(--badge-default-fill-breaking-bets,#ff8e0d)]",
    new: "bg-[var(--badge-default-fill-new,#bed62f)]",
  };
  return (
    <span
      className={[
        "inline-flex items-center justify-center h-[14px] px-1 rounded-[2px] overflow-hidden",
        bgMap[variant] ?? bgMap.promo,
        "font-['Roboto',sans-serif] text-[10px] font-medium leading-normal",
        "text-[var(--badge-default-text-color-bg-light-default,#262c2f)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {label}
    </span>
  );
}

export interface BadgeMarketNumberProps {
  count?: number;
  className?: string;
}

export function BadgeMarketNumber({ count = 3490, className }: BadgeMarketNumberProps) {
  return (
    <span
      className={[
        "inline-flex items-center justify-center h-4 px-1 py-[2px] rounded-lg",
        "border border-[var(--appereance-badge-result-fill-active,#5c6063)]",
        "font-['Roboto',sans-serif] text-[10px] font-medium leading-[12px]",
        "text-[var(--appereance-badge-result-text-active,#5c6063)] text-right whitespace-nowrap",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      + {count}
    </span>
  );
}

export interface MatchHeaderProps {
  sportIcon?: React.ReactNode;
  sportLabel?: string;
  promo?: boolean;
  breakingBets?: boolean;
  streaming?: boolean;
  marketCount?: number;
  className?: string;
}

export function MatchHeader({
  sportIcon,
  sportLabel = "Label",
  promo = false,
  breakingBets = false,
  streaming = false,
  marketCount,
  className,
}: MatchHeaderProps) {
  return (
    <div className={["flex items-center gap-2 w-full", className].filter(Boolean).join(" ")}>
      {/* Sport + label */}
      <div className="flex flex-1 items-center gap-[2px] min-w-0">
        {sportIcon && <span className="w-4 h-4 shrink-0 flex items-center justify-center">{sportIcon}</span>}
        <span className="font-['Roboto',sans-serif] text-xs font-normal leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] truncate">
          {sportLabel}
        </span>
      </div>
      {/* Info badges */}
      <div className="flex items-center gap-1 shrink-0">
        {promo && <Badge label="Promo" variant="promo" />}
        {breakingBets && <Badge label="Breaking Bets" variant="breaking-bets" />}
        {streaming && (
          <span className="w-4 h-4 text-[var(--appereance-font-color-active,#262c2f)]">
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-full h-full">
              <path d="M3 4.5a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-7z" />
            </svg>
          </span>
        )}
        {marketCount != null && <BadgeMarketNumber count={marketCount} />}
      </div>
    </div>
  );
}

/* ---------- Odds selection button ---------- */

export interface OddsButtonProps {
  label?: string;
  odds?: string;
  selected?: boolean;
  increased?: boolean;
  onClick?: () => void;
  className?: string;
}

export function OddsButton({
  label = "1",
  odds = "1.55",
  selected = false,
  increased = false,
  onClick,
  className,
}: OddsButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "flex flex-1 flex-col items-center justify-center gap-[2px] h-9 px-2 rounded-lg overflow-hidden",
        "font-['Roboto',sans-serif] text-xs text-center whitespace-nowrap transition-colors",
        selected
          ? "bg-[var(--appereance-odds-selection-fill-selected,#262c2f)] text-[var(--appereance-odds-selection-text-selected,#bed62f)]"
          : "bg-[var(--appereance-odds-selection-fill-active,#e9eaea)] text-[var(--appereance-odds-selection-text-active,#262c2f)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="font-normal leading-[14px]">{label}</span>
      <span className={["font-bold leading-[100%]", increased ? "text-[var(--icon-fill-success,#1a924b)]" : ""].join(" ")}>
        {odds}
      </span>
    </button>
  );
}

/* ---------- Time indicator ---------- */

export interface TimeIndicatorProps {
  date?: string;
  time?: string;
  className?: string;
}

export function TimeIndicator({ date = "01/01", time = "18:00", className }: TimeIndicatorProps) {
  return (
    <div
      className={[
        "flex flex-col items-center justify-center gap-[2px] w-12 h-16 p-[2px]",
        "font-['Roboto',sans-serif] text-xs font-normal leading-[14px]",
        "text-[var(--appereance-font-color-active,#262c2f)] text-center whitespace-nowrap",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span>{date}</span>
      <span>{time}</span>
    </div>
  );
}

/* ---------- Extended card ---------- */

export interface CardMatchExtendedProps {
  sportIcon?: React.ReactNode;
  sportLabel?: string;
  promo?: boolean;
  breakingBets?: boolean;
  streaming?: boolean;
  marketCount?: number;
  team1: string;
  team2: string;
  shirt1?: React.ReactNode;
  shirt2?: React.ReactNode;
  date?: string;
  time?: string;
  marketLabel?: string;
  odds?: OddsButtonProps[];
  badgeSpecial?: boolean;
  link?: { label: string; href: string };
  className?: string;
}

export function CardMatchExtended({
  sportIcon,
  sportLabel,
  promo,
  breakingBets,
  streaming,
  marketCount,
  team1,
  team2,
  shirt1,
  shirt2,
  date,
  time,
  marketLabel = "Market label",
  odds = [],
  badgeSpecial = false,
  link,
  className,
}: CardMatchExtendedProps) {
  return (
    <div
      className={[
        "flex flex-col items-start gap-2 p-2 w-[328px] rounded-lg",
        "bg-[var(--appereance-surface-frame-default,white)]",
        "shadow-[0px_2px_8px_0px_rgba(0,0,0,0.1)]",
        "font-['Roboto',sans-serif]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <MatchHeader
        sportIcon={sportIcon}
        sportLabel={sportLabel}
        promo={promo}
        breakingBets={breakingBets}
        streaming={streaming}
        marketCount={marketCount}
      />

      {/* Teams + time */}
      <div className="flex items-center gap-[2px] w-full">
        <div className="flex flex-1 flex-col items-center min-w-0">
          {shirt1 ?? <div className="w-9 h-9 rounded-full bg-[var(--appereance-border-default-alt,#e9eaea)]" />}
          <span className="text-xs font-medium leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] text-center h-7 flex items-center">
            {team1}
          </span>
        </div>

        <TimeIndicator date={date} time={time} />

        <div className="flex flex-1 flex-col items-center min-w-0">
          {shirt2 ?? <div className="w-9 h-9 rounded-full bg-[var(--appereance-border-default-alt,#e9eaea)]" />}
          <span className="text-xs font-medium leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] text-center h-7 flex items-center">
            {team2}
          </span>
        </div>
      </div>

      {/* Market label */}
      <span className="w-full text-center text-[10px] leading-[12px] font-normal text-[var(--appereance-font-color-alt,#5c6063)]">
        {marketLabel}
      </span>

      {/* Badge special */}
      {badgeSpecial && (
        <div className="relative w-full h-[14px]">
          <span className="absolute -left-2 top-0 inline-flex items-center gap-1 pl-1 pr-2 rounded-r-full bg-[var(--badge-default-fill-quota-maggiorata,#262c2f)] text-[10px] font-medium leading-[12px] text-white">
            Quota maggiorata
          </span>
        </div>
      )}

      {/* Odds row */}
      {odds.length > 0 && (
        <div className="flex gap-2 w-full">
          {odds.map((o, i) => (
            <OddsButton key={i} {...o} />
          ))}
        </div>
      )}

      {/* Link */}
      {link && (
        <div className="flex items-center justify-center pt-2 w-full">
          <a
            href={link.href}
            className="text-xs font-medium leading-[14px] text-[var(--font-color-link,#00653b)] underline"
          >
            {link.label}
          </a>
        </div>
      )}
    </div>
  );
}

/* ---------- Compact card ---------- */

export interface CardMatchCompactProps {
  sportIcon?: React.ReactNode;
  sportLabel?: string;
  promo?: boolean;
  breakingBets?: boolean;
  streaming?: boolean;
  marketCount?: number;
  team1: string;
  team2: string;
  dateTime?: string;
  livescore?: { score1: string; score2: string };
  odds?: OddsButtonProps[];
  className?: string;
}

export function CardMatchCompact({
  sportIcon,
  sportLabel,
  promo,
  breakingBets,
  streaming,
  marketCount,
  team1,
  team2,
  dateTime = "12/10 - 15:05",
  livescore,
  odds = [],
  className,
}: CardMatchCompactProps) {
  return (
    <div
      className={[
        "flex flex-col items-start gap-2 p-2 w-[328px] h-[92px] rounded-lg",
        "bg-[var(--appereance-surface-frame-default,white)]",
        "shadow-[0px_2px_8px_0px_rgba(0,0,0,0.1)]",
        "font-['Roboto',sans-serif]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <MatchHeader
        sportIcon={sportIcon}
        sportLabel={sportLabel}
        promo={promo}
        breakingBets={breakingBets}
        streaming={streaming}
        marketCount={marketCount}
      />

      <div className="flex items-start gap-2 w-full">
        {/* Teams */}
        <div className="flex flex-1 flex-col gap-1 min-w-0">
          <span className="text-xs font-medium leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] truncate">
            {team1}
          </span>
          <span className="text-xs font-medium leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] truncate">
            {team2}
          </span>
          <span className="text-[10px] leading-[12px] font-normal text-[var(--appereance-font-color-active,#262c2f)] whitespace-nowrap">
            {dateTime}
          </span>
        </div>

        {/* Live score */}
        {livescore && (
          <div className="flex flex-col gap-1 items-end text-xs font-medium leading-[14px] text-[var(--livescore-active,#ff8e0d)] text-right w-[21px]">
            <span>{livescore.score1}</span>
            <span>{livescore.score2}</span>
          </div>
        )}

        {/* Odds */}
        {odds.length > 0 && (
          <div className="flex gap-2 shrink-0">
            {odds.map((o, i) => (
              <OddsButton key={i} {...o} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- Default export ---------- */

export default function CardMatch() {
  return { CardMatchExtended, CardMatchCompact };
}
