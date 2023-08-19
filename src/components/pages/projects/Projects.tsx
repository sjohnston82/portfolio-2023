import React, { useContext } from "react";
import { PortfolioContext } from "../../../context/PortfolioContext";
import ProjectSelectBar from "./ProjectSelectBar";


import { AnimatePresence, motion } from "framer-motion";
import Project from "./Project";

const Projects = () => {
  const context = useContext(PortfolioContext);
  if (!context) return null;
  const { project, setProject } = context;

  return (
    <div className="relative bg-projectdark text-zinc-50 dark:bg-projectdark " id="projects">
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

      <h1 className="xl:text-5xl my-16 text-center font-ibmplexsans text-3xl font-semibold  lg:text-4xl">
        My Projects
      </h1>
      <ProjectSelectBar project={project} setProject={setProject} />

      <AnimatePresence mode="wait">
        <Project key={project} />
      </AnimatePresence>
    </div>
  );
};

export default Projects;
