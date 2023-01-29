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
        <div className={textClasses} >
          {text}
        </div>
      </div>
    </>
  );
};

export default HRWithText;
