import React, { useContext, useRef } from "react";
import { motion, useCycle } from "framer-motion";
import useOnClickOutside from "../../../components/helpers/hooks/useOnClickOutside";
import { PortfolioContext } from "../../../context/PortfolioContext";
import ThemeSwitcher from "./ThemeSwitcher";
import MenuToggle from "./MenuToggle";
import NavList from "./NavList";
import Logo from "./Logo";
import { navVariant } from "../../helpers/animations/variants";

const Nav = () => {
  const navRef = useRef<HTMLElement>(null);

  const context = useContext(PortfolioContext);
  if (!context) return null;
  const { setDarkMode, windowSize, isOpen, toggleOpen } = context;

  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  const clickOutsideHandler = () => {
    isOpen && toggleOpen();
  };
  useOnClickOutside(navRef, clickOutsideHandler);

  return (
    <motion.nav
      variants={navVariant}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={windowSize.innerHeight}
      className={
        isOpen
          ? "absolute top-0 z-50  border-b bg-white dark:bg-gray-900"
          : "fixed top-0 z-50  border-b bg-navbar dark:bg-gray-900"
      }
      ref={navRef}
    >
      {!isOpen && <Logo />}
      <MenuToggle />
      {isOpen && <NavList />}
    </motion.nav>
  );
};

export default Nav;
