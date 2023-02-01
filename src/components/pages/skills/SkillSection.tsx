import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import HTMLBadgeImage from "../../../styles/assets/images/HTMLBadgeImage.png";
import CSSBadgeImage from "../../../styles/assets/images/CSSBadgeImage.png";
import {
  allLanguages,
  allFrontEnd,
  allBackEnd,
  allMiscSkills,
} from "./skillData";
import TechBadge from "./TechBadge";
import SkillsNav from "./SkillsNav";
interface SkillSectionProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const SkillSection = ({ category, setCategory }: SkillSectionProps) => {
  let skillContainerClasses =
    "grid w-full grid-cols-3 place-items-center  gap-y-5 p-3";

  return (
    <>
      <div className="relative z-30 m-auto w-full overflow-hidden  rounded font-ibmplexsans font-semibold italic dark:bg-gray-900">
        <div className="absolute top-0 left-4 z-0  h-40 w-40 animate-blob rounded-full bg-purple-300 opacity-100 mix-blend-multiply blur-2xl filter dark:bg-purple-900 dark:opacity-40 lg:h-56 lg:w-56 lg:left-16  xl:w-40 xl:h-40"></div>
        <div className="absolute top-0 right-4 z-0  h-40 w-40 animate-blob rounded-full bg-yellow-300 opacity-50 mix-blend-multiply blur-2xl filter animation-delay-400 dark:bg-black dark:opacity-40 lg:h-56 lg:w-56 xl:w-40 xl:h-40"></div>
        <div className="absolute bottom-0 left-28 z-0  h-40 w-40 animate-blob rounded-full bg-red-300 opacity-70 mix-blend-multiply blur-2xl filter animation-delay-1200 dark:bg-red-900 dark:opacity-40 lg:left-64 lg:h-56 lg:w-56  xl:w-40 xl:h-40 xl:left-48"></div>
        <div className="mx-1 mb-1 h-full rounded-b bg-stone-50 pt-1 dark:bg-gray-800">
          <AnimatePresence mode="wait" initial={false}>
            {category === "languages" && (
              <motion.div
                key={1}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className={skillContainerClasses}
              >
                {allLanguages.map((skill, idx) => (
                  <TechBadge
                    image={skill.image}
                    title={skill.title}
                    key={idx}
                  />
                ))}
              </motion.div>
            )}

            {category === "frontend" && (
              <motion.div
                key={2}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className={skillContainerClasses}
              >
                {allFrontEnd.map((skill, idx) => (
                  <TechBadge
                    image={skill.image}
                    title={skill.title}
                    key={idx}
                  />
                ))}
              </motion.div>
            )}

            {category === "backend" && (
              <motion.div
                key={3}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className={skillContainerClasses}
              >
                {allBackEnd.map((skill, idx) => (
                  <TechBadge
                    image={skill.image}
                    title={skill.title}
                    key={idx}
                  />
                ))}
              </motion.div>
            )}

            {category === "misc" && (
              <motion.div
                key={4}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className={skillContainerClasses}
              >
                {allMiscSkills.map((skill, idx) => (
                  <TechBadge
                    image={skill.image}
                    title={skill.title}
                    smallText={skill.smallText}
                    key={idx}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default SkillSection;
