'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

interface VideoPlayerProps {
  /** Path to the video file (inside /public). Leave empty to show poster-only placeholder. */
  src?: string;
  /** Path to the poster/thumbnail image (inside /public). */
  poster: string;
  /** Descriptive caption shown at the bottom of the poster overlay. */
  caption: string;
  /** Accessible label for the play button. */
  label: string;
}

/**
 * VideoPlayer
 * ----------
 * Shows a high-quality poster image with a CSS-only play button.
 * On click, plays the native <video> element and hides the poster overlay.
 * If no `src` is provided the component acts as a decorative placeholder
 * (poster + disabled play button) — swap in real video URLs when available.
 */
export default function VideoPlayer({ src, poster, caption, label }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function handlePlay() {
    if (!src) return; // placeholder mode — no video yet
    setPlaying(true);
    // Small delay to let the CSS transition begin before play starts
    setTimeout(() => {
      videoRef.current?.play();
    }, 120);
  }

  return (
    /* The .is-playing class triggers CSS to hide poster + overlay */
    <div
      className={`video-player-wrapper${playing ? ' is-playing' : ''}`}
      onClick={!playing ? handlePlay : undefined}
      role="button"
      tabIndex={0}
      aria-label={label}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handlePlay(); }}
    >
      {/* ── Native video element (always rendered for SEO / a11y) ── */}
      {src && (
        <video
          ref={videoRef}
          src={src}
          controls={playing}
          playsInline
          preload="none"
        />
      )}

      {/* ── Poster image ── */}
      <Image
        src={poster}
        alt={caption}
        fill
        className="video-poster object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* ── Gradient overlay ── */}
      <div className="video-overlay" aria-hidden="true" />

      {/* ── Play button ── */}
      <div className="play-btn" aria-hidden="true">
        <div className="play-btn-circle" />
      </div>

      {/* ── Caption ── */}
      <p className="video-caption">{caption}</p>
    </div>
  );
}
