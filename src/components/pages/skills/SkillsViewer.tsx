import React from "react";
import { motion } from "framer-motion";
import SkillSection from "./SkillSection";
import SkillsNav from "./SkillsNav";

interface SkillsViewerProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const SkillsViewer = ({ category, setCategory }: SkillsViewerProps) => {
  return (
    <div className="m-auto flex w-[90%] xs:w-4/5 flex-col rounded-lg border-2 border-white md:w-2/3 xmd:w-1/2 lg:mb-20 xl:w-[40%]">
      <SkillsNav category={category} setCategory={setCategory} />
      <SkillSection category={category} setCategory={setCategory} />
    </div>
  );
};

export default SkillsViewer;
