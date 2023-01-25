import React, { useContext } from "react";
import { PortfolioContext } from "../../../context/PortfolioContext";
import ProjectSelectBar from "./ProjectSelectBar";
import JobTracker from "./jobtracker/JobTracker";
import QuarterMaster from "./quartermaster/QuarterMaster";
import Yahtzee from "./yahtzee/Yahtzee";
import Transition from "../../helpers/animations/Transition";

import { AnimatePresence, motion } from "framer-motion";

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

      <h1 className="my-10 text-center font-ibmplexsans text-3xl font-semibold  drop-shadow-lg">
        My Projects
      </h1>
      <ProjectSelectBar project={project} setProject={setProject} />

      <AnimatePresence mode="wait">
        {project === 1 && <JobTracker key={1} />}
        {project === 2 && <Yahtzee key={2} />}
        {project === 3 && <QuarterMaster key={3} />}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
