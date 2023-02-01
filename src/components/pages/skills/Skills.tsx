import React, { useState } from "react";
import HRWithText from "../../layout/HRWithText";
import SkillSection from "./SkillSection";
import SkillsNav from "./SkillsNav";
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

      <HRWithText
        containerClasses="inline-flex w-full items-center justify-center font-ibmplexsans my-16"
        text="My Skills"
        HRClasses="my-8 h-[2px] w-3/4 rounded border-0 bg-stone-50 dark:bg-gray-700 lg:w-2/3"
        textClasses="absolute left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#287ddf] to-[#2a81e0] dark:bg-gradient-to-b dark:from-techcard2 dark:to-techcard2 font-semibold text-3xl px-4 dark:bg-gray-900 lg:text-4xl text-stone-50"
      />

      {/* <h1 className="lg: my-10 text-center font-ibmplexsans text-3xl font-semibold text-white drop-shadow-lg lg:mt-32">
        My Skills
      </h1> */}

      <SkillsViewer category={category} setCategory={setCategory} />
    </div>
  );
};

export default Skills;
