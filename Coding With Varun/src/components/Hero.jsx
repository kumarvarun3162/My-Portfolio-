import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const texts = [
  "Hey, I'm Varun 👋",
  "Turning ideas into intelligent systems",
  "Let's create the future together 🚀",
  "I love bike riding 🏍️",
  "Coffee fuels my code ☕",
  "Solving real problems with AI",
  "From data to decisions 📊",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const durations = [3500, 2500, 2500, 2500, 2500, 2500, 2500];

    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, durations[index]);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <section className="min-h-screen flex items-center justify-center px-5 md:px-10 relative overflow-hidden">
      
      {/* Background blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 2 }}
        className="absolute w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-white rounded-full blur-3xl"
      />

      <div className="text-center z-10">
        
        {/* Animated Text */}
        <div className="h-[100px] md:h-[90px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={texts[index]}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="text-[8vw] md:text-[5vw] font-bold tracking-tight leading-tight"
            >
              {texts[index]}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.75, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-4 md:mt-6 text-gray-400 text-sm md:text-lg px-2"
        >
          Building intelligent products that blend AI, creativity, and real-world impact
        </motion.p>
      </div>
    </section>
  );
}