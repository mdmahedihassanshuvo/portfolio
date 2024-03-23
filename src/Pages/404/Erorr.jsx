import { Link } from "react-router-dom";
import errorImg from "../../assets/404/error.jpg";
const Erorr = () => {
  return (
    <div className="text-center md:relative ">
      <img
        className="w-full md:max-h-screen md:block hidden"
        src={errorImg}
        alt=""
      />
      <div className="flex-col md:justify-center md:items-center md:h-auto h-[400px] ">
        <h3 className="text-2xl md:hidden">404 url not found</h3>
        <Link
          to="/"
          className="text-xl underline text-blue-600 cursor-pointer md:absolute md:bottom-[30%] top-96 md:left-[45%]"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default Erorr;
