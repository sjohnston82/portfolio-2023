import React from "react";

const QuarterMasterBadge = () => {
  return (
    <div className="w-2/3 m-auto min-h-[228px] rounded-xl bg-[#121212] p-4 md:w-1/2 2xl:w-4/5">
      <img
        src="https://res.cloudinary.com/dxgmhaz8i/image/upload/v1687864635/forkspoondarkfix2_vtzqvz.png"
        alt="QuarterMaster Logo"
        className="m-auto  w-4/5 md:w-1/2"
      />
      <p className="mt-5 text-center font-ALoveofThunder text-2xl md:text-3xl font-bold normal-case italic text-slate-300 sm:pb-5 sm:text-[36px]">
        Quartermaster
      </p>
    </div>
  );
};

export default QuarterMasterBadge;
