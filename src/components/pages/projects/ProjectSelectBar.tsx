import React from "react";
import { cn } from "../../../../lib/utils";

interface ProjectSelectProps {
  project: number;
  setProject: React.Dispatch<React.SetStateAction<number>>;
}

const ProjectSelectBar = ({ project, setProject }: ProjectSelectProps) => {
  return (
    <div
      className="m-auto flex w-full flex-wrap justify-center gap-4 rounded-md px-2 pb-2 shadow-sm"
      role="group"
    >
      <button
        className={cn(
          "rounded-xl border border-gray-900 bg-white px-3 py-2 font-semibold text-gray-900 shadow shadow-gray-900 hover:bg-celticblue hover:text-white",
          {
            "bg-celticblue text-white": project === 5,
          }
        )}
        onClick={() => setProject(5)}
      >
        Freelance
      </button>
      <button
        className={cn(
          "rounded-xl border border-gray-900 bg-white px-3 py-2 font-semibold text-gray-900 shadow shadow-gray-900 hover:bg-celticblue hover:text-white",
          {
            "bg-celticblue text-white": project === 1,
          }
        )}
        onClick={() => setProject(1)}
      >
        JobTracker
      </button>
      <button
        className={cn(
          "rounded-xl border border-gray-900 bg-white px-3 py-2 font-semibold text-gray-900 shadow shadow-gray-900 hover:bg-celticblue hover:text-white",
          {
            "bg-celticblue text-white": project === 2,
          }
        )}
        onClick={() => setProject(2)}
      >
        Yahtzee
      </button>
      <button
        className={cn(
          "rounded-xl border border-gray-900 bg-white px-3 py-2 font-semibold text-gray-900 shadow shadow-gray-900 hover:bg-celticblue hover:text-white",
          {
            "bg-celticblue text-white": project === 3,
          }
        )}
        onClick={() => setProject(3)}
      >
        Quartermaster
      </button>
      <button
        className={cn(
          "rounded-xl border border-gray-900 bg-white px-3 py-2 font-semibold text-gray-900 shadow shadow-gray-900 hover:bg-celticblue hover:text-white",
          {
            "bg-celticblue text-white": project === 4,
          }
        )}
        onClick={() => setProject(4)}
      >
        Frontend Mentor
      </button>
    </div>
  );
};

export default ProjectSelectBar;
