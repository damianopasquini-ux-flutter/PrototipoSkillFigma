import React from "react";

type SkeletonProps = {
  className?: string;
  type?:
    | "Testo 1"
    | "Testo 2"
    | "Bottone quota"
    | "Immagine"
    | "Chips"
    | "Icon"
    | "Primary Button";
  size?: "Default" | "Compatta" | "Estesa";
};

const basePulse = "animate-pulse bg-[#e9eaea]";

export function Skeleton({ className, type = "Testo 1", size = "Default" }: SkeletonProps) {
  if (type === "Testo 1") {
    return (
      <div className={className || `${basePulse} h-2 w-16 rounded-full overflow-clip`} />
    );
  }

  if (type === "Testo 2") {
    return (
      <div className={className || "flex flex-col items-center justify-center py-2 rounded-lg overflow-clip"}>
        <div className={`${basePulse} h-4 w-[54px] rounded-full`} />
      </div>
    );
  }

  if (type === "Bottone quota") {
    if (size === "Compatta") {
      return (
        <div className={className || `${basePulse} w-[52px] h-[52px] rounded-lg overflow-clip`} />
      );
    }
    return (
      <div className={className || `${basePulse} w-[98px] h-9 rounded-lg overflow-clip`} />
    );
  }

  if (type === "Immagine") {
    return (
      <div className={className || `${basePulse} w-[102px] h-[102px] rounded-lg overflow-clip`} />
    );
  }

  if (type === "Chips") {
    return (
      <div className={className || `${basePulse} w-[70px] h-8 rounded-lg overflow-clip`} />
    );
  }

  if (type === "Icon") {
    return (
      <div className={className || `${basePulse} w-9 h-9 rounded-full overflow-clip`} />
    );
  }

  if (type === "Primary Button") {
    return (
      <div className={className || "flex flex-col items-start h-9 w-[131px] rounded-full overflow-clip"}>
        <div className={`${basePulse} flex-1 w-full rounded-full`} />
      </div>
    );
  }

  return <div className={className || `${basePulse} h-2 w-16 rounded-full`} />;
}

/* ── Skeleton composition examples ── */

export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={className || "flex flex-col gap-3 p-4 w-[328px] rounded-lg border border-[#e9eaea]"}>
      <div className="flex items-center gap-3">
        <Skeleton type="Icon" />
        <div className="flex flex-col gap-1.5 flex-1">
          <Skeleton type="Testo 1" />
          <Skeleton type="Testo 1" className="animate-pulse bg-[#e9eaea] h-2 w-24 rounded-full overflow-clip" />
        </div>
      </div>
      <Skeleton type="Testo 2" />
      <div className="flex gap-2">
        <Skeleton type="Bottone quota" size="Estesa" />
        <Skeleton type="Bottone quota" size="Estesa" />
        <Skeleton type="Bottone quota" size="Estesa" />
      </div>
    </div>
  );
}

export function SkeletonBanner({ className, size = "Hero" }: { className?: string; size?: "Hero" | "Medium" | "Small" }) {
  const sizeMap = {
    Hero: "w-[328px] h-[267px]",
    Medium: "w-[328px] h-[167px]",
    Small: "w-[328px] h-[120px]",
  };

  return (
    <div className={className || `${basePulse} ${sizeMap[size]} rounded-2xl overflow-clip`} />
  );
}

export default Skeleton;
