import React from "react";

/* ------------------------------------------------------------------ */
/*  Card / My Bets / Ticket-Details                                    */
/*  Figma node 5425:25601 – file 1KwGa2GwNraywm2ukpfGHe               */
/* ------------------------------------------------------------------ */

type BetRowProps = {
  marketType?: string;
  result?: string;
};

function BetRow({ marketType = "Market type", result = "Result" }: BetRowProps) {
  return (
    <div className="border-t border-[var(--appereance-border-default-alt,#e9eaea)] flex flex-col gap-2 items-start justify-center px-2 py-3 w-full">
      <div className="flex gap-4 items-center w-full">
        <div className="flex flex-col flex-1 gap-1 items-start min-w-0">
          <span className="font-normal text-[10px] leading-[12px] text-[var(--appereance-font-color-alt,#5c6063)] truncate font-['Roboto',sans-serif]">
            {marketType}
          </span>
          <span className="font-medium text-xs leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] font-['Roboto',sans-serif]">
            {result}
          </span>
        </div>
        {/* Feedback icon placeholder */}
        <div className="w-4 h-4 rounded-full bg-[var(--appereance-surface-frame-default,white)] shrink-0 border border-[#e9eaea]" />
      </div>
    </div>
  );
}

type LivescoreRowProps = {
  label?: string;
  homeScore?: string;
  awayScore?: string;
};

function LivescoreRow({ label = "AD", homeScore = "2", awayScore = "2" }: LivescoreRowProps) {
  return (
    <div className="flex gap-1 items-start justify-end w-full">
      <span className="font-medium text-xs leading-[14px] text-[var(--livescore-active,#ff8e0d)] font-['Roboto',sans-serif]">
        {label}
      </span>
      <span className="font-medium text-xs leading-[14px] text-[var(--livescore-active,#ff8e0d)] text-center w-4 font-['Roboto',sans-serif]">
        {homeScore}
      </span>
      <span className="font-medium text-xs leading-[14px] text-[var(--livescore-alt,#929597)] text-center w-4 font-['Roboto',sans-serif]">
        {awayScore}
      </span>
    </div>
  );
}

export type CardMyBetsProps = {
  className?: string;
  competition?: string;
  homeTeam?: string;
  awayTeam?: string;
  date?: string;
  fixed?: boolean;
  livescore?: boolean;
  notifications?: boolean;
  bets?: BetRowProps[];
};

export function CardMyBets({
  className,
  competition = "Serie A",
  homeTeam = "Lazio",
  awayTeam = "Roma",
  date = "12/10/2022",
  fixed = true,
  livescore = false,
  notifications = true,
  bets = [{ marketType: "Market type", result: "Result" }],
}: CardMyBetsProps) {
  return (
    <div
      className={
        className ||
        "bg-[var(--appereance-surface-frame-default,white)] flex flex-col items-start rounded-lg shadow-[0px_2px_8px_0px_rgba(0,0,0,0.1)] w-[328px]"
      }
    >
      {/* Header + Body */}
      <div className="flex flex-col gap-2 items-start p-2 w-full">
        {/* Header row */}
        <div className="flex items-center w-full">
          <div className="flex flex-1 gap-1 items-center min-w-0">
            {/* Sport icon placeholder */}
            <div className="w-4 h-4 rounded-full bg-[#e9eaea] shrink-0" />
            <span className="font-normal text-[10px] leading-[12px] text-[var(--appereance-font-color-alt,#5c6063)] whitespace-nowrap font-['Roboto',sans-serif]">
              {competition}
            </span>
          </div>
          <div className="flex gap-2 items-center">
            {fixed && (
              <div className="flex items-center justify-center w-[15px] h-4">
                <div className="bg-white border border-[var(--appereance-label-status-match-pending,#929597)] rounded-sm flex items-center justify-center w-[13px] h-[13px]">
                  <span className="font-medium text-[11px] text-[var(--appereance-label-status-match-pending,#929597)] text-center font-['Roboto',sans-serif]">
                    F
                  </span>
                </div>
              </div>
            )}
            {notifications && (
              <div className="w-4 h-4 flex items-center justify-center">
                <svg width="11" height="12" viewBox="0 0 11 12" fill="none">
                  <path
                    d="M5.5 0C3.29 0 1.5 1.79 1.5 4v3l-1 1v1h10V8l-1-1V4c0-2.21-1.79-4-4-4zM5.5 12c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z"
                    fill="#5c6063"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Teams + optional livescore */}
        <div className="flex gap-2 items-center w-full">
          <div className="flex flex-col flex-1 gap-1 items-start justify-center min-w-0 h-[50px]">
            <span className="font-medium text-xs leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] font-['Roboto',sans-serif]">
              {homeTeam}
            </span>
            <span className="font-medium text-xs leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] font-['Roboto',sans-serif]">
              {awayTeam}
            </span>
            <span className="font-normal text-[10px] leading-[12px] text-[var(--appereance-font-color-alt,#5c6063)] font-['Roboto',sans-serif]">
              {date}
            </span>
          </div>

          {livescore && (
            <div className="flex flex-col gap-1 items-end shrink-0">
              <LivescoreRow />
              <LivescoreRow />
              <div className="flex gap-1 text-center text-[10px] leading-[12px] text-[var(--livescore-alt,#929597)] font-['Roboto',sans-serif]">
                <span className="w-4">P</span>
                <span className="w-4">G</span>
                <span className="w-4">S</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bet rows */}
      {bets.map((bet, i) => (
        <BetRow key={i} marketType={bet.marketType} result={bet.result} />
      ))}
    </div>
  );
}

export default CardMyBets;
