import React from "react";

type BulletPointProps = {
  className?: string;
  position?: "First" | "Center" | "Final";
  type?: "Default" | "Error" | "Alert";
};

const dotColors: Record<string, string> = {
  Default: "#929597",
  Error: "#e73947",
  Alert: "#ffbf00",
};

const lineColors: Record<string, string> = {
  Default: "#c9cacb",
  Error: "#c9cacb",
  Alert: "#c9cacb",
};

export function BulletPoint({
  className,
  position = "First",
  type = "Default",
}: BulletPointProps) {
  const dotColor = dotColors[type] || dotColors.Default;
  const lineColor = lineColors[type] || lineColors.Default;
  const dotSize = 8;

  return (
    <div
      className={
        className ||
        `flex flex-col items-center w-2 ${
          position === "Final" ? "h-[13px]" : "h-12"
        }`
      }
    >
      {/* Top line (for Center and Final) */}
      {(position === "Center" || position === "Final") && (
        <div className="w-px h-1 flex-shrink-0" style={{ backgroundColor: lineColor }} />
      )}

      {/* Dot */}
      <svg
        width={dotSize}
        height={dotSize}
        viewBox={`0 0 ${dotSize} ${dotSize}`}
        className="flex-shrink-0"
      >
        <circle
          cx={dotSize / 2}
          cy={dotSize / 2}
          r={dotSize / 2 - 1}
          fill="none"
          stroke={dotColor}
          strokeWidth={1.5}
        />
      </svg>

      {/* Bottom line (for First and Center) */}
      {(position === "First" || position === "Center") && (
        <div className="w-px flex-1" style={{ backgroundColor: lineColor }} />
      )}
    </div>
  );
}

/* ── BulletPointList ── */
type BulletPointListProps = {
  className?: string;
  items: Array<{
    type?: "Default" | "Error" | "Alert";
    content: React.ReactNode;
  }>;
};

export function BulletPointList({ className, items }: BulletPointListProps) {
  return (
    <div className={className || "flex flex-col"}>
      {items.map((item, index) => {
        const position: BulletPointProps["position"] =
          index === 0 ? "First" : index === items.length - 1 ? "Final" : "Center";

        return (
          <div key={index} className="flex gap-2">
            <BulletPoint position={position} type={item.type || "Default"} />
            <div className="flex-1 py-1">{item.content}</div>
          </div>
        );
      })}
    </div>
  );
}

export default BulletPoint;
