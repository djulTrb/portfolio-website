import React from "react";
import { FaRegFaceSmileBeam } from "react-icons/fa6";

const FootNote = () => {
  return (
    <footer className="py-1.5 w-full text-lg text-center cursor-default bg-rose-200 text-rose-800 font-urbanist font-medium opacity-70 px-3 hidden sm:block">
      Appreciate the scroll !{" "}
      <span className="inline-block relative mx-0.5 top-[2px]">
        <FaRegFaceSmileBeam />
      </span>{" "}
      Crafted with care & love —{" "}
      <span className="text-nowrap">
        {new Date().getFullYear()} © DJILLALI TAREB{" "}
      </span>
    </footer>
  );
};

export default FootNote;
