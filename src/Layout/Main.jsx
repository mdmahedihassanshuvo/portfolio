import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import Loading from "../Pages/Loading/Loading";
// import "./Main.css";

const Main = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
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
