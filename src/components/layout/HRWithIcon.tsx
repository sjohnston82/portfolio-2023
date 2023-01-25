import React from "react";

interface HRWithIconProps {
  icon: string;
}

const HRWithIcon = ({ icon }: HRWithIconProps) => {
  return (
    <>
      <div className="inline-flex w-full items-center justify-center">
        <hr className="my-8 h-1 w-64 rounded border-0 bg-gray-200 dark:bg-gray-700" />
          <div className="absolute left-1/2 -translate-x-1/2 bg-gray-200 px-4 dark:bg-gray-900">
            {icon}
          </div>
        
      </div>
    </>
  );
};

export default HRWithIcon;
