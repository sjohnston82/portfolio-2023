import React from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="relative bg-gray-800 pb-20 ">
      <div className="skill-divider-top " id="contact">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className="shape-fill  fill-seagreen dark:fill-projectdark"
          ></path>
        </svg>
      </div>

      <div className="relative z-0 m-auto mt-28 w-[90%]  p-12">
        <motion.div className="relative z-50 m-auto w-[90%] text-center font-ibmplexsans text-5xl text-white xxs:w-3/4 xs:w-2/3 md:w-[400px] xl:text-6xl">
          Let's Get In Touch!
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.75,
              duration: 0.5,
              y: { type: "spring", stiffness: 300, damping: 30 },
            }}
            className="absolute -top-12 -left-10 -z-10 h-48 w-48 rounded-full  bg-celticblue sm:left-0 md:left-10 xl:w-56 xl:h-56 xl:left-0"
          ></motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative mx-6 mt-16 text-center text-3xl text-white"
      >
        <p className="m-auto text-center text-2xl text-white xs:w-3/4 lxl:w-2/3 lxl:text-3xl">
          Feel free to reach out to me with employment opportunities, questions,
          or if you want to collaborate on something!
        </p>
      </motion.div>
      <ContactForm />
    </div>
  );
};

export default Contact;
