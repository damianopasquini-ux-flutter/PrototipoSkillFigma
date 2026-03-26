/**
 * Button — Sisal Betting App DS
 *
 * 1:1 from Figma DS node 5245:3802
 * Extracted via get_design_context(disableCodeConnect: true)
 * Variables match Figma collection "Button" with setVariableCodeSyntax('WEB', ...)
 *
 * Every CSS custom property here is the EXACT same token name
 * set in Figma via setVariableCodeSyntax. Dev Mode shows these same vars.
 */

import React from "react";

export type ButtonType =
  | "default"
  | "checkout"
  | "delete"
  | "alt"
  | "secondary"
  | "ghost"
  | "floating"
  | "cashout"
  | "settings";

export type ButtonStatus = "enabled" | "disabled";

export interface ButtonProps {
  type?: ButtonType;
  status?: ButtonStatus;
  label?: string;
  secondLabel?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

/*
 * Token map — EXACT values from Figma setVariableCodeSyntax('WEB', ...)
 * Structure: fill (bg), text (color), border (stroke), fontStyle, fontSize, height, paddingH
 */
const variants: Record<ButtonType, {
  fill: string;
  fillDisabled: string;
  text: string;
  textDisabled: string;
  border: string | null;
  fontWeight: 700 | 500;
  fontSize: string;
  height: number;
  paddingH: string;
  paddingV: number;
}> = {
  default: {
    fill: "var(--appereance-button-primary-fill-default, #00653b)",
    fillDisabled: "var(--appereance-button-primary-fill-default-disabled, rgba(0,101,59,0.5))",
    text: "var(--appereance-button-primary-text-default, #ffffff)",
    textDisabled: "var(--appereance-button-primary-text-default-disabled, #ffffff)",
    border: null,
    fontWeight: 700,
    fontSize: "var(--font-size-sm, 14px)",
    height: 36,
    paddingH: "var(--button-spacing-default, 24px)",
    paddingV: 8,
  },
  checkout: {
    fill: "var(--appereance-button-primary-fill-checkout, #ff8e0d)",
    fillDisabled: "var(--appereance-button-primary-fill-checkout-disabled, rgba(255,142,13,0.5))",
    text: "var(--appereance-button-primary-text-checkout, #262c2f)",
    textDisabled: "var(--appereance-button-primary-text-checkout, #262c2f)",
    border: null,
    fontWeight: 700,
    fontSize: "var(--font-size-sm, 14px)",
    height: 36,
    paddingH: "var(--button-spacing-default, 24px)",
    paddingV: 8,
  },
  delete: {
    fill: "var(--appereance-button-primary-fill-delete, #e73947)",
    fillDisabled: "var(--appereance-button-primary-fill-delete-disabled, rgba(231,57,71,0.5))",
    text: "var(--appereance-button-primary-text-delete, #ffffff)",
    textDisabled: "var(--appereance-button-primary-text-delete, #ffffff)",
    border: null,
    fontWeight: 700,
    fontSize: "var(--font-size-sm, 14px)",
    height: 36,
    paddingH: "var(--button-spacing-default, 24px)",
    paddingV: 8,
  },
  alt: {
    fill: "var(--button-primary-fill-alt, #bed62f)",
    fillDisabled: "var(--button-primary-fill-alt-disabled, rgba(190,214,47,0.5))",
    text: "var(--button-primary-text-alt, #262c2f)",
    textDisabled: "var(--button-primary-text-alt, #262c2f)",
    border: null,
    fontWeight: 700,
    fontSize: "var(--font-size-sm, 14px)",
    height: 36,
    paddingH: "var(--button-spacing-default, 24px)",
    paddingV: 8,
  },
  secondary: {
    fill: "var(--appereance-button-secondary-fill-default, transparent)",
    fillDisabled: "var(--appereance-button-secondary-fill-default, transparent)",
    text: "var(--appereance-button-secondary-text-default, #262c2f)",
    textDisabled: "var(--appereance-button-secondary-text-default, #262c2f)",
    border: "var(--primary-border-secondary, #262c2f)",
    fontWeight: 700,
    fontSize: "var(--font-size-sm, 14px)",
    height: 36,
    paddingH: "var(--button-spacing-default, 24px)",
    paddingV: 8,
  },
  ghost: {
    fill: "var(--appereance-button-secondary-fill-default, transparent)",
    fillDisabled: "var(--appereance-button-secondary-fill-default, transparent)",
    text: "var(--appereance-button-secondary-text-default, #262c2f)",
    textDisabled: "var(--appereance-button-secondary-text-default, #262c2f)",
    border: null,
    fontWeight: 700,
    fontSize: "var(--font-size-sm, 14px)",
    height: 40,
    paddingH: "var(--button-spacing-default, 24px)",
    paddingV: 8,
  },
  floating: {
    fill: "var(--button-primary-fill-floating, #00653b)",
    fillDisabled: "var(--button-primary-fill-floating, #00653b)",
    text: "var(--button-primary-text-floating, #ffffff)",
    textDisabled: "var(--button-primary-text-floating, #ffffff)",
    border: null,
    fontWeight: 500,
    fontSize: "var(--font-size-sm, 14px)",
    height: 36,
    paddingH: "var(--button-spacing-default, 24px)",
    paddingV: 8,
  },
  cashout: {
    fill: "var(--appereance-button-secondary-fill-cashout, #ffffff)",
    fillDisabled: "var(--appereance-button-secondary-fill-cashout, #ffffff)",
    text: "var(--appereance-button-secondary-text-cashout, #722dad)",
    textDisabled: "var(--appereance-button-secondary-text-cashout, #722dad)",
    border: "var(--primary-border-cashout, #722dad)",
    fontWeight: 700,
    fontSize: "var(--font-size-sm, 14px)",
    height: 36,
    paddingH: "var(--button-spacing-default, 24px)",
    paddingV: 0,
  },
  settings: {
    fill: "var(--appereance-button-secondary-fill-default, transparent)",
    fillDisabled: "var(--appereance-button-secondary-fill-default, transparent)",
    text: "var(--appereance-font-color-active, #262c2f)",
    textDisabled: "var(--appereance-font-color-active, #262c2f)",
    border: "var(--appereance-border-default-bg-dark-3, #5c6063)",
    fontWeight: 500,
    fontSize: "var(--font-size-xs, 12px)",
    height: 30,
    paddingH: "var(--layout-spacing-4, 4px)",
    paddingV: 0,
  },
};

export function Button({
  type = "default",
  status = "enabled",
  label = "Button",
  secondLabel,
  iconLeft,
  iconRight,
  onClick,
  className,
}: ButtonProps) {
  const v = variants[type];
  const disabled = status === "disabled";

  const needsOpacityDisabled = disabled && ["secondary", "ghost", "cashout", "settings"].includes(type);

  const style: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--layout-spacing-8, 8px)",
    minHeight: v.height,
    maxHeight: 40,
    paddingLeft: v.paddingH,
    paddingRight: v.paddingH,
    paddingTop: v.paddingV,
    paddingBottom: v.paddingV,
    borderRadius: "var(--button-radius-default, 100px)",
    backgroundColor: disabled ? v.fillDisabled : v.fill,
    color: disabled ? v.textDisabled : v.text,
    border: v.border ? `1px solid ${v.border}` : "none",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: v.fontWeight,
    fontSize: v.fontSize,
    lineHeight: "normal",
    whiteSpace: "nowrap",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: needsOpacityDisabled ? 0.4 : 1,
    boxSizing: "border-box",
  };

  return (
    <button
      className={className}
      style={style}
      disabled={disabled}
      onClick={onClick}
    >
      {iconLeft && (
        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 24, height: 24, flexShrink: 0 }}>
          {iconLeft}
        </span>
      )}
      <span style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        {secondLabel && (
          <span style={{ fontWeight: 400, fontSize: "var(--font-size-xs, 12px)", lineHeight: "var(--font-line-height-xs, 14px)" }}>
            {secondLabel}
          </span>
        )}
        <span>{label}</span>
      </span>
      {iconRight && (
        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 24, height: 24, flexShrink: 0 }}>
          {iconRight}
        </span>
      )}
    </button>
  );
}

export default Button;
