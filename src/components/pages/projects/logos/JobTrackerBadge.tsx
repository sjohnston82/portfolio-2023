import React from 'react'

import JobTrackerLogo from '../../../../styles/assets/images/JobTrackerLogo.png'

const JobTrackerBadge = () => {
  return (
    <div className="m-auto min-h-[228px]  w-2/3 rounded-xl bg-jobtracker md:w-1/2 2xl:w-4/5">
      <img
        src={JobTrackerLogo}
        alt="Job Tracker Logo"
        className="m-auto w-2/3 md:w-1/2"
      />
      <p className="font-['Titillium Web'] mt-4 text-center text-3xl font-bold normal-case text-white  sm:pb-5 sm:text-[36px]">
        Job<span className="text-[#f9b636]">Tracker</span>
      </p>
    </div>
  );
}

export default JobTrackerBadge