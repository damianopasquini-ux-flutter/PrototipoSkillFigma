/**
 * Filter — Sisal Betting App DS
 *
 * 1:1 from Figma DS node 5228:2954
 * Extracted via get_design_context(disableCodeConnect: true)
 * Variables match Figma collection "Filter" with setVariableCodeSyntax('WEB', ...)
 */

import React from "react";

/* ====== FILTER CHIP ====== */

export interface FilterChipProps {
  label?: string;
  selected?: boolean;
  darkBg?: boolean;
  iconLeft?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function FilterChip({
  label = "Label",
  selected = false,
  darkBg = false,
  iconLeft,
  onClick,
  className,
}: FilterChipProps) {
  const fill = selected
    ? "var(--appereance-filter-chips-fill-selected, #bed62f)"
    : darkBg
    ? "var(--appereance-filter-chips-fill-active-dark, #262c2f)"
    : "var(--appereance-filter-chips-fill-active-light, #ffffff)";

  const text = selected
    ? "var(--appereance-filter-chips-text-select, #262c2f)"
    : darkBg
    ? "var(--appereance-filter-chips-text-active-dark, #ffffff)"
    : "var(--appereance-filter-chips-text-active-light, #262c2f)";

  const border = selected
    ? "var(--appereance-filter-chips-border-selected, #bed62f)"
    : "var(--appereance-filter-chips-border-active, #c9cacb)";

  return (
    <button
      className={className}
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--filter-chips-spacing-default, 8px)",
        height: 32,
        minHeight: 32,
        maxHeight: 32,
        padding: "4px var(--filter-chips-spacing-default, 8px)",
        borderRadius: "var(--radius-default, 8px)",
        backgroundColor: fill,
        color: text,
        border: `0.5px solid ${border}`,
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 500,
        fontSize: "var(--font-size-xs, 12px)",
        lineHeight: "var(--font-line-height-xs, 14px)",
        whiteSpace: "nowrap",
        cursor: "pointer",
        boxShadow: !selected ? "0px 2px 8px 0px rgba(0,0,0,0.1)" : "none",
        boxSizing: "border-box",
      }}
    >
      {iconLeft && (
        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 24, height: 24, flexShrink: 0 }}>
          {iconLeft}
        </span>
      )}
      <span>{label}</span>
    </button>
  );
}

/* ====== FILTER PANEL ====== */

export interface FilterPanelProps {
  label?: string;
  selected?: boolean;
  icon?: React.ReactNode;
  badgeCount?: number;
  onClick?: () => void;
  className?: string;
}

export function FilterPanel({
  label = "Label",
  selected = false,
  icon,
  badgeCount = 12,
  onClick,
  className,
}: FilterPanelProps) {
  const fill = selected
    ? "var(--appereance-filter-chips-fill-selected, #bed62f)"
    : "var(--appereance-filter-chips-fill-active-light, #ffffff)";

  const text = selected
    ? "var(--appereance-filter-chips-text-select, #262c2f)"
    : "var(--appereance-filter-chips-text-active-light, #262c2f)";

  const border = selected
    ? "var(--appereance-filter-chips-border-selected, #bed62f)"
    : "var(--appereance-filter-chips-border-active, #c9cacb)";

  return (
    <button
      className={className}
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--layout-spacing-8, 8px)",
        width: 328,
        height: 36,
        minHeight: 36,
        maxHeight: 36,
        padding: "6px var(--spacing-16, 16px) 6px var(--filter-chips-spacing-default, 8px)",
        borderRadius: "var(--radius-default, 8px)",
        backgroundColor: fill,
        color: text,
        border: `0.5px solid ${border}`,
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 400,
        fontSize: "var(--font-size-sm, 14px)",
        lineHeight: "var(--font-line-height-md, 18px)",
        cursor: "pointer",
        boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.1)",
        boxSizing: "border-box",
      }}
    >
      {icon && (
        <span style={{ display: "flex", width: 16, height: 16, flexShrink: 0 }}>{icon}</span>
      )}
      <span style={{ flex: 1, textAlign: "left" }}>{label}</span>
      {badgeCount != null && (
        <span style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 16,
          height: 16,
          borderRadius: 1000,
          backgroundColor: "var(--badge-notification-fill-selected, #bed62f)",
          color: "var(--badge-notification-text-selected, #262c2f)",
          fontWeight: 700,
          fontSize: 10,
          lineHeight: "12px",
          flexShrink: 0,
        }}>
          {badgeCount}
        </span>
      )}
    </button>
  );
}

/* ====== FILTER BUTTON (FAB) ====== */

export type FilterButtonType = "floating" | "list" | "order" | "default";

export interface FilterButtonProps {
  type?: FilterButtonType;
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function FilterButton({
  type = "floating",
  label = "Button",
  icon,
  onClick,
  className,
}: FilterButtonProps) {
  const isIconOnly = type !== "floating";

  const style: React.CSSProperties = isIconOnly
    ? {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 48,
        height: 32,
        borderRadius: "var(--radius-default, 8px)",
        backgroundColor: "var(--appereance-filter-fab-fill-chips-default, #ffffff)",
        border: "none",
        cursor: "pointer",
        boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.1)",
      }
    : {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--layout-spacing-8, 8px)",
        minHeight: 36,
        maxHeight: 40,
        minWidth: 96,
        padding: "var(--layout-spacing-8, 8px) var(--button-spacing-default, 24px)",
        borderRadius: "var(--button-radius-default, 100px)",
        backgroundColor: "var(--appereance-filter-fab-fill-button-default, #bed62f)",
        color: "var(--appereance-filter-fab-text-button-default, #262c2f)",
        border: "none",
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 700,
        fontSize: "var(--font-size-sm, 14px)",
        lineHeight: "normal",
        whiteSpace: "nowrap",
        cursor: "pointer",
        boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.1)",
      };

  return (
    <button className={className} onClick={onClick} style={style}>
      {icon && (
        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 24, height: 24, flexShrink: 0 }}>
          {icon}
        </span>
      )}
      {!isIconOnly && <span>{label}</span>}
    </button>
  );
}

/* ====== FILTER CHIPS ROW (composed) ====== */

export interface FilterChipsRowProps {
  chips?: Array<{ label: string; selected?: boolean; icon?: React.ReactNode }>;
  darkBg?: boolean;
  showFab?: boolean;
  onChipClick?: (index: number) => void;
  className?: string;
}

export function FilterChipsRow({
  chips = [
    { label: "Calcio", selected: true },
    { label: "Tennis" },
    { label: "Basket" },
    { label: "F1" },
    { label: "Volley" },
  ],
  darkBg = false,
  showFab = true,
  onChipClick,
  className,
}: FilterChipsRowProps) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--layout-spacing-8, 8px)",
        padding: "12px 16px",
        overflowX: "auto",
      }}
    >
      {showFab && <FilterButton type="floating" label="Button" />}
      {chips.map((chip, i) => (
        <FilterChip
          key={i}
          label={chip.label}
          selected={chip.selected}
          darkBg={darkBg}
          iconLeft={chip.icon}
          onClick={() => onChipClick?.(i)}
        />
      ))}
    </div>
  );
}

export default FilterChip;
