import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import logo from "../assets/altumx.svg";

export default function Experience() {
  const cardRef = useRef(null);

  // 🎯 Mouse tracking for spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  // 🎴 Tilt effect (only for desktop)
  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return; // disable on mobile

    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 18;
    const rotateY = (x - centerX) / 18;

    cardRef.current.style.transform = `
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg)
    `;
  };

  const resetTilt = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-16 py-24 relative overflow-hidden">
      
      {/* 🌌 Subtle animated background (safe) */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-white/10 blur-3xl rounded-full"
      />

      {/* 🎴 Experience Card */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="relative w-full max-w-3xl p-6 sm:p-8 md:p-10 rounded-3xl 
                   bg-white/5 backdrop-blur-xl border border-white/10 
                   shadow-2xl transition-transform duration-200 overflow-hidden"
        style={{ transformStyle: "preserve-3d" }}
      >
        
        {/* 💡 Cursor spotlight */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-40"
          style={{
            background: `radial-gradient(600px at ${smoothX}px ${smoothY}px, rgba(255,255,255,0.15), transparent 60%)`,
          }}
        />

        {/* Glow border */}
        <div className="absolute inset-0 rounded-3xl bg-white/10 blur-2xl opacity-30" />

        {/* Header */}
        <div className="flex items-center gap-4 mb-6 relative z-10">
          
          {/* 🏢 Logo (full visible) */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="bg-white/10 p-3 rounded-xl flex items-center justify-center"
          >
            <img
              src={logo}
              alt="AltumX"
              className="w-12 h-12 object-contain"
            />
          </motion.div>

          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
              AI Engineer Intern
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm">
              AltumX, Slovakia • Aug 2025 – Feb 2026
            </p>
          </div>
        </div>

        {/* Experience Points */}
        <ul className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed relative z-10">
          {[
            "Built AI-powered Shopify automation workflows reducing manual operations by 60%+.",
            "Developed AI-driven SEO automation boosting organic traffic by 35–50%.",
            "Designed ML/NLP models cutting repetitive analytical tasks by 70%.",
            "Integrated Shopify APIs & analytics improving tracking accuracy by 40%.",
            "Generated AI insights leading to 20%+ conversion uplift.",
          ].map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.15 }}
              whileHover={{ x: 8 }}
              className="flex gap-3"
            >
              <span className="text-white">⚡</span>
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}