import React from "react";
import porject1 from "../../assets/Project/bistro.png";
import porject2 from "../../assets/Project/sport.png";
import porject3 from "../../assets/Project/furniro.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaGithub } from "react-icons/fa6";
import { LuLink } from "react-icons/lu";

import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="md:py-[40px] p-5 md:px-[100px] bg-[#f3f3f3]">
      <Helmet title="MH - Portfolio" />
      <div className="flex justify-between items-center md:mb-0 mb-5">
        <h2 className="md:text-5xl text-2xl font-bold">My Portfolio</h2>
        <Link
          target="black"
          to="https://github.com/mdmahedihassanshuvo"
          className="flex justify-center items-center gap-2 btn bg-[#e62872] text-white "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
            />
          </svg>
          <p className="md:text-base text-xs">Visit My Dribbble</p>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-10 md:mt-[100px]">
        <div className="bg-white rounded-lg">
          <div className="coverdiv text-white overflow-hidden ">
            <div className="md:w-full w-[350px] md:h-[250px] overflow-hidden relative cursor-pointer">
              <img
                className="portfolio-image w-full md:p-4  absolute left-0 right-0 top-0"
                src={porject1}
                alt="Bistro-boss"
              />
            </div>
          </div>
          <div className="bg-[#f7f7f7] md:m-4 p-4">
            <h3 className="text-2xl font-semibold ">Bistro Boss Restaurant</h3>
            <p className="text-sm text-slate-400 mt-2">E-commerce website</p>
            <div className="flex justify-between md:mt-3 items-center">
              <Link target="blank" to="https://github.com/mdmahedihassanshuvo/bistro-client" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-800 rounded-lg p-2 text-white text-base font-medium">Sourch code <FaGithub /></Link>
              <Link target="blank" to="https://bistro-60b2f.web.app/" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-800 rounded-lg p-2 text-white text-base font-medium">Live Link <LuLink /></Link>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg">
          <div className="coverdiv text-white overflow-hidden ">
            <div className="md:w-full w-[350px] md:h-[250px] overflow-hidden relative cursor-pointer">
              <img
                className="portfolio-image w-full md:p-4  absolute left-0 right-0 top-0"
                src={porject2}
                alt="Bistro-boss"
              />
            </div>
          </div>
          <div className="bg-[#f7f7f7] md:m-4 p-4">
            <h3 className="text-2xl font-semibold ">Sports Mania</h3>
            <p className="text-sm text-slate-400 mt-2">School management website</p>
            <div className="flex justify-between md:mt-3 items-center">
              <Link target="blank" to="https://github.com/mdmahedihassanshuvo/SportsMania" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-800 rounded-lg p-2 text-white text-base font-medium">Sourch code <FaGithub /></Link>
              <Link target="blank" to="https://sportsmania-f05ea.web.app/" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-800 rounded-lg p-2 text-white text-base font-medium">Live Link <LuLink /></Link>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg">
          <div className="coverdiv text-white overflow-hidden ">
            <div className="md:w-full w-[350px] md:h-[250px] overflow-hidden relative cursor-pointer">
              <img
                className="portfolio-image w-full md:p-4  absolute left-0 right-0 top-0"
                src={porject3}
                alt="Bistro-boss"
              />
            </div>
          </div>
          <div className="bg-[#f7f7f7] md:m-4 p-4">
            <h3 className="text-2xl font-semibold ">Furniro</h3>
            <p className="text-sm text-slate-400 mt-2">E-commerce website</p>
            <div className="flex justify-between md:mt-3 items-center">
              <Link target="blank" to="https://github.com/mdmahedihassanshuvo/furniro-client" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-800 rounded-lg p-2 text-white text-base font-medium">Sourch code <FaGithub /></Link>
              <Link target="blank" to="https://fastidious-cuchufli-17d13f.netlify.app/" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-800 rounded-lg p-2 text-white text-base font-medium">Live Link <LuLink /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
