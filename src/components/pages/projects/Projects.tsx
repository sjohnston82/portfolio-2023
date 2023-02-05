import React, { useContext } from "react";
import { PortfolioContext } from "../../../context/PortfolioContext";
import ProjectSelectBar from "./ProjectSelectBar";

import Transition from "../../helpers/animations/Transition";

import { AnimatePresence, motion } from "framer-motion";
import HRWithText from "../../layout/HRWithText";
import Project from "./Project";

const Projects = () => {
  const context = useContext(PortfolioContext);
  if (!context) return null;
  const { project, setProject } = context;

  return (
    <div className="relative bg-seagreen dark:bg-projectdark" id="projects">
      <div className="skill-divider-top ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className="shape-fill  fill-maximumblue dark:fill-gray-900"
          ></path>
        </svg>
      </div>
      {/* <HRWithText
        containerClasses="inline-flex w-full items-center justify-center font-ibmplexsans my-16"
        text="My Projects"
        HRClasses="my-8 h-[2px] w-3/4 rounded border-0 bg-black dark:bg-gray-700 lg:w-2/3"
        textClasses="absolute left-1/2 -translate-x-1/2 bg-seagreen font-semibold text-2xl xxs:text-3xl px-4 dark:bg-projectdark xl:text-4xl"
      /> */}
      <h1 className="xl:text-5xl my-16 text-center font-ibmplexsans text-3xl font-semibold  lg:text-4xl">
        My Projects
      </h1>
      <ProjectSelectBar project={project} setProject={setProject} />

      <AnimatePresence mode="wait">
        {/* {project === 1 && <JobTracker key={1} />}
        {project === 2 && <Yahtzee key={2} />}
        {project === 3 && <QuarterMaster key={3} />} */}
        <Project key={project} />
      </AnimatePresence>
    </div>
  );
};

export default Projects;
