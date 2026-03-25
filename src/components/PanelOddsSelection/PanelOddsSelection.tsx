import React from "react";
import { Button } from "../Button/Button";

/* ── Sub-components ────────────────────────────────────── */

function CloseButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      className="shrink-0 w-6 h-6 rounded-full bg-[#c9cacb] flex items-center justify-center cursor-pointer"
      onClick={onClick}
      aria-label="Chiudi"
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M1 1l8 8M9 1l-8 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </button>
  );
}

function TopNavPanelSmall({
  title = "Title",
  date,
  onClose,
}: {
  title?: string;
  date?: string;
  onClose?: () => void;
}) {
  return (
    <div className="flex items-center gap-2 w-full px-4 py-4 rounded-t-lg bg-white shrink-0">
      <div className="flex-1 flex flex-col min-w-0">
        {date && (
          <span className="font-normal font-['Roboto',sans-serif] text-[10px] leading-3 text-[#929597]">
            {date}
          </span>
        )}
        <span className="font-black font-['Mulish',sans-serif] text-sm leading-[18px] text-[#262c2f]">
          {title}
        </span>
      </div>
      <CloseButton onClick={onClose} />
    </div>
  );
}

function OddsCell({
  result = "1",
  quota = "1.55",
  selected = false,
  disabled = false,
}: {
  result?: string;
  quota?: string;
  selected?: boolean;
  disabled?: boolean;
}) {
  const bg = selected
    ? "bg-[#bed62f]"
    : disabled
    ? "bg-[#e9eaea] opacity-40"
    : "bg-[#e9eaea]";

  return (
    <div
      className={`flex flex-col items-center justify-center gap-0.5 h-9 flex-1 rounded-lg overflow-clip px-2 ${bg}`}
    >
      <span className="font-normal font-['Roboto',sans-serif] text-xs leading-[14px] text-[#262c2f]">
        {result}
      </span>
      <span className="font-bold font-['Roboto',sans-serif] text-xs text-[#262c2f]">
        {quota}
      </span>
    </div>
  );
}

/* ── Main Panel ────────────────────────────────────────── */

type OddsItem = {
  result: string;
  quota: string;
  selected?: boolean;
  disabled?: boolean;
};

type PanelOddsSelectionProps = {
  className?: string;
  title?: string;
  date?: string;
  showLink?: boolean;
  linkLabel?: string;
  showQuotaTot?: boolean;
  oddsGrid?: OddsItem[][];
  onClose?: () => void;
  onSubmit?: () => void;
  onLinkClick?: () => void;
};

export function PanelOddsSelection({
  className,
  title = "Title",
  date,
  showLink = true,
  linkLabel = "Vedi tutte le scommesse",
  showQuotaTot = true,
  oddsGrid = Array.from({ length: 9 }, () =>
    Array.from({ length: 5 }, () => ({ result: "1", quota: "1.55" }))
  ),
  onClose,
  onSubmit,
  onLinkClick,
}: PanelOddsSelectionProps) {
  return (
    <div
      className={
        className ||
        "flex flex-col items-end gap-4 w-[360px] bg-white rounded-t-lg"
      }
    >
      {/* Header */}
      <div className="flex flex-col items-start w-full">
        <TopNavPanelSmall title={title} date={date} onClose={onClose} />
      </div>

      {/* Odds grid */}
      <div className="flex flex-col gap-2 w-full px-4">
        {oddsGrid.map((row, ri) => (
          <div key={ri} className="flex gap-1 w-full">
            {row.map((cell, ci) => (
              <OddsCell
                key={ci}
                result={cell.result}
                quota={cell.quota}
                selected={cell.selected}
                disabled={cell.disabled}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Link */}
      {showLink && (
        <div className="flex items-center justify-center w-full">
          <button
            className="font-medium font-['Roboto',sans-serif] text-xs leading-[14px] text-[#00653b] underline cursor-pointer bg-transparent border-none"
            onClick={onLinkClick}
          >
            {linkLabel}
          </button>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-center gap-2 w-full px-6 py-4 border-t border-[#c9cacb] bg-white">
        {showQuotaTot && (
          <div className="flex-1 flex flex-col items-center justify-center h-9 text-center text-xs font-['Roboto',sans-serif] text-[#262c2f]">
            <span className="font-normal leading-[14px]">Quota tot:</span>
            <span className="font-bold">-</span>
          </div>
        )}
        <Button
          label="Button"
          variant="default"
          className="flex-1 inline-flex items-center justify-center gap-2 px-6 h-9 rounded-full font-bold text-sm font-['Roboto',sans-serif] bg-[#00653b] text-white cursor-pointer"
          onClick={onSubmit}
        />
      </div>
    </div>
  );
}

export default PanelOddsSelection;
