import React from "react";
import { motion } from "motion/react";

const Tooltip = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ stiffness: 20, delay: 0.1 }}
        exit={{ opacity: 0 }}
        className="fixed top-0 left-0 w-screen h-screen backdrop-blur-[8px] bg-stone-900 bg-opacity-70 z-[100000] pointer-events-none"
      >
        <motion.div
          className="absolute md:w-5/6 sm:w-10/12 xxxs:w-11/12 py-10 pointer-events-none left-1/2 -translate-x-1/2"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            damping: 10,
            stiffness: 200,
            delay: 0.1,
            duration: 0.1,
          }}
          exit={{ y: -10, opacity: 0 }}
        >
          <p className="font-urbanist lg:text-4xl md:text-3xl  font-normal text-white text-center left-1/2 -translate-x-1/2">
            I'm a{" "}
            {Math.floor(
              (new Date().getTime() - new Date(2002, 11, 7).getTime()) /
                (1000 * 3600 * 24 * 365)
            )}
            yo <span className="text-[#e2c898] ">passionate</span> and{" "}
            <span className="text-[#e2c898] ">enthusiastic </span>
            Computer Science student, born and raised in Algeria. I have a deep
            love for coding and problem-solving, and{" "}
            <span className="text-[#e2c898] ">
              I thrive on turning complex challenges into practical, real-world
              solutions
            </span>{" "}
            . My main focus is web development, where I'm constantly learning,
            building, and striving to{" "}
            <span className="text-[#e2c898] ">master the craft</span>. I'm
            driven by the goal of{" "}
            <span className="text-[#e2c898] ">achieving proficiency</span> in
            modern web technologies and{" "}
            <span className="text-[#e2c898] ">
              creating award-winning websites
            </span>
            . Along the way, I hope to{" "}
            <span className="text-[#e2c898] ">
              connect with like-minded developers, contribute to exciting
              projects
            </span>
            , and push my creative and technical boundaries to{" "}
            <span className="text-[#e2c898] underline decoration-double decoration-1 underline-offset-2">
              reach my absolute best
            </span>
            .
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Tooltip;
