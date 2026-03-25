import React from 'react';

/**
 * Quicklink component from Sisal Design System
 * Variants: Box, Generic, List, Tipster
 *
 * Design tokens (CSS vars):
 * --quicklink-fill-alt: #fff
 * --quicklink-fill-active: #fff
 * --quicklink-border-alt: #c9cacb
 * --quicklink-border-default: #c9cacb
 * --font-color-active: #262c2f
 * --font-color-white: #fff
 * --font-color-black: #262c2f
 * --radius-default: 8px
 * --spacing-8: 8px
 * --badge-fill-promo: #ffbf00
 * --badge-fill-live: #262c2f
 * --tip-fill-accent: #b6ff00
 */

export type QuicklinkVariant = 'box' | 'generic' | 'list' | 'tipster';

export interface QuicklinkProps {
  /** Display text */
  label: string;
  /** Visual variant */
  variant?: QuicklinkVariant;
  /** Show left icon slot */
  icon?: React.ReactNode;
  /** Show favorite heart icon (list variant) */
  showFavorite?: boolean;
  /** Show promo badge (list variant) */
  showBadgePromo?: boolean;
  /** Show live badge (list variant) */
  showBadgeLive?: boolean;
  /** Show chevron arrow */
  showChevron?: boolean;
  /** Show plus icon instead of chevron */
  showPlus?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

/* ---- Sub-components ---- */

function ChevronIcon({ color = 'currentColor' }: { color?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path
        d="M9.29 6.71a1 1 0 0 0 0 1.41L13.17 12l-3.88 3.88a1 1 0 1 0 1.41 1.41l4.59-4.59a1 1 0 0 0 0-1.41L10.7 6.71a1 1 0 0 0-1.41 0z"
        fill={color}
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" />
    </svg>
  );
}

function Badge({ type }: { type: 'promo' | 'live' }) {
  const isPromo = type === 'promo';
  return (
    <span
      className={[
        'inline-flex items-center justify-center px-1 rounded-sm text-[10px] font-medium font-[Roboto,sans-serif] h-[14px] leading-none shrink-0',
        isPromo
          ? 'bg-[var(--badge-fill-promo,#ffbf00)] text-[var(--font-color-active,#262c2f)]'
          : 'bg-[var(--badge-fill-live,#262c2f)] text-[#ff8e0d]',
      ].join(' ')}
    >
      {isPromo ? 'Promo' : 'Live'}
    </span>
  );
}

/* ---- Main component ---- */

export function Quicklink({
  label,
  variant = 'box',
  icon,
  showFavorite = false,
  showBadgePromo = false,
  showBadgeLive = false,
  showChevron = true,
  showPlus = false,
  onClick,
  className = '',
}: QuicklinkProps) {

  /* Variant: Tipster (dark bg, accent border) */
  if (variant === 'tipster') {
    return (
      <button
        type="button"
        onClick={onClick}
        className={[
          'flex items-center gap-2 h-9 px-2 py-1.5 rounded-[var(--radius-default,8px)] w-full max-w-[328px]',
          'bg-[var(--font-color-black,#262c2f)]',
          'border border-[var(--tip-fill-accent,#b6ff00)]',
          'shadow-[0px_2px_8px_0px_rgba(0,0,0,0.1)]',
          'font-[Roboto,sans-serif] text-sm text-white',
          className,
        ].join(' ')}
      >
        {icon && <span className="shrink-0 w-4 h-4 flex items-center justify-center">{icon}</span>}
        <span className="flex-1 text-left leading-[18px]">{label}</span>
      </button>
    );
  }

  /* Variant: Generic (bottom border, no box) */
  if (variant === 'generic') {
    return (
      <button
        type="button"
        onClick={onClick}
        className={[
          'flex items-center gap-3 pt-2 pb-3 px-2 w-full',
          'border-b border-[var(--quicklink-border-default,#c9cacb)]',
          'bg-transparent',
          'font-[Roboto,sans-serif] text-sm font-medium text-[var(--font-color-active,#262c2f)]',
          className,
        ].join(' ')}
      >
        {icon && <span className="shrink-0 w-6 h-6 flex items-center justify-center">{icon}</span>}
        <span className="flex-1 text-left leading-none">{label}</span>
        <ChevronIcon />
      </button>
    );
  }

  /* Variant: List (pill-shaped card with badges) */
  if (variant === 'list') {
    return (
      <button
        type="button"
        onClick={onClick}
        className={[
          'flex items-center gap-2 h-9 px-2 py-1.5 rounded-[var(--radius-default,8px)] w-full max-w-[328px]',
          'bg-[var(--quicklink-fill-alt,white)]',
          'border-[0.5px] border-[var(--quicklink-border-alt,#c9cacb)]',
          'shadow-[0px_2px_8px_0px_rgba(0,0,0,0.1)]',
          'font-[Roboto,sans-serif] text-sm text-[var(--font-color-active,#262c2f)]',
          className,
        ].join(' ')}
      >
        {showFavorite && (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        )}
        {icon && <span className="shrink-0 w-4 h-4 flex items-center justify-center">{icon}</span>}
        <span className="flex-1 text-left leading-[18px]">{label}</span>
        {showBadgePromo && <Badge type="promo" />}
        {showBadgeLive && <Badge type="live" />}
        {showChevron && !showPlus && <ChevronIcon />}
        {showPlus && <PlusIcon />}
      </button>
    );
  }

  /* Variant: Box (default -- card with border + shadow) */
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'flex items-center gap-2 p-2 rounded-[var(--radius-default,8px)] w-full max-w-[328px]',
        'bg-[var(--quicklink-fill-active,white)]',
        'border-[0.5px] border-[var(--quicklink-border-alt,#c9cacb)]',
        'shadow-[0px_2px_8px_0px_rgba(0,0,0,0.1)]',
        'font-[Roboto,sans-serif] text-sm font-medium text-[var(--font-color-active,#262c2f)]',
        className,
      ].join(' ')}
    >
      {icon && <span className="shrink-0 w-6 h-6 flex items-center justify-center">{icon}</span>}
      <span className="flex-1 text-left leading-none">{label}</span>
      <ChevronIcon />
    </button>
  );
}

export default Quicklink;
