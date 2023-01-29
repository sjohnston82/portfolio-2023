import React from "react";

import { motion } from "framer-motion";

import { pageTransitionSideVariants } from "../../../helpers/animations/variants";

import QuarterMasterLogo from "../../../../styles/assets/images/QuarterMasterLogo.png";
import JavascriptBadgeImage from "../../../styles/assets/images/JavascriptBadgeImage.svg";
import ReactBadgeImage from "../../../styles/assets/images/ReactBadgeImage.png";
import SassBadgeImage from "../../../styles/assets/images/SassBadgeImage.png";
import AWSBadgeImage from "../../../styles/assets/images/AWSBadgeImage.png";
import MongoDBBadgeImage from "../../../styles/assets/images/MongoDBBadgeImage.svg";
import NodejsBadgeImage from "../../../styles/assets/images/NodejsBadgeImage.png";

import TechBadge from "../../skills/TechBadge";
import TechUsed from "../TechUsed";

const QuarterMaster = () => {
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
      id="quartermaster"
    >
      <div className="m-auto min-h-[228px] w-2/3 rounded-xl bg-quartermaster md:w-1/2">
        <img
          src={QuarterMasterLogo}
          alt="QuarterMaster Logo"
          className="m-auto  w-4/5 md:w-1/2"
        />
        <p className="mt-5 text-center font-alegreya text-3xl font-bold normal-case italic text-black sm:pb-5 sm:text-[36px]">
          QuarterMaster
        </p>
      </div>

      <div className="mt-5">
        <p className="font-['Titillium Web'] m-auto w-4/5 rounded-tr-xl border-l-2 border-jobtracker bg-gray-200 px-3 py-2 font-semibold shadow dark:bg-jobtrackeraccentdark">
          QuarterMaster is a pantry inventory application to help you keep track
          of the food in your pantry.
        </p>
        <p className="m-auto my-3 w-[8ch] border-b-2 border-jobtracker text-center text-xl font-semibold dark:border-jobtrackeraccentdark ">
          Features
        </p>
        <ul className="mx-auto w-3/4 list-disc marker:text-jobtracker dark:marker:text-jobtrackeraccentdark">
          <li className="m-auto my-1  w-full">
            <p className="">
              Add all the food in your pantry so you're up-to-date on what you
              already have at home while you're out.
            </p>
          </li>
          <li className="m-auto my-1  w-full">
            <p className="">
              Keep track of food expiration dates so you know when the things
              that get pushed to back of the pantry are ready to be thrown out.
            </p>
          </li>
          <li className="m-auto my-1  w-full">
            <p className="">Sort and filter active and archived listings.</p>
          </li>
          <li className="m-auto my-1  w-full">
            <p className="">
              Add items to a grocery list to make shopping easy.
            </p>
          </li>
          <li className="m-auto my-1  w-full">
            <p className="">
              Uses the spoonacular API to generate images for food items that
              are added.
            </p>
          </li>
        </ul>

        <TechUsed />
        <div className="mt-6 flex justify-center gap-5 pb-10">
          <a
            href="https://quartermaster.pythonanywhere.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="duration-400 w-full rounded-3xl border-2 bg-celticblue p-2 font-semibold text-white transition-all ease-in-out hover:border-2 hover:bg-white hover:text-celticblue xxs:px-5 ">
              Try it Live
            </button>
          </a>
          <a
            href="https://github.com/sjohnston82/quartermaster/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="duration-400 w-full rounded-3xl border-2 bg-celticblue p-2 font-semibold text-white transition-all ease-in-out hover:border-2 hover:bg-white hover:text-celticblue xxs:px-5 ">
              See the Code
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default QuarterMaster;
