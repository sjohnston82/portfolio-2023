import React, { useState } from "react";
import SkillSection from "./SkillSection";
import SkillsNav from "./SkillsNav";
import SkillsViewer from "./SkillsViewer";

const Skills = () => {
  const [category, setCategory] = useState<string>("languages");

  return (
    <div
      className="relative mt-10 bg-gradient-to-b from-celticblue to-maximumblue pb-20 dark:bg-gradient-to-b dark:from-techcard dark:to-gray-900"
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

      <h1 className="my-10 text-center font-ibmplexsans text-3xl font-semibold text-white drop-shadow-lg">
        My Skills
      </h1>

      <SkillsViewer category={category} setCategory={setCategory} />
    </div>
  );
};

export default Skills;
