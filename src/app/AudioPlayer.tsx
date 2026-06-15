"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const FADE_DURATION_MS = 3000; // 3-second fade-in
const DEFAULT_VOLUME = 0.2;    // 20%

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRef = useRef<number | null>(null);
  const [volume, setVolume] = useState(DEFAULT_VOLUME);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  // Track whether user has ever interacted (needed for autoplay policy)
  const startedRef = useRef(false);

  // Fade-in helper: ramps audio.volume from 0 → targetVol over FADE_DURATION_MS
  const fadeIn = useCallback((audio: HTMLAudioElement, targetVol: number) => {
    audio.volume = 0;
    const steps = 60;
    const interval = FADE_DURATION_MS / steps;
    const step = targetVol / steps;
    let current = 0;

    if (fadeRef.current) clearInterval(fadeRef.current);

    fadeRef.current = window.setInterval(() => {
      current += step;
      if (current >= targetVol) {
        audio.volume = targetVol;
        if (fadeRef.current) clearInterval(fadeRef.current);
        fadeRef.current = null;
      } else {
        audio.volume = current;
      }
    }, interval);
  }, []);

  // Start playback on first user interaction (satisfies browser autoplay policy)
  const startAudio = useCallback(() => {
    if (startedRef.current) return;
    const audio = audioRef.current;
    if (!audio) return;

    startedRef.current = true;
    audio.volume = 0;
    audio.play()
      .then(() => {
        setIsPlaying(true);
        fadeIn(audio, isMuted ? 0 : volume);
      })
      .catch(() => {
        // Autoplay blocked — reset so we can try again
        startedRef.current = false;
      });
  }, [fadeIn, isMuted, volume]);

  useEffect(() => {
    const audio = new Audio("/Saltwater Stethoscope.mp3");
    audio.loop = true;
    audio.volume = 0;
    audioRef.current = audio;

    // Listen for first meaningful interaction
    const events = ["click", "keydown", "touchstart", "scroll"];
    const handler = () => startAudio();
    events.forEach((e) => window.addEventListener(e, handler, { once: true, passive: true }));

    return () => {
      events.forEach((e) => window.removeEventListener(e, handler));
      if (fadeRef.current) clearInterval(fadeRef.current);
      audio.pause();
      audio.src = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync volume changes to the audio element
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!isMuted) {
      audio.volume = volume;
    }
  }, [volume, isMuted]);

  // Sync mute state
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = isMuted;
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (isMuted && v > 0) setIsMuted(false);
  };

  return (
    <div className="audio-player-bar" aria-label="Controle de música ambiente">
      {/* Mute / Unmute button */}
      <button
        onClick={toggleMute}
        className="audio-mute-btn"
        aria-label={isMuted ? "Ativar som" : "Silenciar música"}
        title={isMuted ? "Ativar som" : "Silenciar música"}
      >
        {isMuted || volume === 0 ? (
          // Muted icon
          <svg viewBox="0 0 24 24" fill="currentColor" className="audio-icon">
            <path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 003.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
          </svg>
        ) : volume < 0.5 ? (
          // Low volume icon
          <svg viewBox="0 0 24 24" fill="currentColor" className="audio-icon">
            <path d="M18.5 12A4.5 4.5 0 0016 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5zm7-.17v6.34L9.83 13H7v-2h2.83L12 8.83z"/>
          </svg>
        ) : (
          // Full volume icon
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
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          className="audio-slider"
          aria-label="Volume da música"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round((isMuted ? 0 : volume) * 100)}
        />
      </div>

      {/* Animated music note — shows only when playing & not muted */}
      {isPlaying && !isMuted && (
        <span className="audio-note-anim" aria-hidden="true">♪</span>
      )}
    </div>
  );
}
