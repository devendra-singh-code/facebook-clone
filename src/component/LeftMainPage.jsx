import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { RiMemoriesFill } from "react-icons/ri";
import { IoBookmark } from "react-icons/io5";
import { IoVideocam } from "react-icons/io5";
import { IoStorefront } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineSystemUpdate } from "react-icons/md";


const LeftMainPage = () => {
  return (
    <div className='w-full hidden md:block'>
      <ul className='flex  flex-col w-full pl-4'>
        <li className='px-3 py-2 duration-500 hover:bg-gray-200  cursor-pointer font-semibold flex items-center gap-4'><FaUser className='text-blue-500' /> <p>Devendra Singh</p></li>
        <li className='px-3 py-2 duration-500 hover:bg-gray-200  cursor-pointer font-semibold flex items-center gap-4'>
           <FaUserFriends className='text-blue-500 text-[18px]'/> <p>Friends</p></li>
        <li className='px-3 py-2 duration-500 hover:bg-gray-200  cursor-pointer font-semibold flex items-center gap-4'>
           <RiMemoriesFill className=  'text-[18px] text-blue-500'/> <p>Memories</p></li>
        <li className='px-3 py-2 duration-500 hover:bg-gray-200  cursor-pointer font-semibold flex items-center gap-4'>
           <MdGroups className='text-blue-500 text-[20px]'/> <p>Groups</p></li>
        <li className='px-3 py-2 duration-500 hover:bg-gray-200  cursor-pointer font-semibold flex items-center gap-4'>
           <IoVideocam className='text-blue-500 text-[18px]'/> <p>Video</p></li>
        <li className='px-3 py-2 duration-500 hover:bg-gray-200  cursor-pointer font-semibold flex items-center gap-4'>
           <IoStorefront className='text-blue-500 text-[18px]'/> <p>Marketplace</p></li>
        <li className='px-3 py-2 duration-500 hover:bg-gray-200  cursor-pointer font-semibold flex items-center gap-4'>
           <MdOutlineSystemUpdate className='text-blue-500 text-[18px]'/> <p>Feeds</p></li>
      </ul>
    </div>
  )
}

export default LeftMainPage
