import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full px-5 md:px-10 py-4 md:py-6 z-50">
      
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl md:text-3xl font-bold">
          Applied AI Developer
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm">
          <Link to="/about" className="hover:text-white transition">About</Link>
          <Link to="/skills" className="hover:text-white transition">Skills</Link>
          <Link to="/experience" className="hover:text-white transition">Experience</Link>
          <Link to="/projects" className="hover:text-white transition">Projects</Link>
          <Link to="/contact" className="hover:text-white transition">Contact</Link>
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
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link>
            <Link to="/experience" onClick={() => setIsOpen(false)}>Experience</Link>
            <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}