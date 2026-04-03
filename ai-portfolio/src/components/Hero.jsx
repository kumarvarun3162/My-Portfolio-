import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center px-10 relative overflow-hidden">
      
      {/* Background subtle animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute w-[600px] h-[600px] bg-white rounded-full blur-3xl"
      />

      {/* Main Content */}
      <div className="text-center z-10">
        
        <h1 className="text-[5vw] font-semibold leading-tight tracking-tight">
          Creative <br />
          Developer
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-gray-400 text-lg"
        >
          Building clean & immersive digital experiences
        </motion.p>

      </div>
    </section>
  );
}