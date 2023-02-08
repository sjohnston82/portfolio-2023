import React from "react";
import YahtzeeLogo from "../../../../styles/assets/images/YahtzeeLogo.png";

const YahtzeeBadge = () => {
  return (
    <div className="yahtzee-bg m-auto min-h-[228px] w-2/3 rounded-xl p-2 md:w-1/2 2xl:w-4/5">
      <img
        src={YahtzeeLogo}
        alt="Yahtzee Logo"
        className="m-auto w-4/5 md:w-1/2"
      />
      <h1 className="mt-4 text-center font-['Revue'] text-3xl font-bold normal-case text-white drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,8)] sm:pb-5 sm:text-[36px]">
        Yahtzee!
      </h1>
    </div>
  );
};

export default YahtzeeBadge;
