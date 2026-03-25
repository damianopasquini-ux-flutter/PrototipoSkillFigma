import React from "react";

/* ── FilterChip ── */
type FilterChipProps = {
  className?: string;
  label?: string;
  selected?: boolean;
  icon?: React.ReactNode;
  showIcon?: boolean;
  darkBg?: boolean;
  onClick?: () => void;
};

export function FilterChip({
  className,
  label = "Label",
  selected = false,
  icon,
  showIcon = false,
  darkBg = false,
  onClick,
}: FilterChipProps) {
  const baseBg = selected
    ? "bg-[#bed62f] border-[0.5px] border-[#bed62f]"
    : darkBg
      ? "bg-[#2f3c43] border-0 border-[#5c6063]"
      : "bg-white border-0 border-[#c9cacb]";

  const textColor = selected
    ? "text-[#262c2f]"
    : darkBg
      ? "text-white"
      : "text-[#262c2f]";

  return (
    <button
      className={
        className ||
        `inline-flex items-start h-8 max-h-8 min-h-8 cursor-pointer border-0 bg-transparent p-0 ${
          !selected
            ? "shadow-[0px_2px_8px_0px_rgba(0,0,0,0.1)]"
            : ""
        }`
      }
      onClick={onClick}
      type="button"
    >
      <div
        className={`flex items-center justify-center h-8 max-h-8 min-h-8 px-2 py-1 rounded-lg border-solid ${baseBg}`}
      >
        {showIcon && (
          <div className="flex items-center justify-end w-5 pr-0">
            {icon || <div className="w-6 h-6 rounded bg-current/10" />}
          </div>
        )}
        <div className="flex items-center justify-center">
          <span
            className={`font-medium font-['Roboto',sans-serif] text-xs leading-[14px] whitespace-nowrap ${textColor}`}
          >
            {label}
          </span>
        </div>
      </div>
    </button>
  );
}

/* ── FilterButton ── */
type FilterButtonProps = {
  className?: string;
  label?: string;
  type?: "Floating" | "List" | "Order" | "Default";
  icon?: React.ReactNode;
  showIcon?: boolean;
  onClick?: () => void;
};

export function FilterButton({
  className,
  label = "Button",
  type = "Floating",
  icon,
  showIcon = true,
  onClick,
}: FilterButtonProps) {
  if (type === "Floating") {
    return (
      <button
        className={
          className ||
          "inline-flex items-start h-9 max-h-9 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.1)] bg-transparent border-0 p-0 cursor-pointer"
        }
        onClick={onClick}
        type="button"
      >
        <div className="flex items-center justify-center gap-2 h-full min-h-9 min-w-[96px] px-6 py-2 rounded-full bg-[#bed62f]">
          {showIcon && (
            <div className="flex items-center justify-center w-6 h-6 min-w-6 min-h-6 max-w-6 max-h-6">
              {icon || (
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                  <path d="M2 2h16M2 8h12M2 14h8" stroke="#262c2f" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </div>
          )}
          <div className="flex items-center h-full py-2">
            <span className="font-bold font-['Roboto',sans-serif] text-sm text-[#262c2f] whitespace-nowrap">
              {label}
            </span>
          </div>
        </div>
      </button>
    );
  }

  /* List / Order / Default - smaller filter button */
  return (
    <button
      className={
        className ||
        "relative h-8 w-12 rounded-lg bg-white border-0 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.1)] cursor-pointer"
      }
      onClick={onClick}
      type="button"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {icon || (
          <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
            <path d="M1 1h14M1 6.5h10M1 12h6" stroke="#262c2f" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
      </div>
    </button>
  );
}

/* ── FilterChipsRow ── */
type FilterChipsRowProps = {
  className?: string;
  chips?: { id: string; label: string; selected?: boolean }[];
  showFilterButton?: boolean;
  darkBg?: boolean;
  scrollable?: boolean;
  onChipClick?: (id: string) => void;
  onFilterClick?: () => void;
};

export function FilterChipsRow({
  className,
  chips = [
    { id: "1", label: "Label" },
    { id: "2", label: "Label" },
    { id: "3", label: "Label", selected: true },
    { id: "4", label: "Label" },
    { id: "5", label: "Label" },
  ],
  showFilterButton = true,
  darkBg = false,
  scrollable = false,
  onChipClick,
  onFilterClick,
}: FilterChipsRowProps) {
  return (
    <div
      className={
        className ||
        `flex items-center gap-2 h-14 px-4 w-[360px] ${
          scrollable ? "overflow-x-auto" : "overflow-clip"
        } ${darkBg ? "bg-[#2f3c43]" : ""}`
      }
    >
      {showFilterButton && (
        <FilterButton type="List" onClick={onFilterClick} />
      )}
      {chips.map((chip) => (
        <FilterChip
          key={chip.id}
          label={chip.label}
          selected={chip.selected}
          darkBg={darkBg}
          onClick={() => onChipClick?.(chip.id)}
        />
      ))}
    </div>
  );
}

/* ── Filter (main export) ── */
type FilterProps = {
  className?: string;
  chips?: { id: string; label: string; selected?: boolean }[];
  showFilterButton?: boolean;
  darkBg?: boolean;
  scrollable?: boolean;
  onChipClick?: (id: string) => void;
  onFilterClick?: () => void;
};

export function Filter(props: FilterProps) {
  return <FilterChipsRow {...props} />;
}

export default Filter;
