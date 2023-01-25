import React, { useContext } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { PortfolioContext } from "../../../context/PortfolioContext";
import { motion } from "framer-motion";
import { AiFillHome, AiFillPhone } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { HiCode } from "react-icons/hi";

import { Link } from "react-router-dom";

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
        <motion.li
          variants={itemVariants}
          className="flex w-full justify-center text-2xl hover:scale-105"
        >
          <a
            href="#home"
            className="flex gap-x-2 "
            onClick={() => toggleOpen()}
          >
            <div className="group flex w-28 justify-start gap-1 hover:scale-105">
              <span className="flex items-center fill-black dark:fill-zinc-50">
                <AiFillHome
                  size="1.3rem"
                  className="group-hover:fill-celticblue"
                />
              </span>
              <p className="">Home</p>
            </div>
          </a>
        </motion.li>

        <motion.li
          variants={itemVariants}
          className="flex justify-center text-2xl"
        >
          <a
            href="#skills"
            className="flex gap-x-2 "
            onClick={() => toggleOpen()}
          >
            <div className="group flex w-28 justify-start gap-1 hover:scale-105">
              <span className="flex items-center">
                <FaTools
                  size="1.3rem"
                  className="group-hover:fill-celticblue"
                />
              </span>
              <p className="">Skills</p>
            </div>
          </a>
        </motion.li>

        <motion.li
          variants={itemVariants}
          className="flex justify-center text-2xl"
        >
          <a
            href="#projects"
            className="flex gap-x-2 "
            onClick={() => toggleOpen()}
          >
            <div className="group flex w-28 justify-start gap-1 hover:scale-105">
              <span className="group flex items-center ">
                <HiCode size="1.5rem" className="group-hover:fill-celticblue" />
              </span>
              <p className="">Projects</p>
            </div>
          </a>
        </motion.li>

        <motion.li
          variants={itemVariants}
          className="flex justify-center text-2xl"
        >
          <a
            href="#contact"
            className="flex gap-x-2 "
            onClick={() => toggleOpen()}
          >
            <div className="group flex w-28 justify-start gap-1 hover:scale-105">
              <span className="flex items-center">
                
                <AiFillPhone
                  size="1.3rem"
                  className="group-hover:fill-celticblue"
                />
              </span>
              <p className="">Contact</p>
            </div>
          </a>
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default NavList;
