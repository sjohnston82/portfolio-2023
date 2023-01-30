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
      <div className="min-h-[100vh] xl:m-auto xl:flex xl:w-4/5 xl:flex-col xl:items-center xl:justify-around xl:pt-16  ">
        <div className="xl:flex xl:items-center xl:justify-center">
          <LandingPic />
          <div className="relative mt-4 xl:flex  xl:flex-col">
            <div className="absolute top-0 right-4 h-56 w-56 animate-blob rounded-full bg-blue-400 opacity-60 mix-blend-multiply blur-2xl filter animation-delay-500 sm:right-20 md:right-32 md:h-64 md:w-64 lg:right-48 lg:h-80 lg:w-80 xl:left-32 xl:h-56 xl:w-56"></div>
            <div className="absolute top-0 left-4 h-56 w-56 animate-blob rounded-full bg-yellow-300 opacity-30 mix-blend-multiply blur-2xl filter animation-delay-1000 dark:bg-white sm:left-20 md:left-40 md:h-72 md:w-72 lg:left-56 lg:h-80 lg:w-80  xl:left-80 xl:h-56 xl:w-56"></div>
            <div className="absolute bottom-16 left-28 h-56 w-56 animate-blob rounded-full bg-red-300 opacity-70 mix-blend-multiply  blur-2xl filter animation-delay-1500 dark:bg-zinc-50 sm:left-56 md:top-32 md:left-64 md:h-72 lg:left-80 lg:h-80 lg:w-80 xl:left-32 xl:h-56 xl:w-56"></div>
            <div className="absolute bottom-16 left-28 h-56 w-56 animate-blob rounded-full bg-purple-300 opacity-70 mix-blend-multiply  blur-2xl filter animation-delay-2000 dark:bg-zinc-50 sm:left-56 md:top-32 md:left-64 md:h-72 lg:left-80 lg:h-80 lg:w-80 xl:left-80 xl:h-56 xl:w-56"></div>
            <LandingText />
          </div>
        </div>
        <div className="xl:-mb-28 xl:w-full ">
          <LandingButtonGroup />
        </div>
      </div>
    </div>
  );
};

export default Landing;
