import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/emertech-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/auth";
import { useNavigate } from "react-router-dom";
import { IoLogInOutline, IoLogOutOutline  } from "react-icons/io5";
import { BiUserCircle  } from "react-icons/bi";

function Navbar() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  return (
    <div className="">
      <nav className="w-full py-2 top-0 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80 z-10 m-0 my-0 mx-0 fixed bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200 border-gray-200 sm:px-4 dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link className="flex" to={"/"}>
            <img className="h-10 mr-3" src={Logo} alt="" />
            <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
              EmerTech
            </span>
          </Link>
          <div className="flex md:order-2">
            {isLoggedIn ? (
              <>
                <Link
                  to="/profile"
                  type="button"
                  className="px-1/2 flex text-white shadow-lg shadow-indigo-500/50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <BiUserCircle className="mr-2 text-lg" /> Profile
                </Link>
                <button
                  onClick={handleLogout}
                  type="button"
                  className="ml-4 px-1/2 flex text-white shadow-lg shadow-indigo-500/50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <IoLogOutOutline className="mr-2 text-lg" /> Logout
                </button>
              </>
            ) : (
              <Link
                to={"/login"}
                type="button"
                className="flex text-white bg-blue-700 shadow-lg shadow-indigo-500/50 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <IoLogInOutline className="mr-2 text-lg" /> Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
