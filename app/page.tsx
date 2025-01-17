"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React, { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';

export default function Home() {

  return (
   <div>
      <img className="bg-cover absolute max-h-[740px]" src="rain.gif"/>

      <div>
        <img className="bg-cover absolute max-h-[740px]" src="room.PNG" />

        <img className=" w-[300px] h-[300px] absolute top-[137px] right-[342px]" src="sohm.gif"/>

        <img className=" w-[150px] h-[150px] absolute top-[255px] right-[160px]" src="deathflower.gif"/>

        <div>
          <div className="tag-tab font-thaibold absolute text-white p-3 pl-5 font-bold w-full " > ห้องฝ่ายบุคคลของโสมนัส / ตู้กาชา </div>
          
          <div className="flex absolute top-3 right-4 space-x-5">

            <a href="/history">
              <img className="w-[24px] h-[24px]" src="history.svg" />
            </a>

            <a href="/info">
              <img className="w-[25px] h-[25px]" src="info-circle.svg" />
            </a>
            
          </div>
        </div>

        <div className="mr-10 p-10 absolute flex space-x-10 flex-row bottom-0 right-0" >
          <a href="/openonefolder" className="tag-button hover:border-black hover:border-3 hover:bg-gray-400 hover:text-black "> search x 1</a>
          <a href="/opentenfolder" className="tag-button hover:border-black hover:border-3 hover:bg-gray-400 hover:text-black "> search x 10 </a>
        </div>
      </div>

      <div className="ml-10 flex-row">

        <div>

        <div className="flex flex-col space-y-48 ">
         <div>
          <img className="w-[350px] absolute mt-10 p-10 cursor-pointer" src="folder_gacha.svg"/>
          <div className="top-[115px] font-english text-black absolute left-[65px] p-10 text-white flex flex-col hover:text-black">
           <h1 className="text-xl">Document For</h1>
           <h2 className="text-5xl">Beginning</h2>
          </div>
         </div>

        <div>
         <img className="w-[350px] absolute mt-10 p-10 cursor-pointer" src="folder_gacha.svg"/>
          <div className="top-[310px] font-english text-black absolute left-[65px] p-10 text-white flex flex-col hover:text-black">
           <h1 className="text-xl">Time For</h1>
           <h2 className="text-5xl">Revenge</h2>
          </div>
        </div>

        <div>
          <img className="w-[350px] absolute mt-10 p-10 cursor-pointer" src="folder_gacha.svg"/>
          <div className="top-[500px] font-english text-black absolute left-[65px] p-10 text-white flex flex-col hover:text-black">
            <h1 className="text-xl">Soul Pathfinder</h1>
            <h2 className="text-5xl">Fire Series</h2>
          </div>
        </div>
      </div>
          
          </div>
        </div>
          
      
    </div>

    
  );
}
