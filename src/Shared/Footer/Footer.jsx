import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import logo from "../../assets/logo/logo.png";

const Footer = () => {
  return (
    <div className="w-full bg-[#f5fcff]  bottom-0">
      <div className="md:px-[40px] md:h-[200px]  flex md:flex-row flex-col justify-evenly items-center">
        <div className="flex justify-center items-center md:gap-5 md:py-0 py-2">
          <div className="bg-white rounded-full">
            <img className="md:h-20 h-10" src={logo} alt="" />
          </div>
          <h2 className="md:text-3xl text-lg font-semibold">Md. Mahedi Hassan Shuvo</h2>
        </div>
        <div className="">
          <h4 className="md:text-xl font-medium text-center">
            Connect with me
          </h4>
          <hr className="border-2 md:mb-4 mb-2" />
          <div className="flex justify-center items-center md:gap-6 gap-3 md:mb-0 mb-2 md:text-2xl">
            <Link className="bg-slate-300 hover:text-black text-blue-600 p-3 rounded-full">
              <FaFacebook />
            </Link>
            <Link className="bg-slate-300 hover:text-black text-blue-600 p-3 rounded-full">
              <FaLinkedin />
            </Link>
            <Link className="bg-slate-300 hover:text-black text-blue-600 p-3 rounded-full">
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center ">
        <p className="py-4 md:text-base text-xs font-semibold">
          Copyright © 2024 - All right reserved by Md. Mahedi Hassan Shuvo
        </p>
      </div>
    </div>
  );
};

export default Footer;
