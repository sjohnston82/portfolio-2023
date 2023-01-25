import React from "react";
import PlaceholderImage from "../../../styles/assets/images/geneshalit.jpg";

const LandingPic = () => {
  return (
    <div className="pt-10 ">
      <div className="relative m-auto mt-10 w-60 ">
        <div className="absolute top-0 left-1 z-0 h-60 w-60 rounded-full bg-maximumblue opacity-70 mix-blend-multiply"></div>
        <div className="absolute top-0 -left-1 z-0 h-60 w-60 rounded-full bg-celticblue opacity-70 mix-blend-multiply"></div>
        <div className="absolute -top-1 -left-0 z-0 h-60 w-60 rounded-full bg-yellow-100 opacity-70 mix-blend-multiply"></div>
        <div className="absolute top-1 -left-0 z-0 h-60 w-60 rounded-full bg-red-100 opacity-70 mix-blend-multiply"></div>
        <img
          src={PlaceholderImage}
          alt="a pic of me"
          className="relative z-10 m-auto h-60 w-60 rounded-full "
        />
      </div>
    </div>
  );
};

export default LandingPic;
