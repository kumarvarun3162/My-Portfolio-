import { motion } from "framer-motion";

const skills = [
  {
    title: "Languages",
    items: [
      { name: "Python", icon: "/icons/python.png" },
      { name: "C++", icon: "/icons/cpp.png" },
      { name: "JavaScript", icon: "/icons/js.png" },
      { name: "R", icon: "/icons/r.png" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Django", icon: "/icons/django.png" },
      { name: "Flask", icon: "/icons/flask.png" },
      { name: "FastAPI", icon: "/icons/fastapi.png" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: "/icons/react.png" },
      { name: "Express", icon: "/icons/express.png" },
      { name: "Tailwind", icon: "/icons/tailwind.png" },
      { name: "HTML", icon: "/icons/html.png" },
      { name: "CSS", icon: "/icons/css.png" },
    ],
  },
  {
    title: "AI / ML",
    items: [
      { name: "TensorFlow", icon: "/icons/tensorflow.png" },
      { name: "PyTorch", icon: "/icons/pytorch.png" },
      { name: "scikit-learn", icon: "/icons/sklearn.png" },
      { name: "Hugging Face", icon: "/icons/huggingface.png" },
      { name: "Keras", icon: "/icons/keras.png" },
      { name: "LangChain", icon: "/icons/langchain.png" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", icon: "/icons/mongodb.png" },
      { name: "PostgreSQL", icon: "/icons/postgresql.png" },
      { name: "MySQL", icon: "/icons/mysql.png" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-16 py-20 md:py-24 text-white">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16"
      >
        Skills & Technologies
      </motion.h2>

      <div className="space-y-12 md:space-y-14">
        {skills.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            
            {/* Category Title */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center md:text-left">
              {group.title}
            </h3>

            {/* Grid */}
            <motion.div
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
            >
              {group.items.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  whileHover={{
                    scale: 1.12,
                    y: -6,
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="group relative flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/30"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 bg-white/10 blur-xl" />

                  {/* Icon */}
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain z-10"
                  />

                  {/* Label */}
                  <p className="text-[10px] sm:text-xs text-gray-300 text-center z-10">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}