import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">

      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="glass p-6 rounded-xl">

            <h3 className="text-xl font-semibold mb-2">
              {p.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {p.tech.map((tech, idx) => (
                <span key={idx} className="bg-gray-800 px-3 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}