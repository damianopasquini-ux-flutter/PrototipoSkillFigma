import React from 'react';

/**
 * Link component from Sisal Design System
 * Sizes: M (regular), M-Medium, M-Prominent, S, S-Prominent
 * States: Active, Disabled
 *
 * Design tokens (CSS vars):
 * --font-color-active: #262c2f
 * --font-color-disabled: #929597
 * --spacing-xx-small: 4px
 */

export type LinkSize = 'M' | 'S' | 'M-Medium' | 'M-Prominent' | 'S-Prominent';
export type LinkStatus = 'Active' | 'Disabled';

export interface LinkProps {
  /** Link text content */
  children: React.ReactNode;
  /** Size variant */
  size?: LinkSize;
  /** Active or Disabled state */
  status?: LinkStatus;
  /** Click handler */
  onClick?: () => void;
  /** Target URL */
  href?: string;
  /** Additional CSS classes */
  className?: string;
}

const sizeStyles: Record<LinkSize, string> = {
  'M': 'text-sm leading-[18px] font-normal',
  'M-Medium': 'text-sm leading-[18px] font-medium',
  'M-Prominent': 'text-sm leading-[18px] font-bold',
  'S': 'text-xs leading-[14px] font-medium',
  'S-Prominent': 'text-xs leading-[14px] font-bold',
};

export function Link({
  children,
  size = 'M',
  status = 'Active',
  onClick,
  href,
  className = '',
}: LinkProps) {
  const isDisabled = status === 'Disabled';

  const colorClass = isDisabled
    ? 'text-[var(--font-color-disabled,#929597)] cursor-not-allowed'
    : 'text-[var(--font-color-active,#262c2f)] cursor-pointer hover:opacity-80';

  const baseClasses = [
    'font-[Roboto,sans-serif]',
    'underline decoration-solid',
    'inline-flex items-center gap-[var(--spacing-xx-small,4px)]',
    sizeStyles[size],
    colorClass,
    className,
  ].join(' ');

  if (href && !isDisabled) {
    return (
      <a href={href} className={baseClasses} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={baseClasses}
      onClick={isDisabled ? undefined : onClick}
      disabled={isDisabled}
      aria-disabled={isDisabled}
    >
      {children}
    </button>
  );
}

export default Link;
