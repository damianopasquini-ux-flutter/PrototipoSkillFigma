import React from "react";

/* ------------------------------------------------------------------ */
/*  Card / My-Bets / Ticket                                            */
/*  Figma node 5428:25000 – file 1KwGa2GwNraywm2ukpfGHe               */
/* ------------------------------------------------------------------ */

type ResultCounterProps = {
  count: number;
  status: "pending" | "win" | "loser" | "refund";
};

const statusColors: Record<string, string> = {
  pending: "bg-[var(--appereance-card-mybets-event-details-status-pending,#929597)]",
  win: "bg-[var(--appereance-card-mybets-event-details-status-success,#0b7d3e)]",
  loser: "bg-[var(--appereance-card-mybets-event-details-status-error,#e73947)]",
  refund: "bg-[var(--appereance-card-mybets-event-details-status-refund,#0d4ea5)]",
};

function ResultCounter({ count, status }: ResultCounterProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-sm w-[14px] h-[14px] ${statusColors[status]}`}
    >
      <span className="font-medium text-xs leading-[14px] text-white tracking-[0.12px] font-['Roboto',sans-serif]">
        {count}
      </span>
    </div>
  );
}

type BetListingProps = {
  marketType?: string;
  result?: string;
};

function BetListing({ marketType = "Market type", result = "Result" }: BetListingProps) {
  return (
    <div className="flex gap-4 items-center w-full">
      <div className="flex flex-col flex-1 gap-1 items-start min-w-0">
        <span className="font-normal text-xs leading-[14px] text-[var(--appereance-font-color-alt,#5c6063)] truncate font-['Roboto',sans-serif]">
          {marketType}
        </span>
        <span className="font-medium text-xs leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] font-['Roboto',sans-serif]">
          {result}
        </span>
      </div>
      <div className="w-4 h-4 rounded-full shrink-0 border border-[#e9eaea]" />
    </div>
  );
}

export type CardTicketProps = {
  className?: string;
  date?: string;
  betType?: string;
  counters?: { pending?: number; win?: number; loser?: number; refund?: number };
  totalBet?: string;
  potentialWin?: string;
  winLabel?: string;
  showCashOut?: boolean;
  cashOutLabel?: string;
  showAlert?: boolean;
  alertText?: string;
  booked?: boolean;
  badgeCashOut?: boolean;
  badgeLive?: boolean;
  badgeFreebet?: boolean;
  showConfetti?: boolean;
  eventDetail?: BetListingProps | null;
};

export function CardTicket({
  className,
  date = "14/05/2022 | 14.30",
  betType = "Multipla (7)",
  counters = { pending: 1, win: 1, loser: 1, refund: 1 },
  totalBet = "999.999,00\u20AC",
  potentialWin = "999.999,00\u20AC",
  showCashOut = true,
  cashOutLabel = "Incassa Cash Out 260,00\u20AC",
  showAlert = false,
  alertText = "Lorem ipsum dolor sit amet, consectetur",
  booked = false,
  badgeCashOut = false,
  badgeLive = false,
  badgeFreebet = false,
  showConfetti = false,
  eventDetail = null,
}: CardTicketProps) {
  return (
    <div
      className={
        className || "flex flex-col items-start w-[328px]"
      }
    >
      {/* Confetti area */}
      {showConfetti && (
        <div className="relative w-full h-0">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[152px] h-[152px] opacity-30 pointer-events-none" />
        </div>
      )}

      {/* Header */}
      <div className="bg-[var(--appereance-surface-frame-default,white)] flex flex-col items-start rounded-t-lg shadow-[0px_-6px_8px_0px_rgba(0,0,0,0.04)] w-full">
        <div className="flex flex-col gap-2 items-start pt-2 px-2 w-full">
          {/* Date + badges */}
          <div className="flex gap-1 h-[14px] items-center w-full">
            <span className="flex-1 font-normal text-[10px] leading-[12px] text-[var(--appereance-font-color-alt,#5c6063)] font-['Roboto',sans-serif]">
              {date}
            </span>
            {badgeCashOut && (
              <span className="bg-[var(--badge-default-fill-cash-out,#722dad)] text-white text-[10px] font-medium px-1 rounded-sm font-['Roboto',sans-serif]">
                Cash Out
              </span>
            )}
            {badgeLive && (
              <span className="bg-[var(--badge-default-fill-live,#262c2f)] text-[var(--badge-default-text-color-live,#ff8e0d)] text-[10px] font-medium px-1 rounded-sm font-['Roboto',sans-serif]">
                Live
              </span>
            )}
          </div>

          {/* Bet type + counters */}
          <div className="flex flex-col gap-2 items-start pb-1 w-full">
            <div className="flex gap-2 items-start w-full">
              <span className="font-medium text-xs leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] font-['Roboto',sans-serif]">
                {betType}
              </span>
              <div className="flex gap-[2px] items-center">
                {counters.pending != null && counters.pending > 0 && (
                  <ResultCounter count={counters.pending} status="pending" />
                )}
                {counters.win != null && counters.win > 0 && (
                  <ResultCounter count={counters.win} status="win" />
                )}
                {counters.loser != null && counters.loser > 0 && (
                  <ResultCounter count={counters.loser} status="loser" />
                )}
                {counters.refund != null && counters.refund > 0 && (
                  <ResultCounter count={counters.refund} status="refund" />
                )}
              </div>
            </div>

            {/* Event detail (optional) */}
            {eventDetail && (
              <div className="bg-[var(--appereance-card-mybets-event-details-listing,#eff0f0)] flex flex-col items-start rounded-lg w-full p-2">
                <BetListing
                  marketType={eventDetail.marketType}
                  result={eventDetail.result}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Ticket tear line */}
      <div className="bg-[var(--appereance-surface-frame-default,white)] flex items-center h-4 w-full">
        <div className="w-2 h-4 bg-[var(--appereance-surface-page-default,#eff0f0)] rounded-r-full" />
        <div className="flex-1 border-t border-dashed border-[#c9cacb]" />
        <div className="w-2 h-4 bg-[var(--appereance-surface-page-default,#eff0f0)] rounded-l-full" />
      </div>

      {/* Footer / details */}
      <div className="bg-[var(--appereance-surface-frame-default,white)] flex flex-col items-center rounded-b-lg shadow-[0px_6px_8px_0px_rgba(0,0,0,0.05)] w-full">
        <div className="flex flex-col gap-2 items-center pb-3 pt-1 w-full">
          <div className="flex flex-col gap-2 items-start justify-center px-2 w-full">
            {/* Total bet */}
            <div className="flex gap-1 items-center justify-center w-full">
              <svg className="w-3 h-3 shrink-0" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="5" stroke="#5c6063" strokeWidth="1" />
                <text x="6" y="9" textAnchor="middle" fontSize="7" fill="#5c6063">$</text>
              </svg>
              <span className="flex-1 font-normal text-xs leading-[14px] text-[var(--appereance-font-color-alt,#5c6063)] font-['Roboto',sans-serif]">
                Puntata totale:
              </span>
              {badgeFreebet && (
                <span className="bg-[var(--badge-default-fill-promo,#ffbf00)] text-[var(--badge-default-text-color-bg-light-default,#262c2f)] text-[10px] font-medium px-1 rounded-sm font-['Roboto',sans-serif]">
                  Freebet
                </span>
              )}
              <span className="font-medium text-xs leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] text-right font-['Roboto',sans-serif]">
                {totalBet}
              </span>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#e9eaea]" />

            {/* Potential win */}
            <div className="flex gap-1 items-center justify-center w-full">
              <svg className="w-3 h-3 shrink-0" viewBox="0 0 12 12" fill="none">
                <text x="6" y="9" textAnchor="middle" fontSize="9" fill="#5c6063">&euro;</text>
              </svg>
              <span className="flex-1 font-normal text-xs leading-[14px] text-[var(--appereance-font-color-alt,#5c6063)] font-['Roboto',sans-serif]">
                Vincita potenziale:
              </span>
              <span className="font-medium text-xs leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] text-right font-['Roboto',sans-serif]">
                {potentialWin}
              </span>
            </div>
          </div>

          {/* Alert */}
          {showAlert && (
            <div className="flex items-center w-[312px]">
              <div className="bg-[var(--appereance-snackbar-bg-default-fill-warning,#fff6dc)] flex flex-1 items-center overflow-hidden rounded">
                <div className="bg-[var(--appereance-snackbar-bg-default-icon-warning,#ffbf00)] h-full w-1 self-stretch" />
                <div className="flex flex-1 gap-[5px] items-center px-2 py-1">
                  <span className="flex-1 font-normal text-xs leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] font-['Roboto',sans-serif]">
                    {alertText}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Cash out button */}
        {showCashOut && (
          <div className="flex items-center pb-3 px-4 w-full">
            <button className="flex-1 h-9 rounded-lg border border-[#1a924b] bg-transparent text-[#262c2f] font-medium text-sm font-['Roboto',sans-serif] cursor-pointer">
              {cashOutLabel}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardTicket;
