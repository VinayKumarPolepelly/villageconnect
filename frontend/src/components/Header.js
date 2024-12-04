import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="sticky top-0  z-20 w-screen">
      <div className="text-white flex justify-between border-3 border bg-green-700 shadow-3xl shadow-lg ">
        <div className="ml-1  flex mt-1 ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl-KtVCNhRMNAhopfmJepp5xAX-RJsqMFJTA&s"
            className="w-[55px]  mb-2 rounded-2xl "
            alt="This is villagconnect logo"
          />
          <h1 className="text-2xl mt-3 ml-3 font-semibold ">
            Village Connect{" "}
            <span className="text-lg font-thin">
              - A Comprehensive Village Development System
            </span>
          </h1>
        </div>
        <ul className="flex justify-between px-10 py-4 text-center mt-1 text-white">
          <Link to="/">
            {" "}
            <li className="px-3 text-xl font-sans font-semibold active:font-semibold active:text-green-200 link-underline link-underline-black">
              Home
            </li>
          </Link>

          <Link to="/userlogin/">
            <li className="px-3 text-xl font-sans font-semibold active:font-semibold active:text-green-200 link-underline link-underline-black">
              Login
            </li>
          </Link>
          <Link to="/userRegister/">
            <li className="px-3 text-xl font-sans font-semibold active:font-semibold active:text-green-200 link-underline link-underline-black">
              Register
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Header;
