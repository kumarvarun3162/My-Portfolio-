export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center">

      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      <form className="max-w-md mx-auto flex flex-col gap-4">

        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded bg-gray-800"
        />

        <textarea
          placeholder="Your Message"
          className="p-3 rounded bg-gray-800"
        />

        <button className="bg-[var(--color-primary)] text-black py-2 rounded glow">
          Send Message
        </button>

      </form>

    </section>
  );
}