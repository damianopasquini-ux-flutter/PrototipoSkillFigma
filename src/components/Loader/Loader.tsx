import React from "react";

/* ── iOS-style spinner ── */
export function LoaderIOS({ className, color = "#929597" }: { className?: string; color?: string }) {
  const bars = [
    { rotate: 0, opacity: 1 },
    { rotate: 45, opacity: 0.8 },
    { rotate: 90, opacity: 0.6 },
    { rotate: 135, opacity: 0.4 },
    { rotate: 180, opacity: 0.2 },
    { rotate: 225, opacity: 0.15 },
    { rotate: 270, opacity: 0.1 },
    { rotate: 315, opacity: 0.1 },
  ];

  return (
    <div className={className || "relative w-10 h-10"}>
      <svg viewBox="0 0 40 40" className="w-full h-full animate-spin" style={{ animationDuration: "1s", animationTimingFunction: "steps(8)" }}>
        {bars.map(({ rotate, opacity }, i) => (
          <rect
            key={i}
            x="18"
            y="2"
            width="4"
            height="10"
            rx="2"
            fill={color}
            opacity={opacity}
            transform={`rotate(${rotate} 20 20)`}
          />
        ))}
      </svg>
    </div>
  );
}

/* ── Android-style circular spinner ── */
export function LoaderAndroid({ className, color = "#015f55" }: { className?: string; color?: string }) {
  return (
    <div className={className || "relative w-10 h-10"}>
      <svg viewBox="0 0 40 40" className="w-full h-full animate-spin" style={{ animationDuration: "0.8s" }}>
        <circle
          cx="20"
          cy="20"
          r="16"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="75 25"
        />
      </svg>
    </div>
  );
}

/* ── Combined Loader ── */
type LoaderProps = {
  className?: string;
  variant?: "android" | "ios";
  color?: string;
};

export function Loader({ className, variant = "android", color }: LoaderProps) {
  if (variant === "ios") {
    return <LoaderIOS className={className} color={color} />;
  }
  return <LoaderAndroid className={className} color={color} />;
}

export default Loader;
