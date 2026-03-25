import React from "react";

/* ── Types ── */
interface TableRowData {
  label: string;
  value: string;
}

interface TableTitleProps {
  className?: string;
  title?: string;
}

interface TableListItemProps {
  className?: string;
  dark?: boolean;
  label?: string;
  details?: string;
}

interface TableProps {
  className?: string;
  title?: string;
  rows?: TableRowData[];
}

/* ── TableTitle ── */
export function TableTitle({ className, title = "Title" }: TableTitleProps) {
  return (
    <div
      className={
        className ||
        "bg-[var(--button-primary-fill-default,#00653b)] flex items-center p-3 w-full"
      }
    >
      <span className="flex-1 font-normal font-['Roboto',sans-serif] text-xs leading-[14px] text-[var(--button-primary-text-default,white)]">
        {title}
      </span>
    </div>
  );
}

/* ── TableListItem ── */
export function TableListItem({
  className,
  dark = false,
  label = "Label",
  details = "XX",
}: TableListItemProps) {
  return (
    <div
      className={
        className ||
        `flex gap-2 items-center p-3 w-full ${
          dark
            ? "bg-[var(--appereance-tab-bar-fill-selected,#262c2f)]"
            : "bg-[var(--appereance-tab-bar-fill-default,#2c363c)]"
        }`
      }
    >
      <div className="flex flex-1 gap-1 items-center">
        <span className="font-normal font-['Roboto',sans-serif] text-xs leading-[14px] text-[var(--appereance-font-color-bg-dark,white)] w-[30px]">
          {label}
        </span>
      </div>
      <span className="font-normal font-['Roboto',sans-serif] text-xs leading-[14px] text-[var(--appereance-font-color-bg-dark,white)] text-right whitespace-nowrap">
        {details}
      </span>
    </div>
  );
}

/* ── Table ── */
export function Table({
  className,
  title = "Title",
  rows = [
    { label: "Label", value: "XX" },
    { label: "Label", value: "XX" },
    { label: "Label", value: "XX" },
    { label: "Label", value: "XX" },
    { label: "Label", value: "XX" },
    { label: "Label", value: "XX" },
    { label: "Label", value: "XX" },
  ],
}: TableProps) {
  return (
    <div
      className={
        className ||
        "border border-[var(--appereance-border-default-active,#c9cacb)] flex flex-col items-start overflow-hidden rounded-[var(--radius-alt,8px)] w-[328px] font-['Roboto',sans-serif]"
      }
    >
      <TableTitle title={title} />
      {rows.map((row, i) => (
        <TableListItem
          key={i}
          dark={i % 2 !== 0}
          label={row.label}
          details={row.value}
        />
      ))}
    </div>
  );
}

export default Table;
