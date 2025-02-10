import React from "react";
import { assets } from "../assets/assets";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa6";

import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between  items-center px-5 bg-white border-b border-gray-400 w-full">
      <div className="hidden md:block w-[25%]">
        <div className="flex items-center gap-2 ">
          <div>
            <FaFacebook className="text-[35px] text-[#0866ff] cursor-pointer" />
          </div>
          <input
            type="text"
            placeholder="Search Facebook"
            className="bg-[#f2f4f7] px-4 py-2 border-none rounded-full outline-none placeholder:text-[15px] placeholder:text-gray-600 text-lg font-semibold"
          />
        </div>
      </div>
      <div className="flex-1">
        <ul className="flex items-center  justify-center">
          <Link
            to=""
            className="py-4 px-10 border-b-[3px] border-[#0866ff] cursor-pointer"
          >
            <img src={assets.home} alt="" className="" />
          </Link>
          <Link to="video" className="py-4 px-10">
            <img src={assets.video} alt="" />
          </Link>
          <Link to="marketplace" className="py-4 px-10">
            <img src={assets.marketplace} alt="" />
          </Link>
          <Link to="group" className="py-4 px-10">
            <img src={assets.groups} alt="" />
          </Link>
        </ul>
      </div>
      <div className="hidden md:block w-[25%] ">
        <ul className="flex items-center justify-end gap-5  ">
          <li className="p-[9px] rounded-full bg-[#f2f4f7] cursor-pointer">
            <BsFillGrid3X3GapFill className="text-[18px]" />
          </li>
          <li className="p-[9px] rounded-full bg-[#f2f4f7] cursor-pointer">
            <FaFacebookMessenger className="text-[18px]" />
          </li>
          <li className="p-[9px] rounded-full bg-[#f2f4f7] cursor-pointer">
            <FaBell className="text-[18px]" />
          </li>
          <li className="p-[9px] rounded-full bg-[#f2f4f7] cursor-pointer">
            <FaUser className="text-[18px]" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
