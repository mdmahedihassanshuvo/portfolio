import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="md:p-[40px] p-5 mx-auto">
      <div className="">
        <h3 className="text-center md:text-4xl text-2xl font-bold">Contact Us</h3>
        <hr className="w-[250px] mx-auto mt-2 border-2" />
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center md:gap-5 gap-3 md:mt-5 mt-3">
        <button className="flex justify-center items-center gap-2 btn bg-blue-600 text-white hover:bg-slate-500">
          <FaPhoneAlt /> +880 1719 062066
        </button>
        <button title="Send me an email" className="flex justify-center items-center gap-2 btn bg-blue-600 text-white hover:bg-slate-500">
          <MdMarkEmailUnread /> mhshuvo3050@gmail.com
        </button>
      </div>
      <div className="md:mt-5 mt-3">
        <div className="flex justify-center items-center md:gap-6 gap-3 md:text-2xl">
          <Link to="https://www.facebook.com/shuvo6795" className="bg-white text-blue-600 p-3 rounded-full hover:text-black">
            <FaFacebook />
          </Link>
          <Link to="https://www.linkedin.com/in/md-mahedi-hassan-shuvo/" className="bg-white text-blue-600 p-3 rounded-full hover:text-black">
            <FaLinkedin />
          </Link>
          <Link to="https://github.com/mdmahedihassanshuvo" className="bg-white text-blue-600 p-3 rounded-full hover:text-black">
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
