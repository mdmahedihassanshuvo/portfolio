import { FaceFrownIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col justify-center gap-1 items-center min-h-screen">
      <div>
        <FaceFrownIcon className="h-16 w-16 text-blue-500" />
      </div>
      <h2 className="md:text-6xl text-3xl font-bold text-red-600">404</h2>
      <h2 className="md:text-6xl text-3xl">Not Found</h2>
      <Link
        to="/"
        className="md:text-xl text-blue-600 underline cursor-pointer"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default Error;
