import React from "react";
import HRWithIcon from "../../layout/HRWithText";

import { FaTools } from "react-icons/fa";

const LandingText = () => {
  return (
    <div className=" relative">
      <div className="relative z-0 m-auto  w-[90%]  p-2 ">
        <p className="m-auto  rounded  text-center  text-xl font-semibold uppercase lg:mt-5 lg:text-2xl">
          Welcome! I'm
        </p>
        <p className="m-auto my-3 w-[18ch] rounded-xl bg-stone-50 py-4 text-center font-ibmplexsans text-3xl font-semibold uppercase text-black  lg:mb-10 lg:text-5xl">
          Stephen <span className="text-celticblue">Johnston</span>
        </p>

        <p className="m-auto w-4/5 px-4 text-center font-ibmplexsans font-semibold  ">
          A{" "}
          <span className="italic text-celticblue drop-shadow">
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
