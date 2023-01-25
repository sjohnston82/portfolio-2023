import React, { useContext } from "react";
import { PortfolioContext } from "../../../context/PortfolioContext";
import { motion } from "framer-motion";

interface ToggleProps {
  props?: JSX.Element | JSX.Element[];
  variants?: any | null;
  d?: any | null;
  transition?: any | null;
}

const Path = (props: ToggleProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  />
);
const MenuToggle = ({}: any) => {
  const context = useContext(PortfolioContext);
  if (!context) return null;
  const { toggleOpen, isOpen } = context;

  return (
    <button
      onClick={toggleOpen}
      className="absolute right-0 z-50 mr-4 mt-5 stroke-black dark:stroke-zinc-50"
    >
      <svg width="30" height="30" viewBox="0 0 30 30">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};

export default MenuToggle;
