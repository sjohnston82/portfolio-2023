import React from "react";
import { ImLinkedin2, ImGithub } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import SocialMediaButtonGroup from "../../layout/SocialMediaButtonGroup";

const LandingButtonGroup = () => {
  return (
    <div className="mt-4 flex flex-col items-center justify-center gap-5 font-ibmplexsans font-semibold xl:mt-0 ">
      <a
        href="https://res.cloudinary.com/sjohnston82/image/upload/v1670276349/u9bipgajsof2jw79tv4c.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-1/2 justify-center"
      >
        <button className="duration-400 z-50 w-full rounded-3xl  bg-celticblue p-3 text-white opacity-100 transition-all ease-in-out hover:bg-white hover:text-celticblue hover:shadow-lg lg:w-1/2 ">
          Resumé
        </button>
      </a>
      <SocialMediaButtonGroup isFooter={false} />
    </div>
  );
};

export default LandingButtonGroup;
