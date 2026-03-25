import React, { useState, useRef, useEffect } from 'react';

/**
 * Dropdown component from Sisal Design System
 * Sizes: S (small, 36px height) and M (medium, 52px height)
 * Supports dark background variant and optional flag icon
 *
 * Design tokens (CSS vars):
 * --border-default-alt-2: #929597
 * --border-default-bg-dark: #929597
 * --font-color-active: #262c2f
 * --font-color-bg-dark: #fff
 * --radius-default: 8px
 * --spacing-4: 4px
 * --spacing-8: 8px
 */

export type DropdownSize = 's' | 'm';

export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  /** Dropdown options */
  options: DropdownOption[];
  /** Currently selected value */
  value?: string;
  /** Placeholder label when no value selected */
  placeholder?: string;
  /** Size variant */
  size?: DropdownSize;
  /** Dark background mode */
  bgDark?: boolean;
  /** Show a flag icon on the left (only for size S) */
  flagIcon?: React.ReactNode;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Additional CSS classes */
  className?: string;
}

function ChevronDownIcon({ color = 'currentColor' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path
        d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
        fill={color}
      />
    </svg>
  );
}

export function Dropdown({
  options,
  value,
  placeholder = 'Label',
  size = 's',
  bgDark = false,
  flagIcon,
  onChange,
  className = '',
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find((o) => o.value === selectedValue);
  const displayLabel = selectedOption?.label ?? placeholder;

  const textColor = bgDark
    ? 'text-[var(--font-color-bg-dark,white)]'
    : 'text-[var(--font-color-active,#262c2f)]';

  const borderColor = bgDark
    ? 'border-[var(--border-default-bg-dark,#929597)]'
    : 'border-[var(--border-default-alt-2,#929597)]';

  const sizeClasses = size === 'm'
    ? 'h-[52px] min-w-[52px]'
    : 'h-9 min-w-[132px]';

  return (
    <div ref={ref} className={['relative inline-block', className].join(' ')}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={[
          'flex items-center gap-1 rounded-[var(--radius-default,8px)] border',
          'pl-2 pr-1',
          'font-[Roboto,sans-serif] text-xs font-medium leading-[14px] tracking-[0.12px]',
          sizeClasses,
          borderColor,
          textColor,
          bgDark ? 'bg-transparent' : 'bg-transparent',
        ].join(' ')}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {flagIcon && size === 's' && (
          <span className="shrink-0 w-3.5 h-3.5 flex items-center justify-center overflow-hidden rounded-sm">
            {flagIcon}
          </span>
        )}
        <span className="flex-1 text-left truncate">{displayLabel}</span>
        <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDownIcon color={bgDark ? 'white' : '#262c2f'} />
        </span>
      </button>

      {isOpen && (
        <ul
          role="listbox"
          className={[
            'absolute z-50 mt-1 w-full min-w-[132px] max-h-60 overflow-auto',
            'rounded-[var(--radius-default,8px)] border',
            'shadow-[0px_2px_8px_0px_rgba(0,0,0,0.1)]',
            bgDark
              ? 'bg-[#2f3c43] border-[#929597]'
              : 'bg-white border-[#c9cacb]',
          ].join(' ')}
        >
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={option.value === selectedValue}
              onClick={() => {
                setSelectedValue(option.value);
                onChange?.(option.value);
                setIsOpen(false);
              }}
              className={[
                'px-2 py-2 cursor-pointer font-[Roboto,sans-serif] text-xs font-medium',
                'hover:bg-black/5',
                option.value === selectedValue ? 'font-bold' : '',
                bgDark ? 'text-white' : 'text-[#262c2f]',
              ].join(' ')}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/**
 * BetRadar-style dropdown bar for match context
 * Dark background with team names and market selector
 */
export interface DropdownBetRadarProps {
  homeTeam: string;
  awayTeam: string;
  market?: string;
  flagIcon?: React.ReactNode;
  onMarketClick?: () => void;
  className?: string;
}

export function DropdownBetRadar({
  homeTeam,
  awayTeam,
  market = 'Risultato',
  flagIcon,
  onMarketClick,
  className = '',
}: DropdownBetRadarProps) {
  return (
    <div
      className={[
        'flex items-center gap-4 p-4 w-full',
        'bg-[var(--tab-navigation-surface-default,#2f3c43)]',
        'font-[Roboto,sans-serif] text-xs font-bold text-white',
        className,
      ].join(' ')}
    >
      <div className="flex flex-1 items-center gap-1 min-w-0">
        {flagIcon && (
          <span className="shrink-0 w-4 h-4 flex items-center justify-center overflow-hidden">
            {flagIcon}
          </span>
        )}
        <span className="whitespace-nowrap">{homeTeam}</span>
        <span>-</span>
        <span className="truncate">{awayTeam}</span>
      </div>
      <button
        type="button"
        onClick={onMarketClick}
        className="flex items-center gap-1 shrink-0 text-xs font-medium leading-[14px]"
      >
        <span>{market}</span>
        <ChevronDownIcon color="white" />
      </button>
    </div>
  );
}

export default Dropdown;
