import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import img from "../assets/image.png";

export default function FloatingHomeButton() {
  const navigate = useNavigate();

  return (
    <motion.img
      src={img}
      onClick={() => navigate("/")}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full object-cover cursor-pointer z-50 shadow-xl"
    />
  );
}