import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import profile from "../assets/profile.jpeg";
import typingSound from "../assets/typing.mp3";

const fullText = `Hey, I'm Varun — an Applied AI Developer passionate about building intelligent systems that solve real-world problems.

I enjoy turning ideas into scalable AI-powered products, blending creativity with technology.

Beyond coding, you'll find me riding bikes, exploring new tech, and constantly learning.`;

export default function About() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(typingSound);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.15;

    return () => {
      audioRef.current.pause();
    };
  }, []);

  useEffect(() => {
    const handleInteraction = () => setHasInteracted(true);
    window.addEventListener("click", handleInteraction, { once: true });

    return () => window.removeEventListener("click", handleInteraction);
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    if (index < fullText.length) {
      if (hasInteracted) {
        audioRef.current.play().catch(() => {});
      }

      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 25);

      return () => clearTimeout(timeout);
    } else {
      audioRef.current.pause();
    }
  }, [index, hasInteracted]);

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-16 pt-28 md:pt-20 pb-16 gap-10 md:gap-12 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-white/10 blur-3xl rounded-full top-10 left-1/2 -translate-x-1/2" />

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, y: 40, x: 0 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <img
          src={profile}
          alt="Varun"
          className="w-40 h-50 sm:w-52 sm:h-65 md:w-70 md:h-110 object-cover rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl border border-white/10"
        />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 40, x: 0 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line px-2 sm:px-4 md:px-0">
          {text}
          <span className="animate-pulse text-white">|</span>
        </p>
      </motion.div>
    </section>
  );
}