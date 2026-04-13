import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ttx8xs8", // ✅ your service ID
        "template_zc8cp0k", // ✅ your template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "Xx2nfUJCMFh9B9srS" // ✅ your public key
      )
      .then(
        () => {
          setLoading(false);
          setStatus("Message Sent 🚀");
          setForm({ name: "", email: "", message: "" });

          setTimeout(() => setStatus(""), 3000);
        },
        () => {
          setLoading(false);
          setStatus("Something went wrong ❌");
        }
      );
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-16 py-20 text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"
      />

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          Contact Me
        </h2>

        <p className="text-gray-400 text-center mb-8">
          Send a message — I’ll get back to you soon 🚀
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 outline-none"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message..."
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 outline-none"
          />

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            disabled={loading}
            className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>

        {/* STATUS MESSAGE */}
        {status && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-4 text-sm text-gray-300"
          >
            {status}
          </motion.p>
        )}

        {/* DIRECT CONTACT LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center text-sm text-gray-400"
        >
          <p>Or reach me directly:</p>

          <div className="mt-3 flex justify-center gap-6 text-white/70">

            <a
              href="mailto:kumarvarun3162@gmail.com"
              className="hover:text-white hover:scale-110 transition duration-300"
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/varun-kumar-bb37a6244/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white hover:scale-110 transition duration-300"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/kumarvarun3162"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white hover:scale-110 transition duration-300"
            >
              GitHub
            </a>

          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}