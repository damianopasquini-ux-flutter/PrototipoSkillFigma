import React from "react";

/* ── Types ── */
interface StreamingScreenProps {
  className?: string;
  pause?: boolean;
  thumbnailSrc?: string;
  onPlay?: () => void;
  onExpand?: () => void;
  onMute?: () => void;
}

/* ── PlayIcon ── */
function PlayIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="28" r="28" fill="rgba(255,255,255,0.2)" />
      <path d="M22 17L39 28L22 39V17Z" fill="white" />
    </svg>
  );
}

/* ── VolumeIcon ── */
function VolumeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 9V15H7L12 20V4L7 9H3Z" fill="white" />
      <path d="M14 9.18C14.97 9.97 15.5 11.2 15.5 12.5C15.5 13.8 14.97 15.03 14 15.82" stroke="white" strokeWidth="1.5" />
      <path d="M16.5 6.68C18.45 8.26 19.5 10.33 19.5 12.5C19.5 14.67 18.45 16.74 16.5 18.32" stroke="white" strokeWidth="1.5" />
    </svg>
  );
}

/* ── ExpandIcon ── */
function ExpandIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 19L10 14M5 19V14.5M5 19H9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 5L14 10M19 5V9.5M19 5H14.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── ScreenMirrorIcon ── */
function ScreenMirrorIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="20" height="14" rx="2" stroke="white" strokeWidth="1.5" />
      <path d="M8 21H16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 17V21" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* ── MenuDotsIcon ── */
function MenuDotsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="6" r="1.5" fill="white" />
      <circle cx="12" cy="12" r="1.5" fill="white" />
      <circle cx="12" cy="18" r="1.5" fill="white" />
    </svg>
  );
}

/* ── StreamingScreen ── */
export function StreamingScreen({
  className,
  pause = false,
  thumbnailSrc,
  onPlay,
  onExpand,
  onMute,
}: StreamingScreenProps) {
  return (
    <div
      className={
        className ||
        "h-[212px] overflow-hidden relative w-[360px] font-['Roboto',sans-serif]"
      }
    >
      {/* Thumbnail / Video area */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400" />
      {thumbnailSrc && (
        <img
          alt="Streaming thumbnail"
          className="absolute inset-0 w-full h-full object-cover"
          src={thumbnailSrc}
        />
      )}

      {/* Pause overlay */}
      {pause && (
        <>
          <div className="absolute inset-0 bg-black/50" />

          {/* Play button center */}
          <button
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            onClick={onPlay}
            aria-label="Play"
          >
            <PlayIcon />
          </button>

          {/* Top-left controls */}
          <div className="absolute top-3 left-3 flex gap-4 items-center">
            <button className="cursor-pointer" onClick={onExpand} aria-label="Expand">
              <ExpandIcon />
            </button>
            <button className="cursor-pointer" aria-label="Screen mirror">
              <ScreenMirrorIcon />
            </button>
          </div>

          {/* Top-right volume */}
          <button
            className="absolute top-3 right-3 cursor-pointer"
            onClick={onMute}
            aria-label="Volume"
          >
            <VolumeIcon />
          </button>

          {/* Bottom-right menu */}
          <button
            className="absolute bottom-3 right-3 cursor-pointer"
            aria-label="More options"
          >
            <MenuDotsIcon />
          </button>
        </>
      )}
    </div>
  );
}

export default StreamingScreen;
