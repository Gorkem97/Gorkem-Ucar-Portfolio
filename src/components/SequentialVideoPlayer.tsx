import React, { useState, useRef, useEffect } from 'react';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const hasVideos = Boolean(videos && videos.length > 0);
  const currentVideo = hasVideos && videos ? videos[currentIndex % videos.length] : null;

  // Reset state if videos change
  useEffect(() => {
    setCurrentIndex(0);
    setHasError(false);
    setIsLoaded(false);
  }, [videos]);

  // Handle switching and autoplaying safely across all browser policies
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl || !currentVideo || hasError) return;

    // Critical for iOS Safari / Chrome autoplay policy
    videoEl.defaultMuted = true;
    videoEl.muted = true;
    videoEl.playsInline = true;

    // Play promise handler
    const playPromise = videoEl.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay may be deferred until visible or allowed
      });
    }
  }, [currentIndex, currentVideo, hasError]);

  // When a video finishes, smoothly go to the next in sequence
  const handleEnded = () => {
    if (videos && videos.length > 1) {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }
  };

  const handleError = () => {
    // If a video fails to load, gracefully show fallback poster/image
    setHasError(true);
  };

  // If no videos or error occurred, render optimized image
  if (!hasVideos || !currentVideo || hasError) {
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
    <div className="relative w-full h-full overflow-hidden bg-[#1E232A]">
      <video
        ref={videoRef}
        key={currentVideo}
        src={getAssetUrl(currentVideo)}
        poster={getAssetUrl(fallbackImage)}
        autoPlay
        muted
        playsInline
        loop={videos && videos.length === 1}
        preload="auto"
        onEnded={handleEnded}
        onError={handleError}
        onLoadedData={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-90'
        } ${className}`}
      />

      {/* Multiple clip sequence indicators */}
      {videos && videos.length > 1 && (
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-10 bg-[#1E232A]/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
          <div className="w-1.5 h-1.5 rounded-full bg-[#38D39F] animate-pulse" />
          <span className="text-[10px] font-mono font-semibold text-white/90">
            {currentIndex + 1}/{videos.length}
          </span>
        </div>
      )}
    </div>
  );
};
