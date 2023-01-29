import React from "react";

import { pageTransitionSideVariants } from "../../../helpers/animations/variants";

import { motion } from "framer-motion";

import YahtzeeLogo from "../../../../styles/assets/images/YahtzeeLogo.png";
import JavascriptBadgeImage from "../../../styles/assets/images/JavascriptBadgeImage.svg";
import ReactBadgeImage from "../../../styles/assets/images/ReactBadgeImage.png";
import SassBadgeImage from "../../../styles/assets/images/SassBadgeImage.png";
import AWSBadgeImage from "../../../styles/assets/images/AWSBadgeImage.png";
import MongoDBBadgeImage from "../../../styles/assets/images/MongoDBBadgeImage.svg";
import NodejsBadgeImage from "../../../styles/assets/images/NodejsBadgeImage.png";

import TechBadge from "../../skills/TechBadge";
import TechUsed from "../TechUsed";

const Yahtzee = () => {
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
      id="yahtzee"
    >
      <div className="yahtzee-bg m-auto min-h-[228px] w-2/3 rounded-xl p-2 md:w-1/2">
        <img
          src={YahtzeeLogo}
          alt="Yahtzee Logo"
          className="m-auto w-4/5 md:w-1/2"
        />
        <h1 className="mt-4 text-center font-['Revue'] text-3xl font-bold normal-case text-white drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,8)] sm:pb-5 sm:text-[36px]">
          Yahtzee!
        </h1>
      </div>

      <div className="mt-5">
        <p className="font-['Titillium Web'] m-auto w-4/5 rounded-tr-xl border-l-2 border-jobtracker bg-gray-200 px-3 py-2 font-semibold shadow dark:bg-jobtrackeraccentdark ">
          An online multiplayer version of Yahtzee built using the MERN stack
          and socket.io. Play full games and chat.
        </p>
        <p className="m-auto my-3 w-[8ch] border-b-2 border-jobtracker text-center text-xl font-semibold dark:border-jobtrackeraccentdark ">
          Features
        </p>
        <ul className="mx-auto w-3/4 list-disc marker:text-jobtracker dark:marker:text-jobtrackeraccentdark">
          <li className="m-auto my-1  w-full">
            <p className="">Uses socket.io for real-time game-play. </p>
          </li>
          <li className="m-auto my-1  w-full">
            <p className="">Ability to host lobbies for other to join.</p>
          </li>
          <li className="m-auto my-1  w-full">
            <p className="">Chat with your friends in-game.</p>
          </li>
        </ul>

        <TechUsed />
        <div className="mt-6 flex justify-center gap-5 pb-4">
          <a
            href="https://pdxcg-yahtzee.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-none"
          >
            <button className="duration-400 pointer-events-none w-full rounded-3xl border-2 bg-gray-400 p-2 font-semibold text-white transition-all ease-in-out xxs:px-5 ">
              Try it Live
            </button>
          </a>
          <a
            href="https://github.com/mcbridz/pdx_yahtzee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="duration-400 w-full rounded-3xl border-2 bg-celticblue p-2 font-semibold text-white transition-all ease-in-out hover:border-2 hover:bg-white hover:text-celticblue xxs:px-5 ">
              See the Code
            </button>
          </a>
        </div>
        <p className="m-auto w-2/3 pb-6 text-xs italic">
          * Unfortunately, due to Heroku free-tier being removed, this project
          is currently unhosted.{" "}
        </p>
      </div>
    </motion.div>
  );
};

export default Yahtzee;
