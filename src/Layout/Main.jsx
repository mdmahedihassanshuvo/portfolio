import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import Loading from "../Pages/Loading/Loading";
import { useState } from "react";
// import "./Main.css";

const Main = () => {
  const [load, setLoad] = useState(true);

  if (load) {
    return <Loading />;
  }

  return (
    <div className="main-section bg-slate-100">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
