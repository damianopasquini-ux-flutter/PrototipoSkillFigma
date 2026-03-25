import React, { useState, useRef, useEffect } from "react";

/* ── SearchIcon ── */
function SearchIcon({ active = false }: { active?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="shrink-0"
    >
      <circle
        cx="9"
        cy="9"
        r="5.5"
        stroke={active ? "#262c2f" : "#929597"}
        strokeWidth="1.5"
      />
      <line
        x1="13.5"
        y1="13.5"
        x2="16.5"
        y2="16.5"
        stroke={active ? "#262c2f" : "#929597"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── CloseIcon ── */
function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 cursor-pointer">
      <path
        d="M6 6l8 8M14 6l-8 8"
        stroke="#929597"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── Searchbar ── */
type SearchbarProps = {
  className?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onClear?: () => void;
};

export function Searchbar({
  className,
  placeholder = "Cerca eventi, squadre e giocatori",
  value: controlledValue,
  defaultValue = "",
  onChange,
  onFocus,
  onBlur,
  onClear,
}: SearchbarProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const isActive = focused || value.length > 0;
  const hasText = value.length > 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    if (controlledValue === undefined) setInternalValue(v);
    onChange?.(v);
  };

  const handleClear = () => {
    if (controlledValue === undefined) setInternalValue("");
    onClear?.();
    onChange?.("");
    inputRef.current?.focus();
  };

  const handleFocus = () => {
    setFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setFocused(false);
    onBlur?.();
  };

  return (
    <div className={className || "flex items-start w-[328px]"}>
      <div
        className={`flex flex-1 items-center h-10 px-2 rounded-lg ${
          isActive
            ? "bg-white gap-2 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.1)]"
            : "bg-[#e9eaea]"
        }`}
      >
        <div className="flex flex-1 items-center gap-2 min-w-0">
          <SearchIcon active={hasText} />

          {isActive ? (
            <div className="flex flex-1 items-center min-w-0">
              <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={focused && !hasText ? placeholder : ""}
                className="flex-1 min-w-0 bg-transparent border-0 outline-none p-0 font-normal font-['Roboto',sans-serif] text-sm leading-[18px] text-[#262c2f] placeholder:text-[#929597]"
                autoFocus={focused}
              />
            </div>
          ) : (
            <button
              className="flex flex-1 items-center min-w-0 bg-transparent border-0 p-0 cursor-text text-left"
              onClick={() => {
                setFocused(true);
                setTimeout(() => inputRef.current?.focus(), 0);
              }}
              type="button"
            >
              <span className="font-normal font-['Roboto',sans-serif] text-sm leading-[18px] text-[#929597]">
                {placeholder}
              </span>
            </button>
          )}

          {hasText && (
            <button
              className="w-5 h-5 flex items-center justify-center bg-transparent border-0 p-0 cursor-pointer shrink-0"
              onClick={handleClear}
              type="button"
            >
              <CloseIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
