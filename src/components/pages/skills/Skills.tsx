import React, { useState } from "react";

import SkillsViewer from "./SkillsViewer";

const Skills = () => {
  const [category, setCategory] = useState<string>("languages");

  return (
    <div
      className="relative mt-10 bg-gradient-to-b from-celticblue to-maximumblue pb-20 dark:bg-gradient-to-b dark:from-techcard dark:to-gray-900 "
      id="skills"
    >
      <div className="skill-divider-top ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className="shape-fill  fill-stone-50 dark:fill-gray-800"
          ></path>
        </svg>
      </div>

      <h1 className=" drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-3xl my-16 text-center font-ibmplexsans font-semibold text-stone-50 lg:text-4xl xl:text-5xl">
        My Skills
      </h1>

      <SkillsViewer category={category} setCategory={setCategory} />

    </div>
  );
};

export default Skills;
