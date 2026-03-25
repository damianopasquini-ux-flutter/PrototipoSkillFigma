import React from 'react';

/**
 * Toggle (Switch) component from Sisal Design System
 * Sizes: Large (56x31) and Small (44x24)
 * States: Selected / Unselected, Enabled / Disabled
 *
 * Design tokens (CSS vars):
 * --toggle-fill-selected: #bed62f
 * --toggle-fill-unselected: #c9cacb (derived from design)
 * --toggle-corner-radius: 1000px
 * --font-color-active: #262c2f
 * --spacing-8: 8px
 * --spacing-16: 16px
 */

export type ToggleSize = 'large' | 'small';

export interface ToggleProps {
  /** Whether the toggle is on */
  checked?: boolean;
  /** Whether the toggle is disabled */
  disabled?: boolean;
  /** Size variant */
  size?: ToggleSize;
  /** Change handler */
  onChange?: (checked: boolean) => void;
  /** Accessible label */
  label?: string;
  /** Additional CSS classes */
  className?: string;
}

export function Toggle({
  checked = false,
  disabled = false,
  size = 'large',
  onChange,
  label,
  className = '',
}: ToggleProps) {
  const isLarge = size === 'large';
  const trackW = isLarge ? 'w-14' : 'w-11';    // 56px : 44px
  const trackH = isLarge ? 'h-[31px]' : 'h-6'; // 31px : 24px
  const thumbSize = isLarge ? 'w-[27px] h-[27px]' : 'w-5 h-5';
  const thumbOffset = isLarge ? 2 : 2; // px from edge
  const thumbTravel = isLarge ? 25 : 20; // px travel distance

  const trackColor = checked
    ? 'bg-[var(--toggle-fill-selected,#bed62f)]'
    : 'bg-[#c9cacb]';

  const opacity = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => {
        if (!disabled) onChange?.(!checked);
      }}
      className={[
        'relative inline-flex items-center shrink-0',
        'rounded-[var(--toggle-corner-radius,1000px)]',
        'transition-colors duration-200',
        trackW,
        trackH,
        trackColor,
        opacity,
        className,
      ].join(' ')}
    >
      <span
        className={[
          'absolute rounded-full bg-white shadow-md transition-transform duration-200',
          thumbSize,
        ].join(' ')}
        style={{
          top: '50%',
          transform: `translateY(-50%) translateX(${checked ? thumbTravel : thumbOffset}px)`,
        }}
      />
    </button>
  );
}

/**
 * Toggle String -- a row with label text + toggle switch
 * Used for settings/preferences (e.g. warning banner)
 */
export interface ToggleStringProps {
  /** Row label */
  title: string;
  /** Whether the toggle is on */
  checked?: boolean;
  /** Disabled */
  disabled?: boolean;
  /** Change handler */
  onChange?: (checked: boolean) => void;
  /** Background color class (default: warning yellow) */
  bgClassName?: string;
  /** Additional CSS classes */
  className?: string;
}

export function ToggleString({
  title,
  checked = true,
  disabled = false,
  onChange,
  bgClassName = 'bg-[var(--snackbar-fill-warning,#fff6dc)]',
  className = '',
}: ToggleStringProps) {
  return (
    <div
      className={[
        'flex items-center gap-2 h-9 px-4 py-2 w-full',
        bgClassName,
        'font-[Roboto,sans-serif] text-xs font-bold leading-none',
        'text-[var(--font-color-active,#262c2f)]',
        className,
      ].join(' ')}
    >
      <span className="flex-1">{title}</span>
      <Toggle checked={checked} disabled={disabled} size="small" onChange={onChange} label={title} />
    </div>
  );
}

export default Toggle;
