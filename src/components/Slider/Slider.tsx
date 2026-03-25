import React, { useState, useCallback } from "react";

/* ── Types ── */
interface SliderProps {
  className?: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  unit?: string;
  onChange?: (value: number) => void;
}

interface FavoriteSliderProps {
  className?: string;
  values?: number[];
  selectedRange?: [number, number];
  onChange?: (range: [number, number]) => void;
}

/* ── SliderThumb ── */
function SliderThumb({ value, label, active }: { value: string; label?: string; active?: boolean }) {
  return (
    <div className="flex flex-col gap-0.5 items-center justify-end pb-[18px]">
      <span
        className={`font-['Roboto',sans-serif] text-sm leading-[18px] text-center whitespace-nowrap ${
          active
            ? "font-medium text-[var(--appereance-font-color-active,#262c2f)]"
            : "font-normal text-[var(--appereance-font-color-alt-2,#929597)]"
        }`}
      >
        {label || value}
      </span>
      <div
        className={`h-8 w-6 rounded-full ${
          active
            ? "bg-[var(--slider-selected,#00653b)] shadow-[0_2px_6px_rgba(0,101,59,0.3)]"
            : "bg-[var(--appereance-slider-default,#dedede)]"
        }`}
      />
    </div>
  );
}

/* ── Default Slider ── */
export function Slider({
  className,
  min = 0,
  max = 100,
  step = 1,
  value: controlledValue,
  unit = "\u20AC",
  onChange,
}: SliderProps) {
  const [internalValue, setInternalValue] = useState(controlledValue ?? Math.round((max - min) * 0.2 + min));
  const currentValue = controlledValue ?? internalValue;
  const percentage = ((currentValue - min) / (max - min)) * 100;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = Number(e.target.value);
      setInternalValue(v);
      onChange?.(v);
    },
    [onChange]
  );

  return (
    <div className={className || "flex flex-col items-start pb-3 pt-[34px] w-[312px] relative font-['Roboto',sans-serif]"}>
      {/* Value label */}
      <div
        className="absolute top-0 flex flex-col items-center gap-1 -translate-x-1/2 pointer-events-none"
        style={{ left: `${percentage}%` }}
      >
        <span className="font-medium text-base leading-[22px] text-[var(--appereance-font-color-active,#262c2f)] text-center whitespace-nowrap">
          {currentValue}{unit}
        </span>
      </div>

      {/* Track */}
      <div className="relative w-full h-2 bg-[var(--appereance-slider-default,#dedede)] rounded-full">
        {/* Filled portion */}
        <div
          className="absolute h-2 bg-[var(--slider-selected,#00653b)] rounded-full top-0 left-0"
          style={{ width: `${percentage}%` }}
        />
        {/* Thumb */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[var(--slider-selected,#00653b)] shadow-[0_2px_6px_rgba(0,101,59,0.3)] border-4 border-white"
          style={{ left: `${percentage}%` }}
        />
      </div>

      {/* Hidden input for accessibility */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={currentValue}
        onChange={handleChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        aria-label="Slider"
      />
    </div>
  );
}

/* ── FavoriteSlider (stepped) ── */
export function FavoriteSlider({
  className,
  values = [1.0, 1.2, 1.4, 1.6, 1.8, 2.0],
  selectedRange = [1.4, 1.6],
  onChange,
}: FavoriteSliderProps) {
  const [range, setRange] = useState(selectedRange);
  const totalSteps = values.length - 1;

  const isSelected = (val: number) => val >= range[0] && val <= range[1];
  const startIdx = values.indexOf(range[0]);
  const endIdx = values.indexOf(range[1]);

  const startPct = startIdx >= 0 ? (startIdx / totalSteps) * 100 : 0;
  const endPct = endIdx >= 0 ? (endIdx / totalSteps) * 100 : 100;

  return (
    <div
      className={
        className ||
        "flex flex-col gap-[52px] items-start pb-3 pt-[30px] relative w-[328px] font-['Roboto',sans-serif]"
      }
    >
      {/* Track */}
      <div className="relative w-full h-2 bg-[var(--appereance-slider-default,#dedede)] rounded-full px-2">
        {/* Selected range */}
        <div
          className="absolute h-2 bg-[var(--slider-selected,#00653b)] rounded-full top-0"
          style={{
            left: `${startPct}%`,
            width: `${endPct - startPct}%`,
          }}
        />
      </div>

      {/* Step markers + labels */}
      <div className="absolute left-0 top-[calc(50%+9px)] -translate-y-1/2 w-full flex items-start justify-between">
        {values.map((val, i) => (
          <SliderThumb
            key={i}
            value={val.toFixed(2)}
            active={isSelected(val)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
