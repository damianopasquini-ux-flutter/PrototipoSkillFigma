import React, { useState } from "react";
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

function OddsButton({
  result = "1",
  quota = "1.55",
}: {
  result?: string;
  quota?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-0.5 w-[82px] h-[30px] rounded-lg bg-[#e9eaea] px-2 overflow-clip">
      <span className="font-normal font-['Roboto',sans-serif] text-[10px] leading-[12px] text-[#262c2f]">
        {result}
      </span>
      <span className="font-bold font-['Roboto',sans-serif] text-[10px] text-[#262c2f]">
        {quota}
      </span>
    </div>
  );
}

function LongPressIllustration() {
  return (
    <div className="relative w-[239px] h-[68px]">
      {/* Magnifier circle (simplified) */}
      <div className="absolute left-[30px] top-0 w-[99px] h-9 rounded-lg bg-[#e9eaea] flex items-center justify-center">
        <div className="w-6 h-6 rounded-full border-2 border-[#262c2f] flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <circle cx="4.5" cy="4.5" r="3" stroke="#262c2f" strokeWidth="1.5" />
            <path d="M7 7l2.5 2.5" stroke="#262c2f" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      {/* Two odds buttons below */}
      <div className="absolute left-[72px] top-[31px] flex gap-[3px]">
        <OddsButton />
        <OddsButton />
      </div>
    </div>
  );
}

/* ── Main Panel ────────────────────────────────────────── */

type PanelLongPressProps = {
  className?: string;
  onClose?: () => void;
  onConfirm?: () => void;
};

export function PanelLongPress({
  className,
  onClose,
  onConfirm,
}: PanelLongPressProps) {
  const [dontShowAgain, setDontShowAgain] = useState(false);

  return (
    <div
      className={
        className ||
        "flex flex-col items-end w-[360px] bg-white rounded-t-lg overflow-clip"
      }
    >
      {/* Top bar (close only, no title) */}
      <div className="flex items-center justify-end w-full h-14 px-4 rounded-t-lg bg-white">
        <CloseButton onClick={onClose} />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-5 w-full px-4 py-6">
        <LongPressIllustration />

        <div className="flex flex-col items-center gap-4 w-full">
          <h3 className="font-bold font-['Mulish',sans-serif] text-lg leading-5 text-[#262c2f] text-center w-full">
            Scopri tutte le scommesse correlate
          </h3>
          <p className="font-normal font-['Roboto',sans-serif] text-sm leading-[18px] text-[#262c2f] text-center w-full">
            Tieni premuto il pulsante con questo simbolo per vedere tutte le
            scommesse correlate all&apos;esito
          </p>

          {/* Checkbox */}
          <label className="flex items-center gap-1 cursor-pointer">
            <div
              className={`w-6 h-6 rounded border flex items-center justify-center ${
                dontShowAgain
                  ? "bg-[#bed62f] border-[#bed62f]"
                  : "border-[#c9cacb] bg-white"
              }`}
              onClick={() => setDontShowAgain(!dontShowAgain)}
            >
              {dontShowAgain && (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7l3 3 5-5" stroke="#262c2f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span className="font-medium font-['Roboto',sans-serif] text-sm leading-[18px] text-[#262c2f]">
              Non mostrare pi&ugrave;
            </span>
          </label>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-center w-full px-6 py-4 border-t border-[#c9cacb] bg-white">
        <Button
          label="Ok"
          variant="default"
          className="flex-1 inline-flex items-center justify-center gap-2 px-6 h-9 rounded-full font-bold text-sm font-['Roboto',sans-serif] bg-[#00653b] text-white cursor-pointer"
          onClick={onConfirm}
        />
      </div>
    </div>
  );
}

export default PanelLongPress;
