import React from 'react'
import { motion } from 'framer-motion'
import { pageTransitionSideVariants } from '../../helpers/animations/variants';
import { challengeData } from './challengeData';
import ChallengeCard from './ChallengeCard';

const FrontendMentor = () => {
  return (
    <motion.div
      variants={pageTransitionSideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      }}
      className="w-full py-16 lg:px-20"
    >
      <h1 className="text-center text-3xl pb-8">Frontend Mentor Challenges</h1>
      <h3 className="mx-auto w-3/4 text-center xl:w-1/2 pb-8">
        Frontend Mentor is a site for solving front-end challenges to build projects in a
        real-life workflow, using whichever tools you like. Each challenge is
        styled for 375px and 1440px.
      </h3>
      <div className="my-6 flex flex-col gap-4 lg:flex-row lg:flex-wrap">
        {challengeData.map((challenge) => (
          <ChallengeCard
            title={challenge.title}
            description={challenge.description}
            image={challenge.image}
            techUsed={challenge.techUsed}
            solutionUrl={challenge.solutionUrl}
            liveUrl={challenge.liveUrl}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default FrontendMentor