import React, { useContext } from "react";
import { PortfolioContext } from "../../../context/PortfolioContext";

import { motion } from "framer-motion";
import { pageTransitionSideVariants } from "../../helpers/animations/variants";

import JobTrackerBadge from "./logos/JobTrackerBadge";
import QuarterMasterBadge from "./logos/QuarterMasterBadge";
import YahtzeeBadge from "./logos/YahtzeeBadge";

import { jobTrackerData, yahtzeeData, quarterMasterData } from "./projectData";
import TechUsed from "./TechUsed";

const Project = () => {
  const context = useContext(PortfolioContext);
  if (!context) return null;
  const { project } = context;

  return (
    <motion.div
      variants={pageTransitionSideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      }}
      className="bg-seagreen pt-10 dark:bg-projectdark"
      id="jobtracker"
    >
      {project === 1 ? (
        <JobTrackerBadge />
      ) : project === 2 ? (
        <YahtzeeBadge />
      ) : (
        <QuarterMasterBadge />
      )}

      <div className="mt-5">
        <p className="font-['Titillium Web']  m-auto w-4/5 rounded-tr-xl  border-l-2 border-jobtracker bg-gray-200 px-3 py-2 font-semibold shadow dark:bg-jobtrackeraccentdark lg:w-2/3 xl:mt-16 xl:mb-10 xl:w-1/2 xl:text-2xl ">
          {project === 1
            ? jobTrackerData.tagline
            : project === 2
            ? yahtzeeData.tagline
            : quarterMasterData.tagline}
        </p>

        <div className="xl:flex xl:w-full xl:justify-center">
          <div
            className={
              project === 2
                ? "xl:flex xl:w-1/2 xl:flex-col pl-40"
                : "xl:flex xl:w-1/2 xl:flex-col pl-12"
            }
          >
            <p className="m-auto my-3 w-[8ch] border-b-2 border-jobtracker text-center text-xl font-semibold dark:border-jobtrackeraccentdark ">
              Features
            </p>
            <ul className="mx-auto w-3/4 list-disc  marker:text-jobtracker dark:marker:text-jobtrackeraccentdark lg:w-2/3 xl:w-3/4">
              {project === 1
                ? jobTrackerData.features.map((feature, index) => {
                    return (
                      <li className="m-auto my-1 w-full" key={index}>
                        {feature}
                      </li>
                    );
                  })
                : project === 2
                ? yahtzeeData.features.map((feature, index) => {
                    return (
                      <li className="m-auto my-1 w-full" key={index}>
                        {feature}
                      </li>
                    );
                  })
                : quarterMasterData.features.map((feature, index) => {
                    return (
                      <li className="m-auto my-1 w-full" key={index}>
                        {feature}
                      </li>
                    );
                  })}
            </ul>
          </div>
          <TechUsed />
        </div>

        <div className="mt-6 flex justify-center gap-5 py-12">
          <a
            href={
              project === 1
                ? jobTrackerData.projectLink
                : project === 2
                ? ""
                : quarterMasterData.projectLink
            }
            target="_blank"
            rel="noopener noreferrer"
            className={project === 2 ? "pointer-events-none" : ""}
          >
            <button
              className={
                project === 2
                  ? "duration-400 pointer-events-none w-full rounded-3xl border-2 bg-gray-400 p-2 font-semibold text-white transition-all ease-in-out xxs:px-5 xl:px-12 xl:py-3"
                  : "duration-400 w-full rounded-3xl border-2 bg-celticblue p-2 font-semibold text-white transition-all ease-in-out hover:border-2 hover:bg-white hover:shadow-lg hover:shadow-gray-700 hover:text-celticblue xxs:px-5 xl:px-12 xl:py-3"
              }
            >
              Try it Live
            </button>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href={
              project === 1
                ? jobTrackerData.codeLink
                : project === 2
                ? yahtzeeData.codeLink
                : quarterMasterData.codeLink
            }
          >
            <button className=" hover:shadow-lg hover:shadow-gray-700 duration-400 w-full rounded-3xl border-2 bg-celticblue p-2 font-semibold text-white transition-all ease-in-out hover:border-2 hover:bg-white hover:text-celticblue xxs:px-5 xl:px-12 xl:py-3">
              See the Code
            </button>
          </a>
        </div>
        {project === 2 && (
          <p className="m-auto w-2/3 pb-6 text-center text-xs italic lg:text-sm">
            * Unfortunately, due to Heroku free-tier being removed, this project
            is currently unhosted.{" "}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Project;
