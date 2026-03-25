import React from 'react';

/**
 * Segmented Controls from Sisal Design System
 * Shapes: Squared (8px radius) and Rounded (full radius / pill)
 * Supports dark background variant
 *
 * Design tokens (CSS vars):
 * --segmented-controls-surface-default: #dedede
 * --segmented-controls-surface-alt: #2c363c
 * --segmented-controls-fill-selected: #fff
 * --segmented-controls-fill-selected-alt: #bed62f
 * --segmented-controls-fill-active: transparent
 * --segmented-controls-text-selected: #262c2f
 * --segmented-controls-text-active: #262c2f
 * --segmented-controls-text-alt: #fff
 * --segmented-controls-text-disabled: #929597
 * --segmented-controls-text-disabled-alt: #5c6063
 * --radius-default: 8px
 * --radius-full: 100px
 * --segmented-controls-radius-selected: 6px
 */

export type SegmentedShape = 'squared' | 'rounded';

export interface SegmentedItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface SegmentedControlsProps {
  /** Array of items/tabs */
  items: SegmentedItem[];
  /** Currently selected value */
  value: string;
  /** Shape variant */
  shape?: SegmentedShape;
  /** Dark background mode */
  bgDark?: boolean;
  /** Change handler */
  onChange: (value: string) => void;
  /** Additional CSS classes */
  className?: string;
}

export function SegmentedControls({
  items,
  value,
  shape = 'squared',
  bgDark = false,
  onChange,
  className = '',
}: SegmentedControlsProps) {
  const isRounded = shape === 'rounded';

  const outerRadius = isRounded
    ? 'rounded-[var(--radius-full,100px)]'
    : 'rounded-[var(--radius-default,8px)]';

  const innerRadius = isRounded
    ? 'rounded-[var(--radius-full,100px)]'
    : 'rounded-[var(--segmented-controls-radius-selected,6px)]';

  const surfaceBg = bgDark
    ? 'bg-[var(--segmented-controls-surface-alt,#2c363c)]'
    : 'bg-[var(--segmented-controls-surface-default,#dedede)]';

  const selectedBg = bgDark
    ? 'bg-[var(--segmented-controls-fill-selected-alt,#bed62f)]'
    : 'bg-[var(--segmented-controls-fill-selected,white)]';

  const selectedText = 'text-[var(--segmented-controls-text-selected,#262c2f)]';

  const activeText = bgDark
    ? 'text-[var(--segmented-controls-text-alt,white)]'
    : 'text-[var(--segmented-controls-text-active,#262c2f)]';

  const disabledText = bgDark
    ? 'text-[var(--segmented-controls-text-disabled-alt,#5c6063)]'
    : 'text-[var(--segmented-controls-text-disabled,#929597)]';

  return (
    <div
      role="tablist"
      className={[
        'relative inline-flex items-center',
        isRounded ? '' : 'p-[3px]',
        outerRadius,
        className,
      ].join(' ')}
    >
      {/* Background surface */}
      <div
        aria-hidden="true"
        className={[
          'absolute inset-0 pointer-events-none',
          outerRadius,
          surfaceBg,
        ].join(' ')}
      />

      {/* Inner shadow */}
      <div
        aria-hidden="true"
        className={[
          'absolute inset-0 pointer-events-none',
          outerRadius,
          'shadow-[inset_0px_1px_3px_0px_rgba(0,0,0,0.15)]',
        ].join(' ')}
      />

      {items.map((item) => {
        const isSelected = item.value === value;
        const isDisabled = item.disabled === true;

        let textClass: string;
        let bgClass: string;

        if (isSelected) {
          textClass = selectedText;
          bgClass = selectedBg;
        } else if (isDisabled) {
          textClass = disabledText;
          bgClass = 'bg-transparent';
        } else {
          textClass = activeText;
          bgClass = 'bg-transparent';
        }

        return (
          <button
            key={item.value}
            type="button"
            role="tab"
            aria-selected={isSelected}
            disabled={isDisabled}
            onClick={() => {
              if (!isDisabled) onChange(item.value);
            }}
            className={[
              'relative z-10 flex items-center justify-center gap-1',
              'h-[30px] px-2 py-2',
              'font-[Roboto,sans-serif] text-sm font-medium text-center whitespace-nowrap',
              'transition-colors',
              innerRadius,
              bgClass,
              textClass,
              isDisabled ? 'cursor-not-allowed' : 'cursor-pointer',
            ].join(' ')}
          >
            {item.icon && (
              <span className="shrink-0 w-4 h-4 flex items-center justify-center">
                {item.icon}
              </span>
            )}
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default SegmentedControls;
