import React from "react";

/* ── PickerItem ── */
export interface PickerItemProps {
  /** Label text */
  label?: string;
  /** Whether this item is selected */
  selected?: boolean;
  /** Show notification badge */
  showBadge?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

export function PickerItem({
  label = "Label",
  selected = false,
  showBadge = true,
  onClick,
  className,
}: PickerItemProps) {
  return (
    <div
      className={
        className ||
        `flex items-center justify-center py-2 w-full cursor-pointer font-['Roboto',sans-serif] ${
          selected
            ? "border-t border-b border-[var(--border-selected,#bed62f)]"
            : ""
        }`
      }
      onClick={onClick}
    >
      <div className="relative flex items-center gap-2">
        <span
          className={
            selected
              ? "font-bold text-base leading-5 text-center text-[var(--font-color-active,#262c2f)]"
              : "font-normal text-sm leading-[18px] text-center text-[var(--font-color-disabled,#929597)]"
          }
        >
          {label}
        </span>
        {showBadge && (
          <div className="absolute -right-5 top-[3px]">
            <div className="w-3 h-3 rounded-full bg-[var(--badge-notification-fill,#bed62f)]" />
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Picker ── */
export interface PickerProps {
  /** Items to display */
  items?: Array<{
    label: string;
    selected?: boolean;
    badge?: boolean;
  }>;
  /** Multi-column mode */
  multiColumn?: boolean;
  /** Column titles (for multi-column mode) */
  columnTitles?: string[];
  /** Column items (for multi-column mode) */
  columns?: Array<
    Array<{
      label: string;
      selected?: boolean;
      badge?: boolean;
    }>
  >;
  /** Selection handler */
  onSelect?: (label: string, columnIndex?: number) => void;
  /** Additional CSS classes */
  className?: string;
}

export function Picker({
  items,
  multiColumn = false,
  columnTitles = ["Titolo", "Titolo"],
  columns,
  onSelect,
  className,
}: PickerProps) {
  const defaultItems = [
    { label: "Label", selected: false, badge: true },
    { label: "Label", selected: true, badge: true },
    { label: "Label", selected: false, badge: true },
  ];

  if (multiColumn) {
    const defaultColumns = [defaultItems, defaultItems];
    const cols = columns || defaultColumns;

    return (
      <div
        className={
          className ||
          "flex items-start gap-2 justify-center px-4 w-[360px] font-['Roboto',sans-serif]"
        }
      >
        {cols.map((col, colIdx) => (
          <div
            key={colIdx}
            className="flex flex-col items-center flex-1 border-b border-[var(--border-alt,#e9eaea)]"
          >
            {/* Column title */}
            <div className="flex items-center justify-center py-2 w-full">
              <span className="text-sm font-medium leading-[18px] text-center text-[var(--font-color-active,#262c2f)]">
                {columnTitles[colIdx] || "Titolo"}
              </span>
            </div>

            {/* Column items */}
            <div className="flex flex-col w-full">
              {col.map((item, idx) => (
                <PickerItem
                  key={idx}
                  label={item.label}
                  selected={item.selected}
                  showBadge={item.badge !== false}
                  onClick={() => onSelect?.(item.label, colIdx)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Single column
  const pickerItems = items || defaultItems;

  return (
    <div
      className={
        className ||
        "flex flex-col w-[360px] font-['Roboto',sans-serif]"
      }
    >
      {pickerItems.map((item, idx) => (
        <PickerItem
          key={idx}
          label={item.label}
          selected={item.selected}
          showBadge={item.badge !== false}
          onClick={() => onSelect?.(item.label)}
        />
      ))}
    </div>
  );
}

export default Picker;
