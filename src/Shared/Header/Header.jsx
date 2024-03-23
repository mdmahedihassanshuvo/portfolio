import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

const Header = () => {
  const navList = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-[#5e3bee] px-3 py-2 border-red-600 text-xl font-medium border-b-2 rounded-b-xl mx-2 "
            : "px-3 py-2 hover:text-[#5e3bee] text-xl font-medium"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="about"
        className={({ isActive }) =>
          isActive
            ? "text-[#5e3bee] px-3 py-2 border-red-600 text-xl font-medium border-b-2 rounded-b-xl mx-2 "
            : "px-3 py-2 hover:text-[#5e3bee] text-xl font-medium"
        }
      >
        About Me
      </NavLink>
      <NavLink
        to="skill"
        className={({ isActive }) =>
          isActive
            ? "text-[#5e3bee] px-3 py-2 border-red-600 text-xl font-medium border-b-2 rounded-b-xl mx-2 "
            : "px-3 py-2 hover:text-[#5e3bee] text-xl font-medium"
        }
      >
        Skills
      </NavLink>
      <NavLink
        to="portfolio"
        className={({ isActive }) =>
          isActive
            ? "text-[#5e3bee] px-3 py-2 border-red-600 text-xl font-medium border-b-2 rounded-b-xl mx-2 "
            : "px-3 py-2 hover:text-[#5e3bee] text-xl font-medium"
        }
      >
        Portfolio
      </NavLink>
      <NavLink
        target="blank"
        to="https://drive.google.com/file/d/1Ub7SSYDTSkDlzUlcvP9DCB-ZqOFgDloW/view?usp=sharing"
        className={({ isActive }) =>
          isActive
            ? "text-[#5e3bee] px-3 py-2 border-red-600 text-xl font-medium border-b-2 rounded-b-xl mx-2 "
            : "px-3 py-2 hover:text-[#5e3bee] text-xl font-medium"
        }
      >
        Resume
      </NavLink>
    </>
  );

  return (
    <div className="sticky top-0 z-20">
      <div className="navbar bg-base-100 md:px-[20px]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] px-3 shadow bg-base-100 rounded-box w-52"
            >
              {navList}
            </ul>
          </div>
          <Link className="/">
            <img className="w-[50px] h-[50px]" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">{navList}</ul>
        </div>
        <div className="navbar-end">
          <Link
            to="contact"
            className="btn btn-ghost border-[1px] border-[#5e3bee]"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
