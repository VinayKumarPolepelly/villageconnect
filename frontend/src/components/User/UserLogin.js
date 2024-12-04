import React from "react";
import Header from "../Header";
import CarouselComponent from "./Carousal";
const userLogin = () => {
  return (
    <div>
      <Header />
      <div className="h-screen w-screen relative bg-cover bg-center bg-[url('https://res.cloudinary.com/drygl5o4k/image/upload/v1733333722/sodoskjiwdjq0xxpv1pj.png')]">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content Layer */}
        <div className="relative ">
          <div className="p-5 flex justify-center ">
            <div className=" w-6/12 mt-12 bg-green-50 shadow-2xl rounded-lg p-3">
              <div className="flex flex-row">
                <div>
                  <h1 className="text-green-800 font-bold text-xl mb-3 ml-[120px]">
                    User Login
                  </h1>
                  <form className="flex flex-col ">
                    <label className="mb-1 ml-7 text-[16px]  text-green-800">
                      Username
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Username"
                      className="mb-2 p-3 ml-7 border-2 border-gray-500 text-md rounded-lg w-[18em]"
                    />
                    <label className="mb-1 ml-7 text-[16px] text-green-800">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className="mb-6 p-3 border-2 ml-7 border-gray-500 text-md rounded-lg w-[18em]"
                    />
                    <button className="p-2 mb-4 font-semibold text-lg w-[100px] ml-[110px] text-white bg-green-700 hover:bg-green-600 hover:shadow-lg  active:bg-green-700 rounded-lg">
                      Login
                    </button>
                  </form>
                </div>
                <div>
                  <CarouselComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default userLogin;
