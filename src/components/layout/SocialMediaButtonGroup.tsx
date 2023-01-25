import React from 'react'

import { ImLinkedin2, ImGithub } from "react-icons/im";
import { SiGmail } from "react-icons/si";

interface SocialMediaButtonGroupProps {
  isFooter: boolean;
}

const SocialMediaButtonGroup = ({ isFooter }: SocialMediaButtonGroupProps) => {
  return (
    <div className={isFooter ? "my-5 flex justify-center gap-5 " : "my-5 flex justify-center gap-5 pb-20"}>
      <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded bg-white shadow transition-all duration-200 ease-in-out hover:scale-110 hover:shadow-gray-500 dark:bg-gray-700">
        <ImLinkedin2 size="1.5rem" color="#226CE0" />
      </div>
      <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded bg-white shadow transition-all duration-200 ease-in-out hover:scale-110 hover:shadow-gray-500 dark:bg-gray-700">
        <ImGithub size="1.5rem" color="226CE0" />
      </div>
      <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded bg-white shadow transition-all duration-200 ease-in-out hover:scale-110 hover:shadow-gray-500 dark:bg-gray-700">
        <SiGmail size="1.5rem" color="225CE0" />
      </div>
    </div>
  );
}

export default SocialMediaButtonGroup