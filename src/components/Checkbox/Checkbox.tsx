import React from 'react';

/**
 * Checkbox & RadioButton components from Sisal Design System
 * States: selected / unselected, enabled / disabled
 *
 * Design tokens (CSS vars):
 * --font-color-active: #262c2f
 * --font-color-disabled: #929597
 * --checkbox-fill-selected: #bed62f (lime green from DS)
 * --checkbox-border: #929597
 * --spacing-4: 4px
 */

/* ===========================
   CHECKBOX
   =========================== */

export interface CheckboxProps {
  /** Whether checked */
  checked?: boolean;
  /** Whether disabled */
  disabled?: boolean;
  /** Label text */
  label?: string;
  /** Change handler */
  onChange?: (checked: boolean) => void;
  /** Additional CSS classes */
  className?: string;
}

function CheckboxIcon({ checked, disabled }: { checked: boolean; disabled: boolean }) {
  if (checked) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="2"
          fill={disabled ? '#c9cacb' : 'var(--checkbox-fill-selected, #bed62f)'}
          stroke={disabled ? '#c9cacb' : 'var(--checkbox-fill-selected, #bed62f)'}
          strokeWidth="1.5"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        fill="none"
        stroke={disabled ? '#c9cacb' : 'var(--checkbox-border, #929597)'}
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function Checkbox({
  checked = false,
  disabled = false,
  label,
  onChange,
  className = '',
}: CheckboxProps) {
  return (
    <label
      className={[
        'inline-flex items-center gap-[var(--spacing-4,4px)]',
        disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        className,
      ].join(' ')}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="sr-only"
      />
      <CheckboxIcon checked={checked} disabled={disabled} />
      {label && (
        <span
          className={[
            'font-[Roboto,sans-serif] text-sm font-medium leading-[18px]',
            disabled
              ? 'text-[var(--font-color-disabled,#929597)]'
              : 'text-[var(--font-color-active,#262c2f)]',
          ].join(' ')}
        >
          {label}
        </span>
      )}
    </label>
  );
}

/* ===========================
   RADIO BUTTON
   =========================== */

export interface RadioButtonProps {
  /** Whether selected */
  checked?: boolean;
  /** Whether disabled */
  disabled?: boolean;
  /** Label text */
  label?: string;
  /** Radio group name */
  name?: string;
  /** Radio value */
  value?: string;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Additional CSS classes */
  className?: string;
}

function RadioIcon({ checked, disabled }: { checked: boolean; disabled: boolean }) {
  const outerStroke = disabled ? '#c9cacb' : 'var(--checkbox-border, #929597)';
  const innerFill = disabled ? '#c9cacb' : 'var(--checkbox-fill-selected, #bed62f)';

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke={checked ? innerFill : outerStroke}
        strokeWidth="1.5"
      />
      {checked && <circle cx="12" cy="12" r="5" fill={innerFill} />}
    </svg>
  );
}

export function RadioButton({
  checked = false,
  disabled = false,
  label,
  name,
  value = '',
  onChange,
  className = '',
}: RadioButtonProps) {
  return (
    <label
      className={[
        'inline-flex items-center gap-[var(--spacing-4,4px)]',
        disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        className,
      ].join(' ')}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => onChange?.(value)}
        className="sr-only"
      />
      <RadioIcon checked={checked} disabled={disabled} />
      {label && (
        <span
          className={[
            'font-[Roboto,sans-serif] text-sm font-medium leading-[18px]',
            disabled
              ? 'text-[var(--font-color-disabled,#929597)]'
              : 'text-[var(--font-color-active,#262c2f)]',
          ].join(' ')}
        >
          {label}
        </span>
      )}
    </label>
  );
}

export default Checkbox;
