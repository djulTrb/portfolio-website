import React from "react";
import { BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";

const ContactSection = ({ reference }) => {
  return (
    <section
      ref={reference}
      className="lg:px-28 md:px-14 sm:px-10 xs:px-8 px-3 md:py-12 py-6 border-t border-stone-500 "
    >
      <div className="grid grid-cols-1 grid-rows-1 md:justify-center items-center md:grid-cols-2 xxxs:max-md:grid-rows-3">
        <h1 className="md:grid-rows-full  2xl:text-[8rem] xl:text-[7rem] lg:text-[5.4rem] md:text-[4rem] xxs:text-[3rem] xxxs:text-[2.2rem] xxxs:max-md:text-center md:leading-[0.9] font-urbanist font-bold xl:pl-[5%] 2xl:pl-[8%] 2xl:pr-[5%]  lg:pl-[4%] min-[900px]:pl-[17%] md:pl-[9%] cursor-default md:py-16 py-5">
          Let's keep in touch
        </h1>
        <ul className="md:grid-rows-full xxxs:max-md:row-span-2 grid-cols-2 flex xxxs:max-[360px]:px-0 flex-col justify-between xxxs:max-md:gap-4 gap-3 md:pl-8 ">
          <li className="font-urbanist md:text-xl text-lg xl:text-2xl col-span-full hover:bg-stone-200 rounded-xl border border-stone-300 group">
            <a
              href="mailto:djitrb100@gmail.com"
              target="_blank"
              className=" gap-2.5 grid grid-cols-5 w-full h-full lg:py-4 py-3 rounded-xl group-hover:bg-red-500 group-active:bg-red-500"
            >
              <BiLogoGmail className="text-red-600 text-[1.65rem] col-span-1 justify-self-center group-hover:text-white group-active:text-white" />{" "}
              <span className="col-span-3 group-hover:text-white group-active:text-white ">
                djitrb100@gmail.com
              </span>
            </a>
          </li>
          <li className="font-urbanist md:text-xl text-lg xl:text-2xl col-span-full hover:bg-stone-200 group rounded-xl border border-stone-300">
            <a
              href="https://www.linkedin.com/in/djillali-tareb-b47040361 "
              target="_blank"
              className=" gap-2.5 grid grid-cols-5 w-full h-full lg:py-4 py-3 rounded-xl group-hover:bg-sky-500 group-active:bg-sky-500"
            >
              <BiLogoLinkedin className="text-sky-600 text-[1.65rem] col-span-1 justify-self-center group-hover:text-white group-active:text-white" />{" "}
              <span className="col-span-3 group-hover:text-white group-active:text-white ">
                Djillali Tareb
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;
