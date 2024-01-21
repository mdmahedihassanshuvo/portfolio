import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Portfolio from "../Pages/Portfolio/Portfolio";
import About from "../Pages/About/About";
import Expertise from "../Pages/Expertise/Expertise";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skill",
        element: <Expertise />,
      },
    ],
  },
]);

export default router;
