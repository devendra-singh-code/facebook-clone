import React from "react";
import {Posts, Top} from '../pages/index'

const MiddleMainPage = () => {
  return (
    <div className="w-full max-w-[550px] h-screen overflow-y-auto scrollbar-hide"> 
      <div className="flex flex-col justify-center gap-4 w-full">
       <Top />

        <div className="">
            <Posts />
            <Posts />
        </div>
      </div>
    </div>
  );
};

export default MiddleMainPage;
