import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
// import "./Main.css";

const Main = () => {
  return (
    <div className="main-section bg-slate-100">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
