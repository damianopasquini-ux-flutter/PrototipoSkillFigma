import React from "react";

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

function TopNavPanel({
  title = "Title",
  onClose,
}: {
  title?: string;
  onClose?: () => void;
}) {
  return (
    <div className="flex items-center gap-2 h-14 px-4 w-full rounded-t-lg bg-white shrink-0">
      <div className="flex-1 min-w-0">
        <span className="font-extrabold font-['Mulish',sans-serif] text-2xl leading-7 text-[#262c2f]">
          {title}
        </span>
      </div>
      <CloseButton onClick={onClose} />
    </div>
  );
}

function SearchBar({ placeholder = "Cerca eventi, squadre e giocatori" }: { placeholder?: string }) {
  return (
    <div className="w-full px-4 pt-2 shrink-0">
      <div className="flex items-center gap-2 h-10 px-2 rounded-lg bg-[#e9eaea]">
        {/* Search icon */}
        <svg className="w-5 h-5 shrink-0 text-[#929597]" viewBox="0 0 20 20" fill="none">
          <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M13 13l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span className="flex-1 font-normal font-['Roboto',sans-serif] text-sm text-[#929597] leading-[18px]">
          {placeholder}
        </span>
      </div>
    </div>
  );
}

function FilterChip({
  label = "Label",
  selected = false,
}: {
  label?: string;
  selected?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-center h-8 px-2 rounded-lg shrink-0 ${
        selected
          ? "bg-[#bed62f] border-[0.5px] border-[#bed62f]"
          : "bg-white border-[0.5px] border-transparent shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
      }`}
    >
      <span className="font-medium font-['Roboto',sans-serif] text-xs text-[#262c2f] whitespace-nowrap leading-[14px]">
        {label}
      </span>
    </div>
  );
}

function BadgeNotification({
  count = 12,
  alt = false,
}: {
  count?: number;
  alt?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-center w-4 h-4 rounded-full shrink-0 ${
        alt ? "bg-[#262c2f]" : "bg-[#bed62f]"
      }`}
    >
      <span
        className={`font-bold font-['Roboto',sans-serif] text-[10px] leading-3 ${
          alt ? "text-white" : "text-[#262c2f]"
        }`}
      >
        {count}
      </span>
    </div>
  );
}

function FilterPanelItem({
  label = "Label",
  count = 12,
  selected = false,
  showInfo = true,
}: {
  label?: string;
  count?: number;
  selected?: boolean;
  showInfo?: boolean;
}) {
  return (
    <div className="flex items-center gap-2 w-full shrink-0">
      <div
        className={`flex-1 flex items-center gap-2 h-9 pl-2 pr-4 py-1.5 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)] border-[0.5px] ${
          selected
            ? "bg-[#bed62f] border-[#bed62f]"
            : "bg-white border-[#c9cacb]"
        }`}
      >
        {/* Sport icon placeholder */}
        <div className="w-4 h-4 shrink-0 rounded-sm bg-[#c9cacb]" />
        <span
          className={`flex-1 font-['Roboto',sans-serif] text-sm leading-[18px] text-[#262c2f] ${
            selected ? "font-medium" : "font-normal"
          }`}
        >
          {label}
        </span>
        <BadgeNotification count={count} alt={selected} />
      </div>
      {showInfo && (
        <div className="w-6 h-6 shrink-0 flex items-center justify-center">
          <svg className="w-4 h-4 text-[#929597]" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm.5 10.5h-1v-4h1v4zm0-5h-1v-1h1v1z" />
          </svg>
        </div>
      )}
    </div>
  );
}

/* ── Feedback empty state ──────────────────────────────── */

function EmptyState({ title = "Title feedback" }: { title?: string }) {
  return (
    <div className="flex flex-col items-center gap-6 w-full px-4 py-16">
      {/* Illustration placeholder */}
      <div className="w-[135px] h-[135px] rounded-full border border-dashed border-[#c9cacb]" />
      <span className="font-bold font-['Mulish',sans-serif] text-lg text-[#262c2f] text-center leading-5">
        {title}
      </span>
    </div>
  );
}

/* ── Main Panel ────────────────────────────────────────── */

type PanelFilterProps = {
  className?: string;
  title?: string;
  chips?: boolean;
  searchbar?: boolean;
  empty?: boolean;
  showInfo?: boolean;
  chipLabels?: string[];
  items?: Array<{
    label: string;
    count: number;
    selected?: boolean;
  }>;
  onClose?: () => void;
};

export function PanelFilter({
  className,
  title = "Title",
  chips = true,
  searchbar = true,
  empty = false,
  showInfo = true,
  chipLabels = ["Label", "Label", "Label", "Label", "Label", "Label"],
  items = [
    { label: "Label", count: 12, selected: false },
    { label: "Label", count: 12, selected: true },
    { label: "Label", count: 12, selected: false },
    { label: "Label", count: 12, selected: false },
    { label: "Label", count: 12, selected: false },
    { label: "Label", count: 12, selected: false },
    { label: "Label", count: 12, selected: false },
    { label: "Label", count: 12, selected: false },
  ],
  onClose,
}: PanelFilterProps) {
  return (
    <div
      className={
        className ||
        "flex flex-col items-start w-[360px] bg-white rounded-t-lg overflow-clip"
      }
    >
      <TopNavPanel title={title} onClose={onClose} />

      {searchbar && <SearchBar />}

      {!empty && chips && (
        <div className="flex items-center gap-2 w-full px-4 pt-3 overflow-x-auto shrink-0">
          {chipLabels.map((label, i) => (
            <FilterChip key={i} label={label} selected={i === 0} />
          ))}
        </div>
      )}

      {!empty && (
        <div className="flex flex-col gap-2 w-full px-4 pt-4 pb-6 overflow-y-auto h-[368px]">
          {items.map((item, i) => (
            <FilterPanelItem
              key={i}
              label={item.label}
              count={item.count}
              selected={item.selected}
              showInfo={showInfo}
            />
          ))}
        </div>
      )}

      {empty && <EmptyState />}
    </div>
  );
}

export default PanelFilter;
