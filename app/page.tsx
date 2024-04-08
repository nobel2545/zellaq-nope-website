"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
  return (

    <div className="" >
      <img className=" max-w-[1920px] max-h-[750px] fixed bg-cover" src="roomBackground.jpg" />

      <img className=" w-[400px] absolute ml-10 p-10" src="folder_gacha.svg" />
      <img className=" w-[350px] h-[350px] absolute top-[105px] left-[415px]" src="sohm.gif"/>

      <Swiper className="" spaceBetween={5} slidesPerView={2.5}>
        <SwiperSlide className="tag-menu">Slide 1</SwiperSlide>
        <SwiperSlide className="tag-menu">Slide 2</SwiperSlide>
        <SwiperSlide className="tag-menu">Slide 3</SwiperSlide>
        <SwiperSlide className="tag-menu">Slide 4</SwiperSlide>
      </Swiper>
    
    </div>
  );
}
