"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
  return (
   <div>
      <img className="bg-cover absolute max-h-[750px]" src="rain.gif" />
      <div>
        <img className="bg-cover absolute max-h-[750px]" src="room.PNG" />

        <div>
          <img className="w-[350px] absolute ml-10 mt-20 p-10" src="folder_gacha.svg" />
        </div>
        <img className=" w-[300px] h-[300px] absolute top-[137px] left-[877px]" src="sohm.gif"/>

        <div className="tag-tab font-thaibold absolute text-white p-3 pl-5 font-bold w-full " > ห้องฝ่ายบุคคลของโสมนัส </div>

        <div className="absolute flex-row">
          <div className="top-[160px] font-english text-black absolute top-[180px] left-[65px] p-10 text-white font-bold flex flex-col " >
            <h1 className="text-xl"> Document for </h1>
            <h2 className="text-4xl"> Beginner </h2>
          </div>
          <div className="top-[160px] font-english text-black absolute top-[180px] left-[65px] p-10 text-white font-bold flex flex-col " >
            <h1 className="text-xl"> Document for </h1>
            <h2 className="text-4xl"> Beginner </h2>
          </div>
          <div className="top-[160px] font-english text-black absolute top-[180px] left-[65px] p-10 text-white font-bold flex flex-col " >
            <h1 className="text-xl"> Document for </h1>
            <h2 className="text-4xl"> Beginner </h2>
         </div>
        </div>

        <div className="mr-10 p-10 absolute flex space-x-10 flex-row bottom-0 right-0" >
          <div className="tag-button font-bold"> สุ่ม 1 ครั้ง </div>
          <div className="tag-button font-bold"> สุ่ม 10 ครั้ง  </div>
        </div>
      </div>

   </div>
  );
}
