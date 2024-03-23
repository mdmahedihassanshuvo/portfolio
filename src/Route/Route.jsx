import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Portfolio from "../Pages/Portfolio/Portfolio";
import About from "../Pages/About/About";
import Expertise from "../Pages/Expertise/Expertise";
import Contact from "../Pages/Contact/Contact";
import Erorr from "../Pages/404/Erorr";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Erorr />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "skill",
        element: <Expertise />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
