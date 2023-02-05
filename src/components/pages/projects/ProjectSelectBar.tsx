import React from "react";

interface ProjectSelectProps {
  project: number;
  setProject: React.Dispatch<React.SetStateAction<number>>;
}

const ProjectSelectBar = ({ project, setProject }: ProjectSelectProps) => {
  return (
    <div
      className="m-auto flex w-full justify-center rounded-md shadow-sm "
      role="group"
    >
      <button
        onClick={() => setProject(1)}
        className={
          project === 1
            ? "rounded-l-lg border  border-gray-900 bg-celticblue px-4 py-2 text-sm font-medium text-white hover:bg-celticblue hover:text-white focus:z-10 focus:bg-celticblue focus:text-white focus:ring-gray-500 dark:border-white  dark:bg-celticblue dark:text-white xs:text-base sm:text-xl lxl:text-2xl "
            : "rounded-l-lg border border-gray-900 bg-stone-50 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-celticblue hover:text-white focus:z-10 focus:bg-celticblue focus:text-white focus:ring-gray-500 dark:border-white  dark:bg-projectnavdark dark:text-white dark:hover:bg-projectdark dark:hover:text-white dark:focus:bg-projectnavdark xs:text-base sm:text-xl lxl:text-2xl"
        }
        type="button"
      >
        JobTracker
      </button>

      <button
        className={
          project === 2
            ? "border-t border-b border-gray-900 bg-celticblue px-4 py-2 text-sm font-medium text-white hover:bg-celticblue hover:text-white focus:z-10 focus:bg-celticblue focus:text-white focus:ring-gray-500 dark:border-white  dark:bg-celticblue xs:text-base sm:text-xl lxl:text-2xl"
            : "border-t border-b border-gray-900 bg-stone-50 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-celticblue hover:text-white focus:z-10 focus:bg-celticblue focus:text-white focus:ring-gray-500 dark:border-white  dark:bg-projectnavdark dark:text-white dark:hover:bg-projectdark dark:hover:text-white dark:focus:bg-projectnavdark xs:text-base sm:text-xl lxl:text-2xl "
        }
        type="button"
        onClick={() => setProject(2)}
      >
        Yahtzee
      </button>
      <button
        className={
          project === 3
            ? "rounded-r-md border border-gray-900 bg-celticblue px-4 py-2 text-sm font-medium text-white hover:bg-celticblue hover:text-white focus:z-10 focus:bg-celticblue focus:text-white focus:ring-gray-500 dark:border-white  dark:bg-celticblue xs:text-base sm:text-xl lxl:text-2xl"
            : "rounded-r-md border border-gray-900 bg-stone-50 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-celticblue hover:text-white focus:z-10 focus:bg-celticblue focus:text-white focus:ring-gray-500 dark:border-white  dark:bg-projectnavdark dark:text-white dark:hover:bg-projectdark dark:hover:text-white dark:focus:bg-projectnavdark xs:text-base sm:text-xl lxl:text-2xl"
        }
        type="button"
        onClick={() => setProject(3)}
      >
        QuarterMaster
      </button>
    </div>
  );
};

export default ProjectSelectBar;
