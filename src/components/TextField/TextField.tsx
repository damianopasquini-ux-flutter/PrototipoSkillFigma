import React, { useState, useRef, useEffect } from 'react';

/**
 * TextField component from Sisal Design System
 * States: Active (idle), Typing, Entered, Error
 * Also includes a SAI (search/AI input) variant
 *
 * Design tokens (CSS vars):
 * --font-color-active: #262c2f
 * --font-color-alt-2: #929597
 * --font-color-disabled: #929597
 * --border-default-alt-2: #929597
 * --snackbar-icon-error: #e73947
 * --searchbar-fill-active: #fff
 * --searchbar-fill-disabled: #dedede
 * --searchbar-text-typed: #262c2f
 * --radius-default: 8px
 */

export type TextFieldState = 'active' | 'typing' | 'entered' | 'error';

export interface TextFieldProps {
  /** Input label (displayed above the line) */
  label?: string;
  /** Current value */
  value?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Assistive / helper text below */
  assistiveText?: string;
  /** Error state */
  error?: boolean;
  /** Error message (overrides assistiveText when error is true) */
  errorMessage?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Focus handler */
  onFocus?: () => void;
  /** Blur handler */
  onBlur?: () => void;
  /** Additional CSS classes */
  className?: string;
}

export function TextField({
  label = 'Label',
  value = '',
  placeholder = '',
  assistiveText = 'Assistive text',
  error = false,
  errorMessage,
  disabled = false,
  onChange,
  onFocus,
  onBlur,
  className = '',
}: TextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const hasValue = value.length > 0;

  // Determine visual state
  let state: TextFieldState = 'active';
  if (error) state = 'error';
  else if (isFocused) state = 'typing';
  else if (hasValue) state = 'entered';

  // Label color
  const labelColorMap: Record<TextFieldState, string> = {
    active: 'text-transparent', // hidden when active (no label shown)
    typing: 'text-[var(--font-color-active,#262c2f)]',
    entered: 'text-[var(--font-color-disabled,#929597)]',
    error: 'text-[var(--snackbar-icon-error,#e73947)]',
  };

  // Border color
  const borderColorMap: Record<TextFieldState, string> = {
    active: 'border-[var(--border-default-alt-2,#929597)]',
    typing: 'border-[var(--font-color-active,#262c2f)]',
    entered: 'border-[var(--border-default-alt-2,#929597)]',
    error: 'border-[var(--snackbar-icon-error,#e73947)]',
  };

  // Input text color
  const inputColorMap: Record<TextFieldState, string> = {
    active: 'text-[var(--font-color-alt-2,#929597)]',
    typing: 'text-[var(--font-color-active,#262c2f)]',
    entered: 'text-[var(--font-color-active,#262c2f)]',
    error: 'text-[var(--font-color-active,#262c2f)]',
  };

  // Assistive text color
  const assistiveColorMap: Record<TextFieldState, string> = {
    active: 'text-[var(--font-color-alt-2,#929597)]',
    typing: 'text-[var(--font-color-active,#262c2f)]',
    entered: 'text-[var(--font-color-disabled,#929597)]',
    error: 'text-[var(--snackbar-icon-error,#e73947)]',
  };

  const showLabel = state !== 'active';
  const helperText = error && errorMessage ? errorMessage : assistiveText;

  return (
    <div className={['flex flex-col gap-2.5 w-full max-w-[326px]', className].join(' ')}>
      {/* Label */}
      <div className="px-4 h-3.5">
        {showLabel && (
          <span
            className={[
              'font-[Roboto,sans-serif] text-xs leading-[14px]',
              labelColorMap[state],
            ].join(' ')}
          >
            {label}
          </span>
        )}
      </div>

      {/* Input area */}
      <div
        className={[
          'border-b pb-[9px]',
          borderColorMap[state],
        ].join(' ')}
      >
        <div className="px-4">
          <input
            ref={inputRef}
            type="text"
            value={value}
            placeholder={state === 'active' ? label : placeholder}
            disabled={disabled}
            onChange={(e) => onChange?.(e.target.value)}
            onFocus={() => {
              setIsFocused(true);
              onFocus?.();
            }}
            onBlur={() => {
              setIsFocused(false);
              onBlur?.();
            }}
            className={[
              'w-full bg-transparent outline-none',
              'font-[Roboto,sans-serif] text-sm leading-[18px]',
              inputColorMap[state],
              disabled ? 'cursor-not-allowed opacity-50' : '',
            ].join(' ')}
          />
        </div>
      </div>

      {/* Assistive text */}
      <div className="px-4">
        <span
          className={[
            'font-[Roboto,sans-serif] text-xs leading-[14px]',
            assistiveColorMap[state],
          ].join(' ')}
        >
          {helperText}
        </span>
      </div>
    </div>
  );
}

/**
 * SAI (Search AI Input) variant -- rounded search bar
 * Used for AI-powered question input
 */
export interface TextFieldSaiProps {
  /** Current value */
  value?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Submit handler */
  onSubmit?: () => void;
  /** Additional CSS classes */
  className?: string;
}

function SendIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="currentColor" />
    </svg>
  );
}

export function TextFieldSai({
  value = '',
  placeholder = 'Scrivi qui la tua domanda',
  disabled = false,
  onChange,
  onSubmit,
  className = '',
}: TextFieldSaiProps) {
  const hasValue = value.length > 0;

  return (
    <div
      className={[
        'flex items-center gap-2 px-2 rounded-[var(--radius-default,8px)] min-h-[40px] max-h-[70px] w-full max-w-[328px]',
        disabled
          ? 'bg-[var(--searchbar-fill-disabled,#dedede)]'
          : 'bg-[var(--searchbar-fill-active,white)]',
        'font-[Roboto,sans-serif] text-sm leading-[18px]',
        className,
      ].join(' ')}
    >
      <textarea
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            onSubmit?.();
          }
        }}
        rows={1}
        className={[
          'flex-1 bg-transparent outline-none resize-none min-h-[18px] max-h-[60px] py-2',
          disabled
            ? 'text-[var(--font-color-disabled,#929597)] cursor-not-allowed'
            : hasValue
              ? 'text-[var(--searchbar-text-typed,#262c2f)]'
              : 'text-[var(--font-color-alt-2,#929597)]',
        ].join(' ')}
      />
      {hasValue && !disabled && (
        <button
          type="button"
          onClick={onSubmit}
          className="shrink-0 text-[var(--font-color-active,#262c2f)]"
          aria-label="Invia"
        >
          <SendIcon />
        </button>
      )}
    </div>
  );
}

export default TextField;
