import React from "react";
import { assets } from "../assets/assets";
import { FaUser } from "react-icons/fa";
import { AiTwotoneLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { LiaShareSolid } from "react-icons/lia";
import { IoCameraOutline } from "react-icons/io5";
import { GoSmiley } from "react-icons/go";
import { MdGif } from "react-icons/md";
import { FaUserAstronaut } from "react-icons/fa6";

const Posts = () => {
  return (
    <div className="w-full bg-white rounded-lg border border-gray-300">
      <div className=" w-full rounded-lg">
        <div className="p-3">
          <div className="flex items-center gap-4">
            <div className="p-[10px] rounded-full bg-[#f2f4f7]">
              <FaUser className="text-[20px]" />
            </div>
            <div>
              <p className="text-gray-500">
                <span className="text-black font-semibold">Pradeep Singh </span>{" "}
                is at{" "}
                <span className="text-black font-semibold">
                  Iron Fitness Gym
                </span>
              </p>
              <p className="text-gray-600 text-sm">12h Rosarito, Mexico</p>
            </div>
          </div>
          <div className="py-1">
            <p className="font-semibold">ONLY HARD WORK</p>
            <p className=" font-semibold text-blue-700">
              #newpost #workmotivation #workout
            </p>
          </div>
        </div>
        <div>
          <img src={assets.photo} alt="" />
        </div>
        <div className="p-3">
          <div className="pb-1">
            <p>smily</p>
          </div>
          <div className="py-3 border-y-2 border-gray-300 px-8 flex justify-between">
            <div className="flex gap-2 items-center">
              <AiTwotoneLike className="text-[20px] text-gray-700" />
              <p className="font-semibold text-gray-800">Like</p>
            </div>
            <div className="flex gap-2 items-center">
              <FaRegComment className="text-[20px] text-gray-700" />
              <p className="font-semibold text-gray-800">Comment</p>
            </div>
            <div className="flex gap-2 items-center">
              <FaWhatsapp className="text-[20px] text-gray-700" />
              <p className="font-semibold text-gray-800">Send</p>
            </div>
            <div className="flex gap-2 items-center">
              <LiaShareSolid className="text-[20px] text-gray-700" />
              <p className="font-semibold text-gray-800">Share</p>
            </div>
          </div>
          <div className="flex gap-2 items-center pt-2 ">
            <div className="p-[10px] rounded-full bg-[#f2f4f7] border border-gray-600">
              <FaUser className="text-[20px]" />
            </div>
            <div className="flex items-center justify-between bg-gray-300 py-2 px-4 overflow-hidden rounded-full w-full">
              <input
                type="text"
                placeholder="Write a comment..."
                className="bg-transparent border-none outline-none w-full pr-[50px]"
              />
              <div className="flex gap-4 items-center">
                <FaUserAstronaut className="text-[16px]"/>
                <IoCameraOutline  className="text-[16px]"/>
                <GoSmiley  className="text-[16px]"/>
                <MdGif  className="text-[30px]"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
