import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const UserProfileIcon = ({ si }) => (
  <div>
    <FaUser size={si} />
  </div>
);

const Logout = () => (
  <div className="flex justify-end ">
    <div className="w-[200px]  h-[200px] text-center p-5 bg-gray-100 border-4 border-green-200 shadow-2xl mt-[45px] mr-[65px]  absolute rounded-xl rounded-tr-none ">
      <div className="ml-[46px] h-[65px] w-[65px] mt-[-6px] text-green-700 rounded-full border-solid border-green-600   border-4 p-1 cursor-pointer active:border-gray-400 ">
        <UserProfileIcon si={48} />
      </div>
      <h1 className="mt-4 ml-1 mb-3">Vinay</h1>
      <button
        onClick=""
        className="text-sm text-white ml-1 border-2 p-[7px] bg-green-700 hover:bg-green-600 hover:shadow-lg active:bg-green-800 rounded-lg active:border-collapse active:font-semibold active:shadow-2xl"
      >
        LogOut
      </button>
    </div>
  </div>
);

const UserHeader = () => {
  const [showItem, setShowItem] = useState(false);

  return (
    <div className="sticky top-0">
      <div className=" flex border-3 border bg-green-700 shadow-3xl rounded-b-2xl shadow-lg sticky ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl-KtVCNhRMNAhopfmJepp5xAX-RJsqMFJTA&s"
          className="w-[55px]  mb-2 rounded-2xl m-1 "
          alt="This is villagconnect logo"
        />
        <ul className="mt-1 flex justify-between px-10 py-4 text-center  w-full">
          <Link to="/user/">
            <li className="active:font-semibold text-white link-underline link-underline-black">
              Home
            </li>
          </Link>
          <Link to="/userVillageAnnouncements/">
            <li className="text-white active:font-semibold link-underline link-underline-black">
              Announcements
            </li>
          </Link>
          <Link to="/complaints/">
            <li className="text-white active:font-semibold link-underline link-underline-black">
              Complaints
            </li>
          </Link>
          <Link to="/villageActivity">
            <li className="text-white active:font-semibold link-underline link-underline-black">
              Activies
            </li>
          </Link>
          <Link to="/villageSchemes/">
            <li className="text-white active:font-semibold link-underline link-underline-black">
              Schemes
            </li>
          </Link>
          <Link to="/services/">
            <li className="text-white active:font-semibold link-underline link-underline-black">
              Request a Service
            </li>
          </Link>
          <div
            className="h-9 w-10 mt-[-6px] text-white rounded-3xl border-solid border-4 p-1 cursor-pointer active:border-gray-400"
            onClick={() => setShowItem(!showItem)}
          >
            <UserProfileIcon si={25} />
          </div>
        </ul>

        {showItem && <Logout />}
      </div>
    </div>
  );
};

export default UserHeader;
