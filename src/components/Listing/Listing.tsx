import React from "react";

/* ------------------------------------------------------------------ */
/*  Sisal DS - Listing                                                 */
/*  Key-value list items in 3 variants: default, box, statistiche      */
/* ------------------------------------------------------------------ */

export interface ListingItemProps {
  label?: string;
  value?: string;
  type?: "default" | "box" | "statistiche";
}

export function ListingItem({
  label = "Label:",
  value = "Label",
  type = "default",
}: ListingItemProps) {
  if (type === "box") {
    return (
      <div className="flex gap-1 items-start p-1 bg-[var(--appereance-list-item-surface-system,#eff0f0)] rounded w-full">
        <span className="font-['Roboto',sans-serif] font-normal text-xs leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] whitespace-nowrap shrink-0">
          {label}
        </span>
        <span className="font-['Roboto',sans-serif] font-medium text-xs leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] text-right flex-1">
          {value}
        </span>
      </div>
    );
  }

  if (type === "statistiche") {
    return (
      <div className="flex gap-2 items-center py-3 border-b border-[var(--appereance-border-default-active,#c9cacb)] w-full">
        <span className="font-['Roboto',sans-serif] font-medium text-xs leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] w-[77px] shrink-0">
          {label}
        </span>
        <span className="font-['Roboto',sans-serif] font-normal text-xs leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] text-right whitespace-nowrap shrink-0">
          {value}
        </span>
      </div>
    );
  }

  /* default */
  return (
    <div className="flex flex-col gap-1 items-start pb-2 border-b border-[var(--appereance-list-item-text-alt,#5c6063)] w-full">
      <span className="font-['Roboto',sans-serif] font-normal text-xs leading-[14px] text-[var(--appereance-list-item-text-default,#262c2f)]">
        {label}
      </span>
      <span className="font-['Roboto',sans-serif] font-medium text-xs leading-[14px] text-[var(--appereance-list-item-text-default,#262c2f)]">
        {value}
      </span>
    </div>
  );
}

export interface ListingProps {
  className?: string;
  items?: ListingItemProps[];
  type?: "default" | "box" | "statistiche";
}

export function Listing({
  className,
  items = [
    { label: "Label:", value: "Lorem ipsum dolor sit amet" },
  ],
  type = "default",
}: ListingProps) {
  return (
    <div className={className || "flex flex-col gap-0 items-start w-[328px]"}>
      {items.map((item, i) => (
        <ListingItem
          key={i}
          label={item.label}
          value={item.value}
          type={item.type || type}
        />
      ))}
    </div>
  );
}

export default Listing;
