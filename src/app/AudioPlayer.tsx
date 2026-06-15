"use client";

import { useEffect, useRef, useState } from "react";

const DEFAULT_VOLUME = 0.2; // 20%
const FADE_MS = 3000;       // 3-second fade-in

export default function AudioPlayer() {
  const audioRef  = useRef<HTMLAudioElement | null>(null);
  const fadeRef   = useRef<ReturnType<typeof setInterval> | null>(null);
  const startedRef = useRef(false);

  // volume: what the slider shows (0–1)
  // isMuted: toggled by the speaker button
  // prevVolume: remembers last non-zero volume for unmute restore
  const [volume,     setVolume]     = useState(DEFAULT_VOLUME);
  const [isMuted,    setIsMuted]    = useState(false);
  const [isPlaying,  setIsPlaying]  = useState(false);
  const prevVolumeRef = useRef(DEFAULT_VOLUME);

  // ── Helpers ─────────────────────────────────────────────────────────────
  const stopFade = () => {
    if (fadeRef.current !== null) {
      clearInterval(fadeRef.current);
      fadeRef.current = null;
    }
  };

  /** Apply effective volume to the audio element (no audio.muted used) */
  const applyVolume = (targetVol: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = Math.max(0, Math.min(1, targetVol));
  };

  /** Fade audio.volume from 0 → target over FADE_MS */
  const fadeIn = (targetVol: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    stopFade();
    audio.volume = 0;
    if (targetVol <= 0) return;
    const steps    = 60;
    const stepSize = targetVol / steps;
    const delay    = FADE_MS / steps;
    let cur = 0;
    fadeRef.current = setInterval(() => {
      cur += stepSize;
      if (cur >= targetVol) {
        audio.volume = targetVol;
        stopFade();
      } else {
        audio.volume = cur;
      }
    }, delay);
  };

  // ── Start audio on first user interaction ──────────────────────────────
  useEffect(() => {
    const audio = new Audio("/Saltwater Stethoscope.mp3");
    audio.loop   = true;
    audio.volume = 0;
    audioRef.current = audio;

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      // Read current state via refs to avoid stale closure
      audio.play()
        .then(() => {
          setIsPlaying(true);
          // Fade to the default volume (mute state is not active on start)
          fadeIn(DEFAULT_VOLUME);
        })
        .catch(() => {
          startedRef.current = false; // allow retry
        });
    };

    const events = ["click", "keydown", "touchstart", "scroll"] as const;
    events.forEach((e) =>
      window.addEventListener(e, start, { once: true, passive: true })
    );

    return () => {
      events.forEach((e) => window.removeEventListener(e, start));
      stopFade();
      audio.pause();
      audio.src = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Slider handler ─────────────────────────────────────────────────────
  const handleSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setVolume(v);

    if (v === 0) {
      // Dragged to zero → mute (keep prevVolume so button can restore)
      setIsMuted(true);
      applyVolume(0);
    } else {
      // Any non-zero value → unmute and apply directly
      prevVolumeRef.current = v;
      setIsMuted(false);
      applyVolume(v);
    }
  };

  // ── Mute button handler ────────────────────────────────────────────────
  const handleMuteToggle = () => {
    if (isMuted) {
      // Unmute: restore last non-zero volume (fallback to DEFAULT)
      const restore = prevVolumeRef.current > 0
        ? prevVolumeRef.current
        : DEFAULT_VOLUME;
      setVolume(restore);
      setIsMuted(false);
      applyVolume(restore);
    } else {
      // Mute: save current volume and silence
      if (volume > 0) prevVolumeRef.current = volume;
      setIsMuted(true);
      applyVolume(0);
    }
  };

  // ── Derived display state ──────────────────────────────────────────────
  const effectiveVol  = isMuted ? 0 : volume;   // what the slider shows
  const isSilent      = effectiveVol === 0;
  const showNote      = isPlaying && !isSilent;

  return (
    <div className="audio-player-bar" aria-label="Controle de música ambiente">

      {/* Speaker / Mute button */}
      <button
        onClick={handleMuteToggle}
        className="audio-mute-btn"
        aria-label={isMuted ? "Ativar som" : "Silenciar música"}
        title={isMuted ? "Ativar som" : "Silenciar música"}
      >
        {isSilent ? (
          /* Muted */
          <svg viewBox="0 0 24 24" fill="currentColor" className="audio-icon">
            <path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 003.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
          </svg>
        ) : effectiveVol < 0.5 ? (
          /* Low */
          <svg viewBox="0 0 24 24" fill="currentColor" className="audio-icon">
            <path d="M18.5 12A4.5 4.5 0 0016 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5zm7-.17v6.34L9.83 13H7v-2h2.83L12 8.83z"/>
          </svg>
        ) : (
          /* Full */
          <svg viewBox="0 0 24 24" fill="currentColor" className="audio-icon">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
        )}
      </button>

      {/* Volume slider */}
      <div className="audio-slider-wrap">
        <input
          id="volume-slider"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={effectiveVol}
          onChange={handleSlider}
          className="audio-slider"
          aria-label="Volume da música"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(effectiveVol * 100)}
        />
      </div>

      {/* Animated music note */}
      {showNote && (
        <span className="audio-note-anim" aria-hidden="true">♪</span>
      )}
    </div>
  );
}
