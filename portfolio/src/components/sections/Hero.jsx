import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-6xl font-bold"
      >
        Hi, I'm <span className="text-[var(--color-primary)]">Varun Kumar</span>
      </motion.h1>

      <p className="mt-4 text-gray-400 text-lg">
        AI Developer | Full Stack Engineer
      </p>

      <div className="mt-6 flex gap-4">
        <a
          href="#projects"
          className="bg-[var(--color-primary)] text-black px-6 py-2 rounded-lg glow"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="border border-gray-600 px-6 py-2 rounded-lg"
        >
          Contact
        </a>
      </div>

    </section>
  );
}