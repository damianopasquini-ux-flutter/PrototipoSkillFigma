import React from "react";

/* ------------------------------------------------------------------ */
/*  Sisal DS - Card Cart Details                                      */
/*  Bet slip card with match header, market rows, share changes       */
/* ------------------------------------------------------------------ */

/* ---------- Icons ---------- */

function TrashIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className ?? "w-[18px] h-[18px]"}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className ?? "w-[14px] h-[14px]"}>
      <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3A5.25 5.25 0 0012 1.5zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
    </svg>
  );
}

function ShareArrow({ direction = "up", className }: { direction?: "up" | "down"; className?: string }) {
  const color = direction === "up" ? "text-[var(--icon-fill-success,#1a924b)]" : "text-[var(--icon-fill-error,#e73947)]";
  return (
    <span className={["w-[10px] h-[10px] flex items-center justify-center", color, className].filter(Boolean).join(" ")}>
      <svg viewBox="0 0 10 10" fill="currentColor" className={direction === "down" ? "rotate-180" : ""}>
        <path d="M5 2l3 4H2l3-4z" />
      </svg>
    </span>
  );
}

/* ---------- Cart header ---------- */

export interface CartHeaderProps {
  sportIcon?: React.ReactNode;
  league?: string;
  eventCode?: string;
}

function CartHeader({ sportIcon, league = "Serie A", eventCode = "0000-00" }: CartHeaderProps) {
  return (
    <div className="flex items-center gap-[160px] h-4 w-full">
      <div className="flex flex-1 items-center gap-1 min-w-0">
        {sportIcon && <span className="w-4 h-4 shrink-0 flex items-center justify-center">{sportIcon}</span>}
        <span className="text-[10px] font-normal leading-[12px] text-[var(--appereance-font-color-alt,#5c6063)] whitespace-nowrap">
          {league}
        </span>
      </div>
      <span className="text-[10px] font-normal leading-[12px] text-[var(--appereance-font-color-alt,#5c6063)] text-right whitespace-nowrap shrink-0">
        {eventCode}
      </span>
    </div>
  );
}

/* ---------- Fixed badge ---------- */

function FixedBadge() {
  return (
    <span className="inline-flex items-center justify-center w-[15px] border border-[var(--icon-fill-success,#1a924b)] rounded-[2px] bg-white">
      <span className="text-[11px] font-medium text-[var(--icon-fill-success,#1a924b)] leading-none">F</span>
      <svg viewBox="0 0 13 13" fill="var(--icon-fill-success,#1a924b)" className="w-[13px] h-[13px]">
        <path d="M10 3.5L5.5 8 3 5.5" stroke="white" strokeWidth="1.5" fill="none" />
      </svg>
    </span>
  );
}

/* ---------- Market status column ---------- */

export type MarketStatus = "default" | "closed" | "suspended";

export interface MarketStatusProps {
  status?: MarketStatus;
  oldOdds?: string;
  newOdds?: string;
  shareDirection?: "up" | "down" | null;
}

function MarketStatusCell({ status = "default", oldOdds = "2.39", newOdds = "2.51", shareDirection = null }: MarketStatusProps) {
  return (
    <div className="flex items-center gap-2 h-8 shrink-0">
      <div className="flex flex-col gap-[6px] items-end justify-end h-8">
        {status === "default" && (
          <>
            <span className="text-[10px] font-normal leading-normal text-[var(--appereance-font-color-alt-2,#929597)] text-right line-through tracking-[0.1px]">
              {oldOdds}
            </span>
            <div className="flex items-center gap-1 justify-end">
              {shareDirection && <ShareArrow direction={shareDirection} />}
              <span className="text-xs font-medium leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] text-right">
                {newOdds}
              </span>
            </div>
          </>
        )}
        {status === "closed" && (
          <>
            <span className="text-[10px] font-normal leading-normal text-[var(--appereance-font-color-alt,#5c6063)] text-right tracking-[0.1px]">
              Chiusa
            </span>
            <LockIcon className="w-[14px] h-[14px] text-[var(--appereance-font-color-alt,#5c6063)]" />
          </>
        )}
        {status === "suspended" && (
          <>
            <span className="text-[10px] font-normal leading-normal text-[var(--appereance-font-color-alt,#5c6063)] text-right tracking-[0.1px]">
              Sospeso
            </span>
            <span className="text-xs font-medium leading-[14px] text-[var(--appereance-font-color-alt-2,#929597)] text-right">
              {newOdds}
            </span>
          </>
        )}
      </div>
      <button
        type="button"
        className="flex items-center justify-center w-6 h-6 rounded-l bg-[var(--appereance-border-default-alt,#e9eaea)] text-[var(--appereance-font-color-alt,#5c6063)]"
        aria-label="Rimuovi"
      >
        <TrashIcon className="w-[18px] h-[18px]" />
      </button>
    </div>
  );
}

/* ---------- Cart line item ---------- */

export interface CartLineItemProps {
  marketType?: string;
  result?: string;
  status?: MarketStatus;
  oldOdds?: string;
  newOdds?: string;
  shareDirection?: "up" | "down" | null;
  info?: boolean;
  onInfoClick?: () => void;
}

function CartLineItem({
  marketType = "Market type",
  result = "Result",
  status = "default",
  oldOdds,
  newOdds,
  shareDirection,
  info = false,
  onInfoClick,
}: CartLineItemProps) {
  return (
    <div className="flex items-center gap-2 pl-2 py-3 w-full border-t border-[var(--appereance-border-default-alt,#e9eaea)]">
      {/* Market info */}
      <div className="flex flex-1 flex-col gap-1 h-8 min-w-0">
        <div className="flex items-start gap-[2px]">
          <span className="text-xs font-normal leading-[14px] text-[var(--appereance-font-color-alt,#5c6063)] truncate whitespace-nowrap">
            {marketType}
          </span>
          {info && (
            <button type="button" onClick={onInfoClick} className="w-[15px] h-[14px] shrink-0" aria-label="Info">
              <svg viewBox="0 0 24 24" fill="var(--appereance-font-color-alt,#5c6063)" className="w-[18px] h-[18px]">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
            </button>
          )}
        </div>
        <span className="text-xs font-medium leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] whitespace-nowrap">
          {result}
        </span>
      </div>

      {/* Status + delete */}
      <MarketStatusCell status={status} oldOdds={oldOdds} newOdds={newOdds} shareDirection={shareDirection} />
    </div>
  );
}

/* ---------- Main card ---------- */

export interface CardCartDetailsProps {
  sportIcon?: React.ReactNode;
  league?: string;
  eventCode?: string;
  team1?: string;
  team2?: string;
  dateTime?: string;
  sistema?: boolean;
  items?: CartLineItemProps[];
  className?: string;
}

export function CardCartDetails({
  sportIcon,
  league = "Serie A",
  eventCode = "0000-00",
  team1 = "Lazio",
  team2 = "Roma",
  dateTime = "12/10 18:30",
  sistema = true,
  items = [],
  className,
}: CardCartDetailsProps) {
  return (
    <div
      className={[
        "flex flex-col items-start w-[328px] rounded-lg",
        "bg-[var(--appereance-surface-frame-default,white)]",
        "shadow-[0px_2px_8px_0px_rgba(0,0,0,0.1)]",
        "font-['Roboto',sans-serif]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Header */}
      <div className="flex flex-col gap-2 items-start p-2 w-full">
        <CartHeader sportIcon={sportIcon} league={league} eventCode={eventCode} />
        <div className="flex items-start gap-2 w-full">
          <div className="flex flex-1 flex-col gap-1 h-[50px] justify-center min-w-0">
            <span className="text-xs font-medium leading-[14px] text-[var(--appereance-font-color-active,#262c2f)]">
              {team1}
            </span>
            <span className="text-xs font-medium leading-[14px] text-[var(--appereance-font-color-active,#262c2f)]">
              {team2}
            </span>
            <span className="text-[10px] font-normal leading-[12px] text-[var(--appereance-font-color-alt,#5c6063)] whitespace-nowrap">
              {dateTime}
            </span>
          </div>
          {sistema && <FixedBadge />}
        </div>
      </div>

      {/* Line items */}
      {items.map((item, i) => (
        <CartLineItem key={i} {...item} />
      ))}
    </div>
  );
}

export { CardCartDetails as default };
