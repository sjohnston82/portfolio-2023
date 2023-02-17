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
      className="bg-seagreen pt-10 dark:bg-projectdark 2xl:flex"
      id="jobtracker"
    >
      <div className="">
        <div className="2xl:flex">
          <div className="2xl:flex 2xl:w-[60%]  2xl:flex-col">
            <div className="pt-12">
              {project === 1 ? (
                <JobTrackerBadge />
              ) : project === 2 ? (
                <YahtzeeBadge />
              ) : (
                <QuarterMasterBadge />
              )}
            </div>
            <div className="">
              <p className="font-['Titillium Web'] m-auto  mt-5 w-4/5 rounded-tr-xl  border-l-2 border-jobtracker bg-gray-200 px-3 py-2 font-semibold shadow dark:bg-jobtrackeraccentdark lg:w-2/3 xl:mt-16 xl:mb-10 xl:w-1/2 xl:text-2xl 2xl:w-4/5 ">
                {project === 1
                  ? jobTrackerData.tagline
                  : project === 2
                  ? yahtzeeData.tagline
                  : quarterMasterData.tagline}
              </p>
            </div>
          </div>

          <div className="xl:flex xl:w-full xl:justify-center 2xl:w-full 2xl:flex-col">
            <div
              className={
                project === 2
                  ? "xl:flex xl:w-1/2 xl:flex-col xl:pl-40  2xl:mb-12 2xl:flex 2xl:w-full 2xl:flex-col 2xl:justify-center 2xl:pl-0"
                  : "xl:flex xl:w-1/2 xl:flex-col xl:pl-12  2xl:flex 2xl:w-full 2xl:flex-col 2xl:justify-center 2xl:pl-0"
              }
            >
              <p
                className={
                  project === 2
                    ? "m-auto my-3 w-[8ch] border-b-2 border-jobtracker text-center text-xl font-semibold dark:border-jobtrackeraccentdark 2xl:text-3xl "
                    : "m-auto my-3 w-[8ch] border-b-2 border-jobtracker text-center text-xl font-semibold dark:border-jobtrackeraccentdark 2xl:text-3xl"
                }
              >
                Features
              </p>
              <ul
                className={
                  project === 2
                    ? "m-auto w-3/4 list-disc  marker:text-jobtracker dark:marker:text-jobtrackeraccentdark lg:w-2/3 xl:w-3/4 2xl:pb-10"
                    : "m-auto w-3/4 list-disc  marker:text-jobtracker dark:marker:text-jobtrackeraccentdark lg:w-2/3 xl:w-3/4 "
                }
              >
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
            <div className="2xl:w-full">
              <TechUsed />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-5 py-12 lxl:gap-10">
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
                  ? "duration-400 pointer-events-none w-full rounded-3xl  bg-gray-400 p-2 font-semibold text-white transition-all ease-in-out xxs:px-5 xl:px-12 xl:py-3"
                  : "duration-400 w-full rounded-3xl  bg-celticblue p-2 font-semibold text-white transition-all ease-in-out  hover:bg-white hover:text-celticblue hover:shadow-lg hover:shadow-gray-700 xxs:px-5 xl:px-12 xl:py-3"
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
            <button className=" duration-400 w-full rounded-3xl  bg-celticblue p-2 font-semibold text-white transition-all ease-in-out  hover:bg-white hover:text-celticblue hover:shadow-lg hover:shadow-gray-700 xxs:px-5 xl:px-12 xl:py-3">
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
