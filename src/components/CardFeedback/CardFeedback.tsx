import React, { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Card / Feedback                                                    */
/*  Figma node 15975:116441 - file 1KwGa2GwNraywm2ukpfGHe             */
/* ------------------------------------------------------------------ */

interface CheckboxItemProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

function CheckboxItem({ label, checked = false, onChange }: CheckboxItemProps) {
  return (
    <label className="flex items-center gap-[var(--spacing-4,4px)] h-[24px] cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="w-[24px] h-[24px] accent-[var(--appereance-font-color-active,#262c2f)]"
      />
      <span className="font-['Roboto',sans-serif] font-medium text-[var(--font-size-sm,14px)] leading-[var(--font-line-height-md,18px)] text-[var(--appereance-font-color-active,#262c2f)] whitespace-nowrap">
        {label}
      </span>
    </label>
  );
}

/* ------------------------------------------------------------------ */

interface FeedbackTextAreaProps {
  placeholder?: string;
  maxLength?: number;
  value?: string;
  onChange?: (value: string) => void;
}

function FeedbackTextArea({
  placeholder = "Scrivi qui il tuo feedback",
  maxLength = 500,
  value = "",
  onChange,
}: FeedbackTextAreaProps) {
  const remaining = maxLength - value.length;

  return (
    <div className="bg-[var(--appereance-surface-page-default,#eff0f0)] flex flex-col justify-between h-[110px] w-[304px] rounded-[var(--radius-default,8px)] px-[var(--components-form-searchbar-layout-padding,8px)] py-[11px]">
      <textarea
        className="bg-transparent font-['Roboto',sans-serif] font-normal text-[var(--typography-size-14,14px)] leading-[var(--typography-line-height-18,18px)] text-[var(--appereance-font-color-active,#262c2f)] placeholder:text-[var(--appereance-font-color-alt-2,#929597)] resize-none outline-none flex-1 w-full"
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
      <div className="flex justify-end">
        <span className="font-['Roboto',sans-serif] font-normal text-[var(--typography-size-14,14px)] leading-[var(--typography-line-height-18,18px)] text-[var(--appereance-font-color-alt-2,#929597)] text-right">
          {remaining}/{maxLength}
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export interface CardFeedbackProps {
  title?: string;
  options?: string[];
  showTextArea?: boolean;
  onCancel?: () => void;
  onSubmit?: (selected: string[], feedback: string) => void;
}

export function CardFeedback({
  title = "Aiutami a capire il problema",
  options = [
    "La risposta non e pertinente",
    "La risposta e icompleta/sbagliata",
    "Non ho capito la risposta",
    "Altro",
  ],
  showTextArea = false,
  onCancel,
  onSubmit,
}: CardFeedbackProps) {
  const [selected, setSelected] = useState<Record<number, boolean>>({});
  const [feedbackText, setFeedbackText] = useState("");

  const handleCheckbox = (idx: number, checked: boolean) => {
    setSelected((prev) => ({ ...prev, [idx]: checked }));
  };

  const hasSelection = Object.values(selected).some(Boolean);

  const handleSubmit = () => {
    const selectedLabels = options.filter((_, i) => selected[i]);
    onSubmit?.(selectedLabels, feedbackText);
  };

  return (
    <div className="bg-[var(--appereance-surface-frame-default,white)] flex flex-col gap-3 items-center justify-center p-3 rounded-xl w-[328px]">
      {/* Title */}
      <h3 className="font-['Mulish',sans-serif] font-black text-[var(--font-size-sm,14px)] leading-[var(--font-line-height-md,18px)] text-[var(--appereance-font-color-active,#262c2f)] truncate w-full">
        {title}
      </h3>

      {/* Checkbox options */}
      <div className="flex flex-wrap gap-2 items-start w-full">
        {options.map((option, idx) => (
          <CheckboxItem
            key={idx}
            label={option}
            checked={!!selected[idx]}
            onChange={(checked) => handleCheckbox(idx, checked)}
          />
        ))}
      </div>

      {/* Optional text area */}
      {showTextArea && (
        <FeedbackTextArea
          value={feedbackText}
          onChange={setFeedbackText}
        />
      )}

      {/* Buttons */}
      <div className="flex gap-3 items-start w-full">
        <button
          onClick={onCancel}
          className="flex-1 h-[40px] rounded-full border border-[var(--appereance-font-color-active,#262c2f)] bg-transparent font-['Roboto',sans-serif] font-bold text-[var(--font-size-sm,14px)] text-[var(--appereance-font-color-active,#262c2f)] cursor-pointer"
        >
          Annulla
        </button>
        <button
          onClick={handleSubmit}
          disabled={!hasSelection}
          className="flex-1 h-[40px] rounded-full bg-[var(--color-accent-primary-medium-500,#0b7d3e)] font-['Roboto',sans-serif] font-bold text-[var(--font-size-sm,14px)] text-white border-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Invia feedback
        </button>
      </div>
    </div>
  );
}

export default CardFeedback;
