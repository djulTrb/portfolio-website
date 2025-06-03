import React from "react";
import { useTransform, motion } from "motion/react";
import { IoMdArrowRoundUp } from "react-icons/io";
import mockup from "../assets/pictures/mockup/mockupNotedProject.webp";

const ProjectNoted = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [4, 0]);
  const usedTech = [
    "react js",
    "redux toolkit",
    "react query",
    "react router",
    "scss",
    "tailwind",
    "tiptap editor",
    "supabase",
    "framer motion",
    "react helmet",
    "apex charts",
    "nivo",
    "react hook form",
    "Zod",
  ];

  return (
    <motion.section
      style={{ scale, rotate }}
      className="sticky top-0 h-screen grid md:grid-cols-9 xxxs:max-md:grid-rows-11 md:grid-rows-1"
    >
      <figure className="h-full md:col-start-1 md:row-span-4 xxxs:max-md:row-start-1 md:row-start-1 xxxs:max-md:row-span-4 md:col-span-4 w-full bg-rose-400 ">
        <img
          loading="lazy"
          fetchPriority="low"
          decoding="async"
          src={mockup}
          alt="a picture to represent the project 'noted''"
          className="h-full w-full object-cover"
        />
      </figure>
      <section className="md:col-start-5 col-span-full row-span-full xxxs:max-md:row-start-5 xxxs:max-md:row-span-full md:row-start-1 md:row-span-full  bg-[#fff5ee] lg:px-14 md:px-4 xxs:max-md:px-4 xxxs:px-2 md:pt-20 xxs:pt-7 xxxs:pt-4">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-4xl xxxs:max-xs:text-2xl font-urbanist font-medium relative flex items-center">
            <span className="sm:size-12 size-8 rounded-full sm:text-[80%] text-[60%] mr-2 bg-stone-200 text-stone-600 flex items-center justify-center">
              2
            </span>{" "}
            Noted{" "}
          </h1>{" "}
          <a
            href="https://app-noted.netlify.app/"
            target="_blank"
            className="px-4 py-1.5 xxxs:max-xxs:px-3 xxxs:max-xxs:text-sm font-urbanist font-semibold bg-rose-200 text-rose-800 rounded-full flex items-center gap-0.5"
          >
            live demo <IoMdArrowRoundUp className="rotate-45" />
          </a>
        </div>

        <div className="md:mt-20 mt-8 flex flex-col md:gap-8 gap-7 font-urbanist lg:text-lg xl:text-xl">
          <div className="text-stone-700 ">
            <h4 className="text-stone-900 font-semibold float-left mr-1">
              <span className=" underline underline-offset-1 ">
                Description:{" "}
              </span>{" "}
            </h4>
            <p>
              A note-taking app with Markdown support, intuitive design, and
              activity-tracking stats.
            </p>
          </div>
          <div className="text-stone-700">
            <ul className="flex items-center gap-2 xxxs:max-xs:gap-x-1  flex-wrap">
              <li>
                <h4 className="text-stone-900 font-semibold underline underline-offset-1 mr-1 text-nowrap">
                  Used Tech:
                </h4>
              </li>
              {usedTech.map((skill, ind) => {
                return (
                  <li
                    key={ind}
                    className="xs:px-3 px-1.5 xxxs:max-xs:py-1 xxxs:max-xs:text-xs text-[0.9rem] xl:text-base xl:py-0.5 capitalize relative top-0.5 text-stone-700 italic font-medium bg-stone-300 bg-opacity-80 rounded-full"
                  >
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="text-stone-700 flex gap-2">
            <span className="text-stone-900 font-semibold underline underline-offset-1">
              Links:{" "}
            </span>

            <a
              target="_blank"
              href="https://github.com/djulTrb/Noted-App"
              className="underline decoration-dotted decoration-rose-700 text-rose-700 text-base flex items-center"
            >
              Github Repo <IoMdArrowRoundUp className="rotate-45" />
            </a>
            <a
              target="_blank"
              href="https://www.behance.net/gallery/224019659/Noted-App"
              className="underline decoration-dotted decoration-rose-700 text-rose-700  text-base flex items-center"
            >
              Behance <IoMdArrowRoundUp className="rotate-45" />
            </a>
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default ProjectNoted;
