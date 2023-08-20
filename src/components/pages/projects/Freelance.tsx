import React from "react";
import { motion } from "framer-motion";
import { pageTransitionSideVariants } from "../../helpers/animations/variants";
import KruegerandCoImage from "../../../styles/assets/images/kruegerandco-desktop.webp";

const Freelance = () => {
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
      className="py-16 sm:px-12 md:px-16 lg:px-20"
    >
      {/* <h1 className="py-6 text-center text-3xl">Freelance Work</h1> */}
      <div className="">
        <h2 className="text-center text-xl font-semibold xl:text-2xl">
          Krueger & Co., LLC.
        </h2>
        <p className="text-center text-sm italic">July 2023 - August 2023</p>
        <p className="mb-6 text-center">
          <a
            href="https://kruegerandco.com"
            target="_blank"
            className=" text-blue-500"
          >
            kruegerandco.com
          </a>
        </p>
        <img
          src={KruegerandCoImage}
          alt="Krueger and Co Landing Page"
          className="mx-auto px-4"
        />
        <p className="px-4 py-4 lg:mx-auto lg:w-2/3 xlx:w-1/2">
          Designed, developed and deployed website for Krueger & Co., LLC, a
          home improvement and renovations company based out of Fenton, MI.{" "}
        </p>
        <section className="lg:flex xlx:mx-auto xlx:w-2/3">
          <div className="lg:flex lg:w-1/2 lg:flex-col lg:justify-start ">
            <h3 className="text-center text-lg font-semibold underline">
              Features
            </h3>
            <ul className="mx-auto w-2/3 list-inside list-disc">
              <li className="">Fully responsive</li>
              <li className="">Search engine optimized</li>
              <li className="">
                React-grid-gallery integrated with yet-another-react-lightbox
                library and next/image for fast and seamless image galleries
              </li>
              <li className="">Custom logo work to client's specifications</li>
              <li className="">Deployed on AWS Amplify</li>
            </ul>
          </div>
          <div className="lg:flex lg:w-1/2 lg:flex-col lg:justify-start ">
            <h2 className="pt-4 text-center text-lg font-semibold underline lg:pt-0">
              Tech Stack
            </h2>
            <ul className="mx-auto w-2/3 list-inside list-disc">
              <li className="">NextJS App Router</li>
              <li className="">TailwindCSS</li>
              <li className="">Typescript</li>
              <li className="">
                Utilized leaflet and OpenStreetMap API for service area map
              </li>
              <li className="">
                EmailJS, react-hook-form and zod for work orders
              </li>
            </ul>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Freelance;
