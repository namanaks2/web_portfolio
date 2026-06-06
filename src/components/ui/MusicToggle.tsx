"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create a simple ambient audio context with a soft oscillator tone
    const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
    if (!AudioContext) return;

    const audioCtx = new AudioContext();
    const gainNode = audioCtx.createGain();
    gainNode.gain.value = 0;
    gainNode.connect(audioCtx.destination);

    // Create soft ambient chord
    const frequencies = [220, 277.18, 329.63, 440];
    const oscillators = frequencies.map((freq) => {
      const osc = audioCtx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = freq;
      const oscGain = audioCtx.createGain();
      oscGain.gain.value = 0.03;
      osc.connect(oscGain);
      oscGain.connect(gainNode);
      osc.start();
      return osc;
    });

    audioRef.current = {
      play: () => {
        audioCtx.resume();
        gainNode.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 1);
      },
      pause: () => {
        gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.5);
      },
    } as unknown as HTMLAudioElement;

    return () => {
      oscillators.forEach((osc) => osc.stop());
      audioCtx.close();
    };
  }, []);

  const toggle = () => {
    if (audioRef.current) {
      if (isPlaying) {
        (audioRef.current as unknown as { pause: () => void }).pause();
      } else {
        (audioRef.current as unknown as { play: () => void }).play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      onClick={toggle}
      className="p-2 rounded-full transition-colors"
      style={{
        backgroundColor: "var(--card-bg)",
        border: "1px solid var(--card-border)",
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isPlaying ? "Mute ambient sound" : "Play ambient sound"}
      title={isPlaying ? "Mute" : "Ambient Sound"}
    >
      {isPlaying ? (
        <Volume2 className="w-4 h-4 text-purple-400" />
      ) : (
        <VolumeX className="w-4 h-4" style={{ color: "var(--text-muted)" }} />
      )}
    </motion.button>
  );
}
