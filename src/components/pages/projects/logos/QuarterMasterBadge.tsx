import React from 'react'
import QuarterMasterLogo from '../../../../styles/assets/images/QuarterMasterLogo.png'

const QuarterMasterBadge = () => {
  return (
    <div className="m-auto min-h-[228px]  w-2/3 rounded-xl bg-quartermaster md:w-1/2">
      <img
        src={QuarterMasterLogo}
        alt="QuarterMaster Logo"
        className="m-auto  w-4/5 md:w-1/2"
      />
      <p className="mt-5 text-center font-alegreya text-3xl font-bold normal-case italic text-black sm:pb-5 sm:text-[36px]">
        QuarterMaster
      </p>
    </div>
  );
}

export default QuarterMasterBadge