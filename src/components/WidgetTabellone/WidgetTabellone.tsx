import React from "react";

/* ------------------------------------------------------------------ */
/*  Widget / Tabellone                                                 */
/*  Figma node 14930:78320 - file 1KwGa2GwNraywm2ukpfGHe              */
/* ------------------------------------------------------------------ */

interface ConnectorProps {
  direction?: "up" | "down";
  className?: string;
}

function Connector({ direction = "up", className }: ConnectorProps) {
  return (
    <div className={`relative w-[24px] h-[49.5px] ${className ?? ""}`}>
      <svg
        width="24"
        height="50"
        viewBox="0 0 24 50"
        fill="none"
        className={`absolute inset-0 ${direction === "down" ? "scale-y-[-1]" : ""}`}
      >
        <path
          d="M0 0.5H12V25H24M0 49.5H12V25"
          stroke="var(--appereance-font-color-alt,#5c6063)"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export interface WidgetTabelloneProps {
  connectors?: { direction: "up" | "down" }[];
}

export function WidgetTabellone({
  connectors = [{ direction: "up" }, { direction: "down" }],
}: WidgetTabelloneProps) {
  return (
    <div className="flex flex-col items-start gap-0">
      {connectors.map((conn, idx) => (
        <Connector key={idx} direction={conn.direction} />
      ))}
    </div>
  );
}

export default WidgetTabellone;
