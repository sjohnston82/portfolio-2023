import React from "react";

import { motion } from "framer-motion";

import { pageTransitionSideVariants } from "../../../helpers/animations/variants";

import JobTrackerLogo from "../../../../styles/assets/images/JobTrackerLogo.png";

import TechUsed from "../TechUsed";
import JobTrackerBadge from "../logos/JobTrackerBadge";

const JobTracker = () => {
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
     <JobTrackerBadge />

      <div className="mt-5  ">
        <p className="font-['Titillium Web'] xl:w2/3 m-auto w-4/5 rounded-tr-xl  border-l-2 border-jobtracker bg-gray-200 px-3 py-2 font-semibold shadow dark:bg-jobtrackeraccentdark lg:w-2/3 xl:mt-16 xl:mb-10 xl:w-1/2">
          JobTracker is a MERN app that helps users track all their important
          job hunting information in one place.
        </p>

        <div className="xl:flex">
          <div className="xl:flex xl:w-2/3 xl:flex-col">
            <p className="m-auto my-3 w-[8ch] border-b-2 border-jobtracker text-center text-xl font-semibold dark:border-jobtrackeraccentdark ">
              Features
            </p>
            <ul className="mx-auto w-3/4 list-disc  marker:text-jobtracker dark:marker:text-jobtrackeraccentdark lg:w-2/3">
              <li className="m-auto my-1  w-full">
                <p className="">
                  Store important job application info to help keep you
                  organized and efficient in your job search.
                </p>
              </li>
              <li className="m-auto my-1  w-full">
                <p className="">
                  Upload and store your resumes and cover letters.
                </p>
              </li>
              <li className="m-auto my-1  w-full">
                <p className="">
                  Sort and filter active and archived listings.
                </p>
              </li>
              <li className="m-auto my-1  w-full">
                <p className="">
                  Archive your job applications to easily keep track of where
                  you have applied to in the past and when.
                </p>
              </li>
              <li className="m-auto my-1  w-full">
                <p className="">
                  Ability to enable auto-archiving to archive jobs automatically
                  after a certain time period of inactivity.
                </p>
              </li>
            </ul>
          </div>
          <TechUsed />
        </div>

        <div className="mt-6 flex justify-center gap-5 pb-10">
          <a
            href="https://job-tracker.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="duration-400 w-full rounded-3xl border-2 bg-celticblue p-2 font-semibold text-white transition-all ease-in-out hover:border-2 hover:bg-white hover:text-celticblue xxs:px-5">
              Try it Live
            </button>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sjohnston82/job-tracker"
          >
            <button className="duration-400 w-full rounded-3xl border-2 bg-celticblue p-2 font-semibold text-white transition-all ease-in-out hover:border-2 hover:bg-white hover:text-celticblue xxs:px-5">
              See the Code
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default JobTracker;
