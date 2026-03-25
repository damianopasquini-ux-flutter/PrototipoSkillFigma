import React from "react";

/* ── Types ── */
interface TipListingItemProps {
  team1?: string;
  team2?: string;
  date?: string;
  marketType?: string;
  result?: string;
  odds?: string;
  won?: boolean;
}

interface SharedTipProps {
  className?: string;
  title?: string;
  subtitle?: string;
  brand?: "Sisal" | "Pokerstars" | "Snai";
  quota?: string;
  puntata?: string;
  vincita?: string;
  statusLabel?: string;
  statusType?: "win" | "lose" | "refunded";
  items?: TipListingItemProps[];
  showPatternBg?: boolean;
}

/* ── TipListingItem ── */
function TipListingItem({
  team1 = "Team 1",
  team2 = "Team 2",
  date = "02/04 - 18:00",
  marketType = "Market type",
  result = "Result",
  odds = "2.50",
  won = true,
}: TipListingItemProps) {
  return (
    <div className="bg-white border-b border-[var(--border-default-grey,#e9eaea)] flex flex-col items-start p-2 w-full">
      <div className="flex flex-col gap-2 items-start w-full">
        {/* Teams + Date */}
        <div className="flex gap-2 items-center w-full">
          <div className="flex flex-1 flex-wrap gap-1 items-center font-medium font-['Roboto',sans-serif] text-xs leading-[14px] text-[var(--font-color-black,#262c2f)]">
            <span>{team1}</span>
            <span>-</span>
            <span>{team2}</span>
          </div>
          <div className="flex items-start justify-end py-0.5 w-[61px]">
            <span className="font-normal font-['Roboto',sans-serif] text-[10px] text-[var(--font-color-grey,#5c6063)] text-right tracking-[0.1px] leading-normal whitespace-nowrap">
              {date}
            </span>
          </div>
        </div>

        {/* Market + Odds */}
        <div className="flex gap-2 items-center w-full">
          <p className="flex-1 font-normal font-['Roboto',sans-serif] text-[10px] text-[var(--font-color-alt,#5c6063)] uppercase leading-3">
            <span className="text-[#5c6063]">{marketType}: </span>
            <span className="font-medium text-[#262c2f]">{result}</span>
          </p>
          <div className="flex gap-1 items-center justify-end">
            <span className="font-bold font-['Roboto',sans-serif] text-[10px] text-[var(--font-color-black,#262c2f)] text-right leading-3 whitespace-nowrap">
              {odds}
            </span>
            <div
              className={`w-3 h-3 rounded-full ${
                won
                  ? "bg-[var(--label-status-tip-fill-win,#b6ff00)]"
                  : "bg-[var(--label-status-tip-text-loser,white)]"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── TipLabelShare ── */
function TipLabelShare({ regular = "Quota", prominent = "9999.00" }: { regular?: string; prominent?: string }) {
  return (
    <div className="bg-[var(--tip-surface-active,#262c2f)] border border-[var(--tip-fill-accent,#b6ff00)] flex gap-1 items-center justify-end px-2 py-1 rounded text-[var(--tip-fill-accent,#b6ff00)] text-sm leading-[18px] text-right whitespace-nowrap">
      <span className="font-normal font-['Mulish',sans-serif]">{regular}</span>
      <span className="font-bold font-['Mulish',sans-serif]">{prominent}</span>
    </div>
  );
}

/* ── TipStatusLabel ── */
function TipStatusLabel({
  label = "Tip vincente!",
  type = "win",
}: {
  label?: string;
  type?: "win" | "lose" | "refunded";
}) {
  const bgMap = {
    win: "bg-[var(--label-status-tip-fill-win,#b6ff00)]",
    lose: "bg-[var(--label-status-tip-fill-loser,#e73947)]",
    refunded: "bg-[var(--label-status-tip-fill-refunded,#67aaf9)]",
  };
  const textMap = {
    win: "text-[var(--label-status-tip-text-win,#262c2f)]",
    lose: "text-white",
    refunded: "text-[#262c2f]",
  };

  return (
    <div
      className={`${bgMap[type]} flex gap-2.5 h-[30px] items-center justify-center overflow-hidden p-2.5 rounded-[var(--radius-default,8px)] w-full`}
    >
      <span
        className={`font-medium font-['Roboto',sans-serif] text-base leading-5 text-center whitespace-nowrap ${textMap[type]}`}
      >
        {label}
      </span>
    </div>
  );
}

/* ── TipFooter ── */
function TipFooter() {
  return (
    <div className="flex flex-col gap-2 h-[100px] items-center justify-center p-4 w-full">
      <div className="flex flex-col gap-1 items-center">
        <span className="font-bold font-['Mulish',sans-serif] text-base leading-5 text-center text-white">
          Il primo social del mondo delle scommesse
        </span>
      </div>
      <span className="font-normal font-['Roboto',sans-serif] text-[10px] leading-3 text-center text-white">
        sisal.it/tipster
      </span>
    </div>
  );
}

/* ── SharedTip ── */
export function SharedTip({
  className,
  title = "Il mio Tip",
  subtitle = "giocato il 26/09/2022",
  brand = "Sisal",
  quota = "9999.00",
  puntata = "9999,99\u20AC",
  vincita = "9999,99\u20AC",
  statusLabel = "Tip vincente!",
  statusType = "win",
  items = Array(6).fill({}),
  showPatternBg = true,
}: SharedTipProps) {
  return (
    <div
      className={
        className ||
        "bg-[var(--tip-surface-active,#262c2f)] flex flex-col items-center overflow-hidden relative w-[360px] font-['Roboto',sans-serif]"
      }
    >
      {/* Pattern Background */}
      {showPatternBg && (
        <div className="absolute inset-0 bg-[var(--tip-surface-alt,black)] opacity-60 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0e0e0e]" />
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col gap-4 items-start p-4 relative w-full z-10">
        {/* Title row */}
        <div className="flex gap-2 items-center w-full">
          <div className="flex flex-1 flex-col gap-1 items-start justify-center">
            <div className="flex gap-1 items-center">
              <span className="font-extrabold font-['Mulish',sans-serif] text-2xl leading-7 text-white whitespace-nowrap">
                {title}
              </span>
              <span className="font-bold font-['Mulish',sans-serif] text-sm leading-5 text-white opacity-80">
                {brand}
              </span>
            </div>
            <span className="font-normal font-['Roboto',sans-serif] text-[10px] leading-3 text-white whitespace-nowrap">
              {subtitle}
            </span>
          </div>
          <TipLabelShare regular="Quota" prominent={quota} />
        </div>

        {/* Puntata / Vincita row */}
        <div className="flex gap-2 items-start text-center w-full font-normal font-['Roboto',sans-serif]">
          <div className="bg-[var(--tip-surface-alt,black)] flex flex-1 flex-col gap-0.5 items-center justify-center px-3 py-1 rounded-[var(--radius-default,8px)]">
            <span className="text-[var(--tip-fill-accent,#b6ff00)] text-[10px] leading-3 w-full">
              Puntata
            </span>
            <span className="text-white text-xs leading-[14px] w-full">{puntata}</span>
          </div>
          <div className="bg-[var(--tip-surface-alt,black)] flex flex-1 flex-col gap-0.5 items-center justify-center px-3 py-1 rounded-[var(--radius-default,8px)]">
            <span className="text-[var(--tip-fill-accent,#b6ff00)] text-[10px] leading-3 w-full">
              Vincita
            </span>
            <span className="text-white text-xs leading-[14px] w-full">{vincita}</span>
          </div>
        </div>

        {/* Status label */}
        <TipStatusLabel label={statusLabel} type={statusType} />
      </div>

      {/* Listing items */}
      <div className="flex flex-col items-start px-4 relative w-full z-10">
        <div className="flex flex-col items-start overflow-hidden rounded-[var(--radius-default,8px)] w-full">
          {items.map((item, i) => (
            <TipListingItem key={i} {...item} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 w-full">
        <TipFooter />
      </div>
    </div>
  );
}

export default SharedTip;
