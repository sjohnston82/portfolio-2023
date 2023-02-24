import React from "react";
import LandingImage from "../../../styles/assets/images/landingpic2small.webp";

const LandingPic = () => {
  return (
    <div className="pt-10 xl:pt-0 ">
      <div className="relative m-auto mt-10 w-60  lg:w-80 xl:w-96 ">
        <div className="absolute top-0 left-1 z-0 h-60 w-60 rounded-full bg-maximumblue opacity-70 mix-blend-multiply lg:h-80 lg:w-80 xl:h-96 xl:w-96"></div>
        <div className="absolute top-0 -left-1 z-0 h-60 w-60 rounded-full bg-celticblue opacity-70 mix-blend-multiply lg:h-80 lg:w-80 xl:h-96 xl:w-96"></div>
        <div className="absolute -top-1 -left-0 z-0 h-60 w-60 rounded-full bg-yellow-100 opacity-70 mix-blend-multiply lg:h-80 lg:w-80 xl:h-96 xl:w-96"></div>
        <div className="absolute top-1 -left-0 z-0 h-60 w-60 rounded-full bg-red-100 opacity-70 mix-blend-multiply lg:h-80 lg:w-80 xl:h-96 xl:w-96"></div>
        <img
          src={LandingImage}
          alt="a pic of me"
          className="relative z-10 m-auto h-60 w-60 rounded-full lg:h-80 lg:w-80 xl:h-96 xl:w-96 "
        />
      </div>
    </div>
  );
};

export default LandingPic;
