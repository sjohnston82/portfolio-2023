import React from "react";
import HRWithIcon from "../../layout/HRWithText";

import { FaTools } from "react-icons/fa";

const LandingText = () => {
  return (
    <div className=" relative xl:min-h-full xl:pt-10">
      <div className="relative z-0 m-auto  w-[90%]  p-2 xl:flex xl:flex-col xl:justify-center xl:gap-6">
        <p className="m-auto  rounded  text-center  text-xl font-semibold uppercase lg:mt-5 lg:text-2xl xl:mt-0 xl:text-4xl">
          Welcome! I'm
        </p>
        <p className="m-auto my-3 w-[18ch] rounded-xl  py-4 text-center font-ibmplexsans text-3xl font-semibold uppercase text-black md:text-4xl  lg:mb-10 lg:text-5xl xl:mb-0 xl:text-6xl">
          Stephen{" "}
          <span className="text-celticblue drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Johnston
          </span>
        </p>

        <p className="m-auto w-4/5 px-4 text-center font-ibmplexsans font-semibold xl:justify-center xl:text-2xl">
          A{" "}
          <span className="font-outline-2 italic text-celticblue drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
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
