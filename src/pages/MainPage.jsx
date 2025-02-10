import React from "react";
import Navbar from "../component/Navbar";
import { Outlet } from "react-router-dom";
import { LeftMainPage, MiddleMainPage, RightMainPage } from "./index";

const MainPage = () => {
  return (
    <div className="bg-[#f2f4f7] flex items-center justify-center w-full border border-black ">
      <div className="flex items-start w-full max-w-[1500px] justify-center ">
        <div className="flex justify-start w-[25%] ">
          <LeftMainPage />
        </div>
        <div className=" ">
          <MiddleMainPage />
        </div>
        <div className="flex justify-end w-[25%] bg-gray-400">
          <RightMainPage />

        </div>
      </div>
    </div>
  );
};

export default MainPage;
