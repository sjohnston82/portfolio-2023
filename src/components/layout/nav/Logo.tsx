import React from "react";

const Logo = () => {
  return (
    <a href="#home">
      <div className="absolute top-[2px] left-4 lg:-top-1 ">
        <p className="relative font-notosans text-[32px] lg:text-[40px] italic text-maximumblue ">
          S
          <span className="absolute top-2 left-3 text-4xl text-celticblue lg:text-[44px] lg:top-3 lg:left-4">
            J
          </span>
        </p>
      </div>
    </a>
  );
};

export default Logo;
