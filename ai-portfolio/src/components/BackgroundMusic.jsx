import { useEffect, useRef } from "react";
import music from "../assets/music.mp3";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    // Create audio ONLY once
    audioRef.current = new Audio(music);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    const startAudio = () => {
      if (!hasStartedRef.current) {
        audioRef.current
          .play()
          .then(() => {
            hasStartedRef.current = true;
          })
          .catch(() => {});
      }
    };

    // Listen to multiple interactions (more reliable)
    window.addEventListener("click", startAudio);
    window.addEventListener("touchstart", startAudio);

    return () => {
      window.removeEventListener("click", startAudio);
      window.removeEventListener("touchstart", startAudio);
      audioRef.current.pause();
    };
  }, []);

  return null;
}