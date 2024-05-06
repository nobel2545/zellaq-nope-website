"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React, { useState } from 'react';


export default function Home() {

  const [isObject2Clicked, setIsObject2Clicked] = useState(false);

  return (
   <div>
      <img className="bg-cover absolute max-h-[750px]" src="rain.gif" />
      <div>
        <img className="bg-cover absolute max-h-[750px]" src="room.PNG" />

        <img className=" w-[300px] h-[300px] absolute top-[137px] left-[877px]" src="sohm.gif"/>

        <div className="tag-tab font-thaibold absolute text-white p-3 pl-5 font-bold w-full " > ห้องฝ่ายบุคคลของโสมนัส </div>

        <div className="ml-10 flex-row">
          <div>
            <img className="w-[350px] absolute mt-20 p-10 cursor-pointer ${isObject2Clicked ? 'w-300' : 'w-350'}`}
            onClick={() => setIsObject2Clicked(!isObject2Clicked)" src="folder_gacha.svg" />
            <div className="top-[150px] font-english text-black absolute left-[65px] p-10 text-white flex flex-col " >
             <h1 className="text-xl"> Document for </h1>
             <h2 className="text-5xl"> Beginner </h2>
            </div>
          </div>

          <div>
            <img className="w-[300px] absolute space-y-20 p-10 cursor-pointer ${isObject2Clicked ? 'w-300' : 'w-350'}`}
            onClick={() => setIsObject2Clicked(!isObject2Clicked)" src="folder_gacha_hover.svg" />
            <div className="top-[316px] font-english text-black absolute left-[65px] p-10 text-white flex flex-col " >
             <h1 className="text-l"> Time for </h1>
             <h2 className="text-4xl"> Revenge </h2>
            </div>
          </div>

          <div>
            <img className="w-[300px] absolute space-y-20 p-10 cursor-pointer ${isObject2Clicked ? 'w-300' : 'w-350'}`}
            onClick={() => setIsObject2Clicked(!isObject2Clicked)" src="folder_gacha_hover.svg" />
            <div className="top-[316px] font-english text-black absolute left-[65px] p-10 text-white flex flex-col " >
             <h1 className="text-l"> Time for </h1>
             <h2 className="text-4xl"> Revenge </h2>
            </div>
          </div>
          
        </div>

        <div className="mr-10 p-10 absolute flex space-x-10 flex-row bottom-0 right-0" >
          <a href="/spinone" className="tag-button "> search x 1</a>
          <a href="/spinten" className="tag-button "> search x 10 </a>
        </div>
      </div>

   </div>
  );
}
