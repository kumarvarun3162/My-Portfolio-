import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "AI Code Vulnerability Detector",
    description:
      "AI-powered tool that scans student code to detect vulnerabilities.",
    details:
      "Uses ML + NLP to analyze code, detect flaws, and suggest fixes. Built for real-world deployment.",
    tech: ["Python", "ML", "Security"],
    github: "https://github.com/kumarvarun3162/code-vulnerability-checker",
    live: "#",
    video: "code-vulnerability-demo.mp4",
  },
  {
    id: 2,
    title: "Smart Delivery Location Manager",
    description:
      "Precise delivery tracking using smart location IDs.",
    details:
      "Google Maps based system with real-time tracking and optimized routes.",
    tech: ["React", "Django", "Maps API"],
    github: "#",
    live: "#",
    video: "maps-demo.mp4",
  },
  {
    id: 3,
    title: "Bangalore Civic Complaints Analysis",
    description:
      "Data analysis project uncovering patterns in civic issues across Bangalore.",
    details:
      "Performed data cleaning, preprocessing, and visualization on civic complaint datasets to identify trends in infrastructure issues like roads, garbage, and public services. Built interactive dashboards (Power BI) to provide actionable insights.",
    tech: ["Python", "Pandas", "Data Analysis", "Power BI"],
    github: "https://github.com/kumarvarun3162/bangalore-civic-complaints-analysis",
    live: "#", 
    video: "civic-demo.mp4" 
  },
  {
  id: 4,
  title: "Earthquake Monitoring App",
  description:
    "Real-time earthquake tracking and visualization system.",
  details:
    "Fetches live earthquake data from APIs and visualizes it on interactive maps. Displays magnitude, location, and time of earthquakes with dynamic updates. Helps users monitor seismic activity globally.",
  tech: ["Flask", "API", "Maps", "JavaScript"],
  github: "https://github.com/kumarvarun3162/earthquake-monitoring-app",
  live: "#",
  video: "earthquake-demo.mp4" 
}
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-16 py-20 text-white relative">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-bold text-center mb-16"
      >
        Projects
      </motion.h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`card-${project.id}`}
            onClick={() => setSelected(project)}
            className="cursor-pointer p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <motion.video
              layoutId={`image-${project.id}`}
              src={project.video}
              className="w-full h-40 object-cover rounded-xl mb-4"
              autoPlay
              loop
              muted
              playsInline
            />

            <motion.h3
              layoutId={`title-${project.id}`}
              className="text-xl font-bold mb-2"
            >
              {project.title}
            </motion.h3>

            <motion.p
              layoutId={`desc-${project.id}`}
              className="text-gray-400 text-sm"
            >
              {project.description}
            </motion.p>
          </motion.div>
        ))}
      </div>

      {/* 🔥 FULLSCREEN MODAL */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Background */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />

            {/* Expanded Card */}
            <motion.div
              layoutId={`card-${selected.id}`}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                className="w-full max-w-4xl bg-black/90 border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
              >
                {/* Image */}
                <motion.video
                  layoutId={`image-${selected.id}`}
                  src={selected.video}
                  className="w-full h-64 md:h-80 object-cover"
                  controls
                  autoPlay
                />

                <div className="p-6 md:p-8">
                  {/* Title */}
                  <motion.h3
                    layoutId={`title-${selected.id}`}
                    className="text-2xl md:text-3xl font-bold mb-4"
                  >
                    {selected.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    layoutId={`desc-${selected.id}`}
                    className="text-gray-300 mb-6"
                  >
                    {selected.details}
                  </motion.p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selected.tech.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-white/10 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={selected.github}
                      target="_blank"
                      className="px-5 py-2 bg-white/10 rounded-lg hover:bg-white/20"
                    >
                      GitHub
                    </a>
                    <a
                      href={selected.live}
                      target="_blank"
                      className="px-5 py-2 border border-white/20 rounded-lg hover:bg-white/10"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-6 right-6 text-2xl"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}