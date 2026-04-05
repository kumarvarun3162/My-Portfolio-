import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useMagnetic from "../hooks/useMagnetic";

export default function Navbar() {
  const magnetic = useMagnetic();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full px-5 md:px-10 py-4 md:py-6 z-50">
      
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl md:text-3xl font-bold">
          Applied AI Developer
        </h1>

        {/* Desktop Menu */}
        <div
          ref={magnetic.ref}
          onMouseMove={magnetic.handleMouseMove}
          onMouseLeave={magnetic.handleMouseLeave}
          className="hidden md:flex gap-8 text-sm"
        >
          <a href="#">About</a>
          <a href="#">Skills</a>
          <a href="#">Experience</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 flex flex-col gap-4 bg-black/90 backdrop-blur-lg p-6 rounded-xl"
          >
            <a href="#" onClick={() => setIsOpen(false)}>About</a>
            <a href="#" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#" onClick={() => setIsOpen(false)}>Experience</a>
            <a href="#" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#" onClick={() => setIsOpen(false)}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}