import React from "react";
import porject1 from "../../assets/Project/bistro.png";
import porject2 from "../../assets/Project/sport.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Portfolio = () => {
  return (
    <div className="md:py-[40px] p-5 md:mx-[100px]">
      <Helmet title="MH - Portfolio" />
      <div className="flex justify-between items-center md:mb-0 mb-5">
        <h2 className='md:text-5xl text-2xl font-bold'>My Portfolio</h2>
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
        <div className="text-white card w-[350px] border overflow-hidden relative transition ease-in duration-200 transform hover:-translate-y-2 rounded-2xl shadow-2xl hover:shadow-2xl">
          <figure>
            <img className=" w-full p-2" src={porject1} alt="Bistro-boss" />
          </figure>
          <div className="card-body w-full h-full rounded-2xl  absolute bg-black bg-opacity-60 opacity-0 hover:opacity-100 inset-0 transition-opacity duration-200">
            <h2 className="card-title font-bold">
              BistroBoss
              <Link
                target="blank"
                to="https://bistro-60b2f.web.app/"
                className="badge badge-secondary"
              >
                Live Link
              </Link>
            </h2>
            <p className="text-lg">If you interested view source code.</p>
            <div className="card-actions justify-end">
              <Link
                target="blank"
                to="https://github.com/mdmahedihassanshuvo/bistro-client"
                className="badge badge-secondary"
              >
                Client
              </Link>
              <Link
                target="blank"
                to="https://github.com/mdmahedihassanshuvo/bistro-server"
                className="badge badge-secondary"
              >
                Server
              </Link>
            </div>
          </div>
        </div>
        <div className="text-white card w-[350px] border overflow-hidden relative transition ease-in duration-200 transform hover:-translate-y-2 rounded-2xl shadow-2xl hover:shadow-2xl">
          <figure>
            <img className=" w-full p-2" src={porject2} alt="Bistro-boss" />
          </figure>
          <div className="card-body w-full h-full rounded-2xl  absolute bg-black bg-opacity-60 opacity-0 hover:opacity-100 inset-0 transition-opacity duration-200">
            <h2 className="card-title font-bold">
              Sports Mania
              <Link
                to="https://sportsmania-f05ea.web.app/"
                target="blank"
                className="badge badge-secondary"
              >
                Live Link
              </Link>
            </h2>
            <p className="text-lg">If you interested view source code.</p>
            <div className="card-actions justify-end">
              <Link
                to="https://github.com/mdmahedihassanshuvo/SportsMania"
                target="blank"
                className="badge badge-secondary"
              >
                Client
              </Link>
              <Link
                to="https://github.com/mdmahedihassanshuvo/SportsMania-server"
                target="blank"
                className="badge badge-secondary"
              >
                Server
              </Link>
            </div>
          </div>
        </div>
        <div className="text-white card w-[350px] border overflow-hidden relative transition ease-in duration-200 transform hover:-translate-y-2 rounded-2xl shadow-2xl hover:shadow-2xl">
          <figure>
            <img className=" w-full p-2" src={porject2} alt="Bistro-boss" />
          </figure>
          <div className="card-body w-full h-full rounded-2xl  absolute bg-black bg-opacity-60 opacity-0 hover:opacity-100 inset-0 transition-opacity duration-200">
            <h2 className="card-title font-bold">
              Sports Mania
              <Link target="blank" className="badge badge-secondary">
                Live Link
              </Link>
            </h2>
            <p className="text-lg">If you interested view source code.</p>
            <div className="card-actions justify-end">
              <Link target="blank" className="badge badge-secondary">
                Client
              </Link>
              <Link target="blank" className="badge badge-secondary">
                Server
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
