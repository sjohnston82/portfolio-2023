import React, { useContext } from "react";
import { PortfolioContext } from "../../../context/PortfolioContext";
import LandingButtonGroup from "./LandingButtonGroup";
import LandingPic from "./LandingPic";
import LandingText from "./LandingText";

const Landing = () => {
  const context = useContext(PortfolioContext);
  if (!context) return null;
  const { isOpen } = context;
  return (
    <div className="relative w-full " id="home">
      <div className="min-h-[calc(100vh-64px)]">
        <LandingPic />
        <div className="relative mt-4">
          <div className="absolute top-0 left-4 h-56 w-56 animate-blob rounded-full bg-yellow-300 opacity-40 mix-blend-multiply blur-2xl filter dark:bg-white sm:left-20 md:left-40 md:h-72 md:w-72 "></div>
          <div className="absolute top-0 right-4 h-56 w-56 animate-blob rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-2xl filter animation-delay-400 sm:right-20 md:right-32 md:h-64 md:w-64"></div>
          <div className="absolute bottom-16 left-28 h-56 w-56 animate-blob rounded-full bg-red-300 opacity-70 mix-blend-multiply  filter animation-delay-1200 dark:bg-zinc-50 sm:left-56 md:top-32 blur-2xl md:h-72 md:left-64"></div>
          <LandingText />
          <LandingButtonGroup />
        </div>
      </div>
    </div>
  );
};

export default Landing;
