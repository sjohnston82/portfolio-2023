import React from "react";

interface HRWithTextProps {
  text: string;
  HRClasses: string;
  textClasses: string;
  containerClasses: string;
}

const HRWithText = ({ text, HRClasses, textClasses, containerClasses }: HRWithTextProps) => {
  return (
    <>
      <div className={containerClasses}>
        <hr className={HRClasses} />
        <div className={textClasses}>
          <p className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{text}</p>
        </div>
      </div>
    </>
  );
};

export default HRWithText;
