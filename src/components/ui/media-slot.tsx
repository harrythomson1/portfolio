"use client";

import { useEffect, useRef } from "react";

type Props = {
  videoSrc?: string;
  imageSrc?: string;
  alt?: string;
  playbackRate?: number;
  className?: string;
};

export function MediaSlot({
  videoSrc,
  imageSrc,
  alt = "",
  playbackRate = 1,
  className = "",
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = playbackRate;
  }, [playbackRate, videoSrc]);

  return (
    <div
      className={`relative overflow-hidden rounded-card bg-surface-soft ring-1 ring-line aspect-video ${className}`}
    >
      {videoSrc ? (
        <video
          ref={videoRef}
          className="h-full w-full object-contain"
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : imageSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={imageSrc} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-widest text-ink-muted">
          drop a video or image here
        </div>
      )}
    </div>
  );
}
