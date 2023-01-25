import { motion } from "framer-motion";

interface FramerProps {
  children?: React.ReactNode;
}
const variants = {
  enter: {
    x: -1000,
    opacity: 0,
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    x: 1000,
    opacity: 0,
    scale: 0.01,
  },
};

const Transition = ({ children }: FramerProps) => {
  return (
    <motion.div
      className="h-full"
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      }}
    >
      {children}
    </motion.div>
  );
};
export default Transition;
