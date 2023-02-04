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
          <div className="relative mt-4 xxs:pb-10  xl:flex xl:flex-col">
            <div className="absolute top-20 right-4 h-4 w-40 animate-blob rounded-full bg-blue-400 opacity-60 mix-blend-multiply  filter animation-delay-1000 blur-2xl xxs:top-10 xxs:h-44 xxs:w-44  xs:right-20 xs:top-5 sm:right-20 md:right-32 md:h-64 md:w-64 xmd:right-56 xmd:h-56 xmd:w-56 lg:right-48 lg:h-80 lg:w-80 lxl:right-64 xl:left-32 xl:top-20 xl:h-48 xl:w-48 "></div>
            <div className="md:w-6h-64 absolute left-4 top-20 h-40 w-40 animate-blob rounded-full bg-yellow-300 opacity-30 mix-blend-multiply  blur-2xl filter animation-delay-1400 dark:bg-white xxs:left-12 xxs:top-10  xxs:h-44 xxs:w-44 xs:left-20 xs:top-5 sm:left-28 md:left-40 md:h-64 md:w-64 xmd:left-56 xmd:h-56 xmd:w-56 lg:left-56 lg:h-80 lg:w-80 lxl:left-72  xl:left-80 xl:top-20 xl:h-48 xl:w-48 "></div>
            <div className="md:w-6h-64 absolute bottom-0 left-28 h-40 w-40 animate-blob rounded-full bg-red-300 opacity-70 mix-blend-multiply  blur-2xl filter animation-delay-400 dark:bg-zinc-50  xxs:left-40 xxs:h-44 xxs:w-44 xs:left-56 sm:left-56 md:top-28 md:left-64 md:h-64 md:w-64 xmd:top-12 xmd:left-80 xmd:h-56 xmd:w-56 lg:left-80 lg:h-80 lg:w-80 lxl:left-[40%] xl:left-48 xl:top-48  xl:h-48 xl:w-48 "></div>
            {/* <div className="xl:absolute xl:bottom-0  xl:left-80 xl:h-56 xl:w-56 xl:animate-blob xl:rounded-full  xl:bg-purple-400 xl:opacity-70 blur-2xl xl:mix-blend-multiply  xl:filter xl:animation-delay-2000 xl:dark:bg-zinc-50"></div> */}
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
