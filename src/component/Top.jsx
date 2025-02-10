import React from 'react'
import { FaVideo } from "react-icons/fa";
import { HiMiniPhoto } from "react-icons/hi2";
import { FaFaceSmileWink } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const Top = () => {
  return (
    <div className="bg-white flex flex-col rounded-lg p-4 border border-gray-300">
          <div className="flex items-center gap-2 border-b border-gray-200 pb-3">
            <div className="p-[10px] rounded-full bg-[#f2f4f7]">
              <FaUser className="text-[20px]" />
            </div>
            <p className="bg-[#f2f4f7] rounded-full flex-1 py-2 px-4 cursor-pointer text-gray-700">
              What's on your mind, Devendra
            </p>
          </div>
          <ul className="flex justify-between px-4 pt-1 ">
            <li className="flex gap-3 items-center py-2 rounded-lg px-5 cursor-pointer duration-500 hover:bg-gray-300">
              <FaVideo className="text-[18px]" />
              <p className="text-gray-600 font-semibold">Live video</p>
            </li>
            <li className="flex gap-3 items-center py-2 rounded-lg px-5 cursor-pointer duration-500 hover:bg-gray-300">
              <HiMiniPhoto className="text-[18px]" />
              <p className="text-gray-600 font-semibold">Photo/video</p>
            </li>
            <li className="flex gap-3 items-center py-2 rounded-lg px-5 cursor-pointer duration-500 hover:bg-gray-300">
              <FaFaceSmileWink className="text-[18px]" />
              <p className="text-gray-600 font-semibold">Feeling/activity</p>
            </li>
          </ul>
        </div>
  )
}

export default Top
