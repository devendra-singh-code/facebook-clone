import React from "react";
import { assets } from "../assets/assets";

const ForgetPassword = () => {
  return (
    <div className="bg-[#f2f4f7]">
      <div className="flex justify-between items-center px-4 border-b border-gray-300 bg-white">
        <img src={assets.facebook} alt="" className="w-[150px]" />
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Email or phone"
            className=" px-2 py-1 border border-gray-300 rounded-sm focus:outline-[#678fd1] placeholder:text-sm"
          />
          <input
            type="text"
            placeholder="Password"
            className=" px-2 py-1 border border-gray-300 rounded-sm focus:outline-[#678fd1] placeholder:text-sm"
          />
          <button className="bg-[#0866ff] px-3 py-2 rounded-md font-semibold text-white cursor-pointer text-sm  border-none outline-none">
            Log in
          </button>
          <p className=" text-[#0866ff] font-semibold cursor-pointer">
            Forgotten account?
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full h-[80vh] ">
        <div className="rounded-md border border-gray-300 max-w-[500px]">
          <p className="p-3 text-lg font-semibold text-center border-b border-gray-300">
            Find Your Account
          </p>
          <div className="p-4 flex justify-center flex-col gap-4 border-b border-gray-300">
            <p className="leading-tight text-[15px]">
              Please enter your email address or mobilr number to search for
              your account.
            </p>
            <input
              type="text"
              placeholder="Email address or mobilr number"
              className=" p-2 border border-gray-300 rounded-sm focus:outline-[#678fd1] placeholder:text-sm"
            />
          </div>
          <div className="flex justify-end p-2 gap-3">
            <button>Cancel</button>
            <button className="bg-[#0866ff] px-3 py-2 rounded-md font-semibold text-white cursor-pointer text-sm  border-none outline-none">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
