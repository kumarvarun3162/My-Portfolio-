const skills = [
  { name: "React", level: 90 },
  { name: "FastAPI", level: 85 },
  { name: "TensorFlow", level: 80 },
  { name: "Django", level: 85 },
];

export default function Skills() {
  return (
    <section className="py-20 px-6">

      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>

      <div className="max-w-2xl mx-auto space-y-6">
        {skills.map((skill, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="w-full bg-gray-800 h-2 rounded">
              <div
                className="h-2 rounded bg-[var(--color-primary)]"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}