import React from "react";
import { motion } from "framer-motion";

interface SkillsNavProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const SkillsNav = ({ category, setCategory }: SkillsNavProps) => {
  let navTabClasses =
    "relative text-center text-sm z-0 pb-2 mt-1 cursor-pointer rounded-t bg-stone-50 p-1 w-full  font-semibold dark:bg-gray-800";

  let navTabSelectedClasses =
    "relative text-center text-sm pb-2 z-10 mt-1 cursor-pointer rounded-t bg-[#eee] p-1 w-full  font-semibold dark:bg-gray-700";
  let underlineClasses =
    "underlined text-center absolute bottom-1 left-0 right-0 z-50 h-[2px] bg-blue-900 dark:bg-zinc-100";
  return (
    <nav className="-mb-[4px] flex w-full rounded-t dark:bg-gray-900">
      <ul className="mx-1 flex w-full flex-grow flex-nowrap items-center justify-center gap-x-[2px]">
        <li
          onClick={() => setCategory("languages")}
          className={
            category === "languages" ? navTabSelectedClasses : navTabClasses
          }
        >
          Languages{" "}
          {category === "languages" ? (
            <motion.div
              className={underlineClasses}
              layoutId="underlined"
            ></motion.div>
          ) : null}
        </li>
        <li
          onClick={() => setCategory("frontend")}
          className={
            category === "frontend" ? navTabSelectedClasses : navTabClasses
          }
        >
          Front-End{" "}
          {category === "frontend" ? (
            <motion.div
              className={underlineClasses}
              layoutId="underlined"
            ></motion.div>
          ) : null}
        </li>
        <li
          onClick={() => setCategory("backend")}
          className={
            category === "backend" ? navTabSelectedClasses : navTabClasses
          }
        >
          Back-End{" "}
          {category === "backend" ? (
            <motion.div
              className={underlineClasses}
              layoutId="underlined"
            ></motion.div>
          ) : null}
        </li>
        <li
          onClick={() => setCategory("misc")}
          className={
            category === "misc" ? navTabSelectedClasses : navTabClasses
          }
        >
          Misc.{" "}
          {category === "misc" ? (
            <motion.div
              className={underlineClasses}
              layoutId="underlined"
            ></motion.div>
          ) : null}
        </li>
      </ul>
    </nav>
  );
};

export default SkillsNav;
