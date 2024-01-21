import React from "react";
import person from "../../../assets/Person/person2.png";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  const resume = "See Resume >";
  return (
    <div className="banner md:px-[80px] w-full flex justify-center items-center">
      <div className="text-white md:w-1/2 md:ps-3 space-y-4">
        <h4 className="text-xl font-medium">MD. MAHEDI HASSAN SHUVO</h4>
        <h2 className="text-5xl font-bold">I’m a Frontend Web Developer</h2>
        <p className="text-base font-medium">
          I’m a highly motivated and creative person. who can make you happy to
          develop an amazing website at an affordable price. I'm available for
          freelance work.
        </p>
        <Link className="btn btn-outline text-white hover:bg-blue-600  rounded-full text-lg">{resume}</Link>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <img className="rounded-full md:h-96" src={person} alt="" />
      </div>
    </div>
  );
};

export default Banner;
