import React from "react";
import HRWithIcon from "../../layout/HRWithText";

import { FaTools } from "react-icons/fa";

const LandingText = () => {
  return (
    <div className=" relative xl:min-h-full xl:pt-10">
      <div className="relative z-0 m-auto  w-[90%]  p-2 xl:flex xl:flex-col xl:justify-center xl:gap-6">
        <p className="m-auto  rounded  text-center  text-2xl font-semibold uppercase sm:text-3xl lg:mt-5 lg:text-3xl xl:mt-0 xl:text-4xl lxl:text-3xl">
          Welcome! I'm
        </p>
        <p className="m-auto my-3 w-[18ch] rounded-xl  py-4 text-center font-ibmplexsans text-3xl  font-semibold uppercase text-black xs:text-4xl  lg:mb-10 lg:text-5xl xl:mb-0 xl:text-6xl">
          Stephen{" "}
          <span className="text-celticblue drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Johnston
          </span>
        </p>

        <p className="m-auto w-full px-4 text-center font-ibmplexsans font-semibold xs:text-lg sm:w-4/5 sm:text-xl xl:w-[90%] xl:justify-center lg:text-2xl lxl:w-2/3 lxl:text-2xl">
          A{" "}
          <span className=" text-celticblue  ">
            Full-Stack Web Developer
          </span>{" "}
          hailing from the Greater Lansing, MI area who loves to build web
          applications that solve real-world problems and to learn new
          technologies.
        </p>
      </div>

      {/* <HRWithIcon icon={<FaTools />} /> */}
    </div>
  );
};

export default LandingText;
