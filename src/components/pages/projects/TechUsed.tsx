import React, { useContext } from "react";
import { PortfolioContext } from "../../../context/PortfolioContext";
import { motion } from "framer-motion";

import JavascriptBadgeImage from "../../../styles/assets/images/JavascriptBadgeImage.svg";
import ReactBadgeImage from "../../../styles/assets/images/ReactBadgeImage.png";
import SassBadgeImage from "../../../styles/assets/images/SassBadgeImage.png";
import AWSBadgeImage from "../../../styles/assets/images/AWSBadgeImage.png";
import MongoDBBadgeImage from "../../../styles/assets/images/MongoDBBadgeImage.svg";
import NodejsBadgeImage from "../../../styles/assets/images/NodejsBadgeImage.png";
import CSSBadgeImage from "../../../styles/assets/images/CSSBadgeImage.png";
import SocketioBadgeImageDark from "../../../styles/assets/images/SocketIoBadgeImageDark.png";
import ReactEmailBadgeImage from '../../../styles/assets/images/ReactEmailBadgeImage.png';
import NextjsBadgeImage from '../../../styles/assets/images/NextjsBadgeImage.png';
import TrpcBadgeImage from '../../../styles/assets/images/TrpcBadgeImage.svg';
import TypescriptBadgeImage from '../../../styles/assets/images/TypescriptBadgeImage.png';
import PrismaBadgeImage from '../../../styles/assets/images/PrismaBadgeImage.png';
import TailwindBadgeImage from '../../../styles/assets/images/TailwindBadgeImage.png';

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
    { title: "TypeScript", image: TypescriptBadgeImage, id: 1 },
    { title: "NextJS", image: NextjsBadgeImage, id: 2 },
    { title: "trpc", image: TrpcBadgeImage, id: 3 },
    { title: "Prisma", image: PrismaBadgeImage, id: 4 },
    { title: "Tailwind", image: TailwindBadgeImage, id: 5 },
    { title: "React-Email", image: ReactEmailBadgeImage, id: 6 },
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
    <div className="xl:w-2/3 2xl:w-full">
      <p className="m-auto my-3 w-[9ch] border-b-2 border-jobtracker text-center text-xl font-semibold dark:border-jobtrackeraccentdark 2xl:text-3xl">
        Tech Used
      </p>
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          y: { type: "spring", stiffness: 300, damping: 30 },
        }}
        className="m-auto flex w-4/5 flex-wrap justify-center text-xs xxs:grid xxs:grid-cols-3 xxs:place-items-center xxs:gap-0 md:grid-cols-3 md:gap-5 xmd:grid-cols-6 xl:m-auto  xl:ml-auto  xl:flex xl:flex-row xl:w-full xl:items-center xl:justify-center xl:gap-5 2xl:grid 2xl:w-[90%] 2xl:grid-cols-6 2xl:gap-5 :flex"
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
