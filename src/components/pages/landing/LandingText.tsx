import React from "react";
import HRWithIcon from "../../layout/HRWithIcon";

import { FaTools } from "react-icons/fa";

const LandingText = () => {
  return (
    <div className=" relative">
      <div className="relative z-0 m-auto  w-[90%]  p-2 ">
        <p className="m-auto  rounded  text-center  text-xl font-semibold uppercase">
          Welcome! I'm
        </p>
        <p className="my-3 text-center font-ibmplexsans text-3xl font-semibold uppercase text-black  m-auto dark:text-zinc-50">
          Stephen <span className="text-celticblue">Johnston</span>
        </p>

        <p className="px-4 text-center font-ibmplexsans font-semibold w-4/5 m-auto  ">
          A <span className="text-celticblue italic drop-shadow">Full-Stack Web Developer</span>{" "}
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
