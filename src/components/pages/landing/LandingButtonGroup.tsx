import React from "react";
import { ImLinkedin2, ImGithub } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import SocialMediaButtonGroup from "../../layout/SocialMediaButtonGroup";

const LandingButtonGroup = () => {
  return (
    <div className="mt-4 flex flex-col items-center justify-center gap-5 font-ibmplexsans font-semibold ">
      <a
        href="https://res.cloudinary.com/sjohnston82/image/upload/v1670276349/u9bipgajsof2jw79tv4c.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="w-1/2"
      >
        <button className="duration-400 w-full rounded-3xl border-2 bg-celticblue p-3 text-white transition-all ease-in-out hover:border-2 hover:bg-white hover:text-celticblue ">
          Resumé
        </button>
      </a>
      <SocialMediaButtonGroup />
      
    </div>
  );
};

export default LandingButtonGroup;
