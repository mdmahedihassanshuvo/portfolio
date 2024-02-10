import React from "react";
import person from "../../../assets/Person/person2.png";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  const resume = "See Resume >";
  return (
    <div className="banner md:px-[80px] p-[20px] w-full flex flex-col-reverse md:flex-row justify-center items-center">
      <div className="text-white md:w-1/2 md:ps-3 md:space-y-4 space-y-2 text-center md:text-start">
        <h4 className="md:text-xl text-sm font-medium">MD. MAHEDI HASSAN SHUVO</h4>
        <h2 className="md:text-5xl text-xl font-bold">I’m a Frontend Web Developer</h2>
        <p className="md:text-base font-medium text-xs">
          I’m a highly motivated and creative person. who can make you happy to
          develop an amazing website at an affordable price. I'm available for
          freelance work.
        </p>
        <Link className="btn btn-outline text-white hover:bg-blue-600  rounded-full md:text-lg text-sm">{resume}</Link>
      </div>
      <div className="md:w-1/2 flex justify-center items-center md:mb-0 mb-4">
        <img className="rounded-full md:h-96 h-40" src={person} alt="" />
      </div>
    </div>
  );
};

export default Banner;
