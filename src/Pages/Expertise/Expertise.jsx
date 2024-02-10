import React, { useState } from "react";
import skill1 from "../../assets/skills/skill1.png";
import skill2 from "../../assets/skills/skill2.png";
import skill3 from "../../assets/skills/skill3.png";
import skill4 from "../../assets/skills/skill4.svg";
import skill5 from "../../assets/skills/skill5.png";
import skill6 from "../../assets/skills/skill6.png";
import skill7 from "../../assets/skills/skill7.png";
import skill8 from "../../assets/skills/skill8.png";
import skill9 from "../../assets/skills/skill9.png";
import skill10 from "../../assets/skills/skill10.png";
import skill11 from "../../assets/skills/skill11.png";
import "./Expertise.css";
import { Helmet } from "react-helmet-async";

const Expertise = () => {
  const [active, setActive] = useState(true);
  const [enable, setEnable] = useState(false);
  const handleActive = () => {
    setActive(false);
    setEnable(true);
    const button = document.getElementById("seeAll");
    button.style.display = "none";
  };
  return (
    <div className="md:py-[40px] p-5 mx-auto md:mx-[100px] relative">
      <Helmet title="MH - My Skills" />
      <h3 className="text-4xl font-bold">
        My <span className="text-blue-600">Skills</span>
      </h3>
      <hr className="border-2 md:mb-0 mb-5" />
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-3 md:mt-[80px]">
        <div className="flex flex-col justify-between items-center md:w-56 p-4 rounded-xl md:shadow-2xl border card">
          <img className="w-24" src={skill1} alt="" />
          <h4 className="text-xl font-semibold">HTML 5</h4>
        </div>
        <div className="flex flex-col justify-between items-center md:w-56 p-4 rounded-xl md:shadow-2xl border card">
          <img className="w-24 p-2" src={skill2} alt="" />
          <h4 className="text-xl font-semibold">CSS 3</h4>
        </div>
        <div className="flex flex-col justify-between items-center md:w-56 p-4 rounded-xl md:shadow-2xl border card">
          <img className="w-24" src={skill3} alt="" />
          <h4 className="text-xl font-semibold">Bootstrap</h4>
        </div>
        <div className="flex flex-col justify-between items-center md:w-56 p-4 rounded-xl md:shadow-2xl border card">
          <img className="w-24" src={skill4} alt="" />
          <h4 className="text-xl font-semibold">Tailwind</h4>
        </div>
        <div className="flex flex-col justify-between items-center md:w-56 p-4 rounded-xl md:shadow-2xl border card">
          <img className="w-24" src={skill5} alt="" />
          <h4 className="text-xl font-semibold">JavaScript</h4>
        </div>
        <div className="flex flex-col justify-between items-center md:w-56 p-4 rounded-xl md:shadow-2xl border card">
          <img className="w-24" src={skill6} alt="" />
          <h4 className="text-xl font-semibold">Jquery</h4>
        </div>
        <div className="flex flex-col justify-between items-center md:w-56 p-4 rounded-xl md:shadow-2xl border card">
          <img className="w-24" src={skill7} alt="" />
          <h4 className="text-xl font-semibold">React.js</h4>
        </div>
        <div className="flex flex-col justify-between items-center md:w-56 p-4 rounded-xl md:shadow-2xl border card">
          <img className="w-24" src={skill8} alt="" />
          <h4 className="text-xl font-semibold">MongoDB</h4>
        </div>
        {!active && (
          <>
            <div className="bord flex-col justify-between items-center md:w-56 p-4 rounded-xl md:shadow-2xl border card">
              card <img className="w-24" src={skill9} alt="" />
              <h4 className="text-xl font-semibold">Node.js</h4>
            </div>
            <div className="bord flex-col justify-between items-center md:w-56 p-4 rounded-xl md:shadow-2xl border card">
              card <img className="w-24" src={skill10} alt="" />
              <h4 className="text-xl font-semibold">Express.js</h4>
            </div>
            <div className="bord flex-col justify-between items-center md:w-56 p-4 rounded-xl md:shadow-2xl border card">
              card <img className="w-24" src={skill11} alt="" />
              <h4 className="text-xl font-semibold">Firebase</h4>
            </div>
          </>
        )}
      </div>
      <div className="text-center md:mt-7 mt-3">
        <button
          disabled={enable}
          onClick={handleActive}
          className="btn btn-wide bg-blue-600 text-white"
          id="seeAll"
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default Expertise;
