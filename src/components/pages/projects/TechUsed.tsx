import React, { useContext } from "react";
import { PortfolioContext } from "../../../context/PortfolioContext";
import { motion } from "framer-motion";

import JavascriptBadgeImage from "../../../styles/assets/images/JavascriptBadgeImage.svg";
import ReactBadgeImage from "../../../styles/assets/images/ReactBadgeImage.png";
import SassBadgeImage from "../../../styles/assets/images/SassBadgeImage.png";
import AWSBadgeImage from "../../../styles/assets/images/AWSBadgeImage.png";
import MongoDBBadgeImage from "../../../styles/assets/images/MongoDBBadgeImage.svg";
import NodejsBadgeImage from "../../../styles/assets/images/NodejsBadgeImage.png";
import VueBadgeImage from "../../../styles/assets/images/VueBadgeImage.png";
import CSSBadgeImage from "../../../styles/assets/images/CSSBadgeImage.png";
import DjangoBadgeImage from "../../../styles/assets/images/DjangoBadgeImage.png";
import PythonBadgeImage from "../../../styles/assets/images/PythonBadgeImage.png";
import SocketioBadgeImageDark from "../../../styles/assets/images/SocketioBadgeImageDark.png";

interface TechList {
  title: string;
  image: React.ReactNode;
  id: number;
}

const TechUsed = () => {
  const context = useContext(PortfolioContext);
  if (!context) return null;
  const { project } = context;

  const techListJobTracker = [
    { title: "JavaScript", image: JavascriptBadgeImage, id: 1 },
    { title: "React", image: ReactBadgeImage, id: 2 },
    { title: "Sass", image: SassBadgeImage, id: 3 },
    { title: "AWS", image: AWSBadgeImage, id: 4 },
    { title: "MongoDB", image: MongoDBBadgeImage, id: 5 },
    { title: "Nodejs", image: NodejsBadgeImage, id: 6 },
  ];

  const techListQuarterMaster = [
    { title: "JavaScript", image: JavascriptBadgeImage, id: 1 },
    { title: "Vue", image: VueBadgeImage, id: 2 },
    { title: "CSS", image: CSSBadgeImage, id: 3 },
    { title: "Django", image: DjangoBadgeImage, id: 4 },
    { title: "MongoDB", image: MongoDBBadgeImage, id: 5 },
    { title: "Python", image: PythonBadgeImage, id: 6 },
  ];

  const techListYahtzee = [
    { title: "JavaScript", image: JavascriptBadgeImage, id: 1 },
    { title: "React", image: ReactBadgeImage, id: 2 },
    { title: "CSS", image: CSSBadgeImage, id: 3 },
    { title: "Socket.io", image: SocketioBadgeImageDark, id: 4 },
    { title: "MongoDB", image: MongoDBBadgeImage, id: 5 },
    { title: "Nodejs", image: NodejsBadgeImage, id: 6 },
  ];

  const techBadgeClasses =
    "m-2 flex flex-col rounded border bg-stone-50 p-1 shadow-lg dark:shadow-gray-900 shadow-gray-700 dark:bg-[#243B53] xxs:w-[15ch] ";

  return (
    <div className="">
      <p className="m-auto my-3 w-[9ch] border-b-2 border-jobtracker text-center text-xl font-semibold dark:border-jobtrackeraccentdark">
        Tech Used
      </p>
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          y: { type: "spring", stiffness: 300, damping: 30 },
        }}
        className="xmd:grid-cols-6 m-auto flex w-4/5 flex-wrap justify-center text-xs xxs:grid xxs:grid-cols-3 xxs:place-items-center xxs:gap-0 md:grid-cols-3 md:gap-5 xl:gap-y-0 xl:gap-x-10 xl:grid-cols-3 xl:w-full xl:-ml-6"
      >
        {project === 1
          ? techListJobTracker.map((tech) => {
              return (
                <div className={techBadgeClasses} key={tech.id}>
                  <img
                    src={tech.image}
                    alt={tech.title}
                    className=" min-h-[75px] w-[10ch]  xxs:h-[87px] xxs:w-[15ch] "
                  />
                  <p className="text-center font-semibold italic xxs:text-base">
                    {tech.title}
                  </p>
                </div>
              );
            })
          : project === 2
          ? techListYahtzee.map((tech) => {
              return (
                <div className={techBadgeClasses} key={tech.id}>
                  <img
                    src={tech.image}
                    alt={tech.title}
                    className=" min-h-[75px] w-[10ch]  xxs:h-[87px] xxs:w-[15ch] "
                  />
                  <p className="text-center font-semibold italic xxs:text-base">
                    {tech.title}
                  </p>
                </div>
              );
            })
          : techListQuarterMaster.map((tech) => {
              return (
                <div className={techBadgeClasses} key={tech.id}>
                  <img
                    src={tech.image}
                    alt={tech.title}
                    className=" min-h-[75px] w-[10ch] xxs:h-[87px] xxs:w-[15ch] "
                  />
                  <p className="text-center font-semibold italic xxs:text-base">
                    {tech.title}
                  </p>
                </div>
              );
            })}
      </motion.div>
    </div>
  );
};

export default TechUsed;
