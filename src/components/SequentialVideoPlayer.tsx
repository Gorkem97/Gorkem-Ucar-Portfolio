import React, { useState, useRef, useEffect, useCallback } from 'react';
import { getAssetUrl } from '../utils/assets';

interface SequentialVideoPlayerProps {
  videos?: string[];
  fallbackImage: string;
  alt: string;
  className?: string;
}

export const SequentialVideoPlayer: React.FC<SequentialVideoPlayerProps> = ({
  videos,
  fallbackImage,
  alt,
  className = '',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [failedIndices, setFailedIndices] = useState<Set<number>>(new Set());
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const validVideos = videos || [];
  const hasVideos = validVideos.length > 0;

  // Reset indices on videos prop change
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, validVideos.length);
    setActiveIndex(0);
    setFailedIndices(new Set());
  }, [videos, validVideos.length]);

  // Ensure active video is played reliably
  const playActiveVideo = useCallback((index: number) => {
    const el = videoRefs.current[index];
    if (el) {
      el.defaultMuted = true;
      el.muted = true;
      el.playsInline = true;
      const playPromise = el.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay policy fallback
        });
      }
    }
  }, []);

  useEffect(() => {
    if (!hasVideos) return;
    playActiveVideo(activeIndex);
  }, [activeIndex, hasVideos, playActiveVideo]);

  // When a video finishes, immediately play the next one and crossfade
  const handleEnded = (index: number) => {
    if (validVideos.length <= 1) {
      // Loop single video seamlessly
      const el = videoRefs.current[0];
      if (el) {
        el.currentTime = 0;
        el.play().catch(() => {});
      }
      return;
    }

    const nextIndex = (index + 1) % validVideos.length;
    const nextVideoEl = videoRefs.current[nextIndex];
    if (nextVideoEl) {
      nextVideoEl.currentTime = 0;
      nextVideoEl.defaultMuted = true;
      nextVideoEl.muted = true;
      nextVideoEl.playsInline = true;
      nextVideoEl.play().catch(() => {});
    }
    setActiveIndex(nextIndex);
  };

  const handleError = (index: number) => {
    setFailedIndices((prev) => {
      const updated = new Set(prev);
      updated.add(index);
      return updated;
    });
  };

  // If no videos provided or all video files failed, render fallback image
  if (!hasVideos || failedIndices.size === validVideos.length) {
    return (
      <img
        src={getAssetUrl(fallbackImage)}
        alt={alt}
        loading="lazy"
        className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${className}`}
      />
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#14181F]">
      {validVideos.map((videoSrc, idx) => {
        const isActive = idx === activeIndex;
        return (
          <video
            key={videoSrc}
            ref={(el) => {
              videoRefs.current[idx] = el;
            }}
            src={getAssetUrl(videoSrc)}
            autoPlay={idx === 0}
            muted
            playsInline
            loop={validVideos.length === 1}
            preload="auto"
            onEnded={() => handleEnded(idx)}
            onError={() => handleError(idx)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
            } ${className}`}
          />
        );
      })}

      {/* Multiple clip sequence indicator badge */}
      {validVideos.length > 1 && (
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-20 bg-[#1E232A]/75 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
          <div className="w-1.5 h-1.5 rounded-full bg-[#38D39F] animate-pulse" />
          <span className="text-[10px] font-mono font-semibold text-white/90">
            {activeIndex + 1}/{validVideos.length}
          </span>
        </div>
      )}
    </div>
  );
};

