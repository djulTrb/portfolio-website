import React from "react";

import { FaArrowDown } from "react-icons/fa6";

const HeroSection = ({ projectsRef, contactRef, setTooltipOn }) => {
  const handleScrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="lg:px-20 md:px-12 sm:px-8 xs:px-6 xxs:px-4 px-3 max-w-screen-2xl mx-auto py-20 overflow-x-hidden relative border-b border-stone-400">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 items-center">
        <div className="flex flex-col lg:col-span-2">
          <div className="lg:text-left text-center lg:text-[2.6rem] xl:text-[2.8rem] md:text-[2.2rem] sm:text-[2rem] xs:text-[1.85rem] xxs:text-[1.7rem] xxxs:text-[1.5rem] xxxs:leading-[1.7rem] xxs:leading-[2.2rem] xs:leading-[2rem] sm:leading-[2.7rem] lg:leading-[2.9rem] xl:leading-[3.2rem] text-zinc-950 font-medium font-urbanist relative cursor-default">
            <p className="capitalize">
              hi, my name is Tareb Djillali, a{" "}
              <span className="font-bold text-3xl xxxs:text-2xl xxs:text-[1.65rem] xs:text-3xl sm:text-[2.05rem] md:text-4xl lg:text-[2.7rem] xl:text-5xl relative">
                frontend developer
              </span>{" "}
              crafting modern, clean and User-friendly websites. Let's Build
              Amazing Things <span className="text-nowrap">Together !</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end justify-end size-full">
          <ul className="flex flex-col lg:size-full w-full h-20 relative text-right gap-2.5">
            <li
              className="absolute xl:top-12 xl:-right-4 lg:-right-5 lg:top-8 md:top-3 md:right-[5.7rem] xs:top-7 xs:right-10 xxs:top-5 xxs:right-5 xxxs:top-2 xxxs:right-5"
              onMouseEnter={() => {
                setTooltipOn(true);
              }}
              onMouseLeave={() => {
                setTooltipOn(false);
              }}
            >
              <button className="relative cursor-default  md_to_lg:text-3xl md:text-2xl sm:text-[1.3rem] xs:text-[1.15rem] xxs:text-[1.08rem] font-semibold text-nowrap bg-orange-200 bg-opacity-60 text-orange-600  rounded-full sm:px-8 px-6 sm:py-3 py-2  font-urbanist lg:rotate-[30deg] md_to_lg:max-lg:rotate-12 sm:-rotate-[20deg] xs:rotate-[17deg] xxxs:-rotate-[17deg]">
                About Me
              </button>
            </li>
            <li className="absolute xl:bottom-24 xl:left-0 lg:-left-9 lg:bottom-16 md_to_lg:-bottom-4 md:bottom-0 md:left-1/2 xxs:max-lg:-translate-x-1/2 xs:max-md:-bottom-3 xxs:bottom-7 xxxs:-bottom-5 xxxs:left-1/2 xxxs:max-xxs:-translate-x-16 ">
              <button
                onClick={handleScrollToProjects}
                className="relative flex items-center gap-1  md_to_lg:text-3xl md:text-2xl sm:text-[1.3rem] xs:text-[1.15rem] xxs:text-[1.08rem]  font-semibold text-nowrap bg-violet-200 bg-opacity-60 text-violet-600 rounded-full sm:px-8 px-6 sm:py-3 py-2  font-urbanist lg:-rotate-[16deg] md:max-lg:-rotate-[14deg] xxs:-rotate-[10deg] xxxs:rotate-[10deg]"
              >
                Projects{" "}
                <FaArrowDown className="-rotate-45 relative top-0.5 text-[75%]" />
              </button>
            </li>
            <li className="absolute xl:bottom-2 xl:right-24 lg:right-5 lg:-bottom-2 md:-bottom-2 md:max-lg:left-20 xxs:bottom-4 xs:max-md:left-6 xxs:max-xs:left-2 xxxs:max-xxs:left-5">
              <button
                onClick={handleScrollToContact}
                className="relative flex items-center gap-1 md_to_lg:text-3xl md:text-2xl sm:text-[1.3rem] xs:text-[1.15rem] xxs:text-[1.08rem] font-semibold text-nowrap bg-rose-200 bg-opacity-60 text-rose-600 rounded-full sm:px-8 px-6 sm:py-3 py-2 font-urbanist lg:rotate-6 md:max-lg:rotate-[15deg] xxs:rotate-[20deg] xxxs:-rotate-12"
              >
                Contact{" "}
                <FaArrowDown className="-rotate-45 relative top-0.5 text-[75%]" />
              </button>
            </li>
          </ul>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;
