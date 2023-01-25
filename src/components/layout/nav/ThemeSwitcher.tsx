import React, { useContext } from "react";

import { PortfolioContext } from "../../../context/PortfolioContext";

import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

const ThemeSwitcher = () => {
  const context = useContext(PortfolioContext);
  if (!context) return null;
  const { darkMode, setDarkMode } = context;

  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <div className="absolute top-4 left-4">
      {darkMode ? (
        <MdOutlineLightMode
          className="cursor-pointer text-[2rem] md:text-[2.5rem]"
          onClick={toggleDarkMode}
        />
      ) : (
        <MdOutlineNightlight
          className="cursor-pointer text-[2rem] md:text-[2.5rem]"
          onClick={toggleDarkMode}
        />
      )}
    </div>
  );
};

export default ThemeSwitcher;
