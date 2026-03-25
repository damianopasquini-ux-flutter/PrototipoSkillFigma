import React from "react";

/* ------------------------------------------------------------------ */
/*  Sisal DS - Cart Floating                                           */
/*  Floating pill showing bet type, odds and ticket badge              */
/* ------------------------------------------------------------------ */

export interface CartFloatingProps {
  className?: string;
  variant?: "pokerstars" | "sisal";
  betType?: string;
  odds?: string;
  badgeCount?: number;
  loading?: boolean;
  onClick?: () => void;
}

function TicketIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#262c2f" strokeWidth="1.5" />
      <path d="M8 10h8M8 13h8" stroke="#262c2f" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function CartFloating({
  className,
  variant = "pokerstars",
  betType = "Singola",
  odds = "1.55",
  badgeCount = 12,
  loading = false,
  onClick,
}: CartFloatingProps) {
  const isSisal = variant === "sisal";

  if (isSisal) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={
          className ||
          "bg-[var(--cart-toast-fill,#ff8e0d)] border border-[var(--cart-toast-border,white)] flex gap-2 h-[30px] items-center justify-center min-w-[91px] px-3 py-2 rounded-full"
        }
      >
        <span className="font-['Roboto',sans-serif] font-medium text-xs leading-[14px] text-[var(--font-color-black,#262c2f)] whitespace-nowrap">
          {betType} {odds}
        </span>
        {loading && (
          <span className="w-4 h-4 border-2 border-[#262c2f] border-t-transparent rounded-full animate-spin" />
        )}
      </button>
    );
  }

  /* Pokerstars variant */
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        className ||
        "bg-[var(--cart-toast-fill,#ff8e0d)] flex gap-2 items-center justify-end p-3 rounded-[1000px] shadow-[0px_5px_12px_0px_rgba(0,0,0,0.1)] relative"
      }
    >
      {/* Label */}
      <span className="flex gap-1 items-center font-['Roboto',sans-serif] text-sm leading-[18px] text-[var(--font-color-black,#262c2f)] whitespace-nowrap">
        <span className="font-normal">{betType}</span>
        <span className="font-bold">{odds}</span>
      </span>

      {/* Ticket icon + badge */}
      <span className="relative flex items-center gap-2">
        <TicketIcon />
        {badgeCount > 0 && (
          <span className="absolute -top-2.5 -left-1 bg-[var(--button-primary-fill-floating,#00653b)] rounded-full size-4 flex items-center justify-center">
            <span className="font-['Roboto',sans-serif] font-bold text-[10px] leading-3 text-[var(--badge-notification-text-default,#262c2f)] text-center">
              {badgeCount}
            </span>
          </span>
        )}
      </span>
    </button>
  );
}

export default CartFloating;
