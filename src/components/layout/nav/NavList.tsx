import React, { useContext } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { PortfolioContext } from "../../../context/PortfolioContext";
import { motion } from "framer-motion";
import { AiFillHome, AiFillPhone } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { HiCode } from "react-icons/hi";

import { Link } from "react-router-dom";
import NavLink from "./NavLink";

const NavList = () => {
  const context = useContext(PortfolioContext);
  if (!context) return null;
  const { darkMode, toggleOpen } = context;

  const linksVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  return (
    <div className={darkMode ? "dark relative flex" : "relative flex"}>
      <ThemeSwitcher />
      <motion.ul
        variants={linksVariants}
        initial="hidden"
        animate="show"
        className=" mt-12 flex h-60 w-full flex-col items-center justify-around text-center"
      >
        <NavLink
          variants={itemVariants}
          title="Home"
          icon={
            <AiFillHome size="1.3rem" className="group-hover:fill-celticblue" />
          }
          link="#home"
        />
        <NavLink
          variants={itemVariants}
          title="Skills"
          icon={
            <FaTools size="1.3rem" className="group-hover:fill-celticblue" />
          }
          link="#skills"
        />
        <NavLink
          variants={itemVariants}
          title="Projects"
          icon={
            <HiCode size="1.5rem" className="group-hover:fill-celticblue" />
          }
          link="#projects"
        />
        <NavLink
          variants={itemVariants}
          title="Home"
          icon={
            <AiFillPhone
              size="1.3rem"
              className="group-hover:fill-celticblue"
            />
          }
          link="#contact"
        />

       
      </motion.ul>
    </div>
  );
};

export default NavList;
