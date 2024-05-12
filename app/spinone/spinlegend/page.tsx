"use client";

import { useState } from 'react';

export default function Spinsalt() {

  const [popupActive, setPopupActive] = useState(false);

  const handleButtonClick = () => {
    setPopupActive(true);
  };

  const handleCloseButtonClick = () => {
    setPopupActive(false);
  };

  return (
    <div className="bg-black">
      <button className="center text-white"> Click to OPEN folder </button>
      <div className={`tag-popup ${popupActive ? 'active' : ''}`}></div>
      <div className={`tag-overlay absolute ${popupActive ? 'active' : ''}`}></div>
      <div className={`tag-popup-content flex flex-col space-y-6 ${popupActive ? 'active' : ''}`}>
        <div className="flex flex-row items-center"> 
          <img src="tul_info.svg" className="w-[180px] h-[200px] mr-4" /> 
          <div>
            <h1 className="text-4xl font-thaibold my-2">ตุลย์</h1>
            <h2 className="text-3xl font-thaibold">ธาตุน้ำ</h2>
            <p className="text-l font-thai mt-4"> เป็นเจ้าหน้าที่นำทางวิญญาณระดับกลาง เป็นคนที่คอย ช่วยเหลือคุณได้
            ในเวลาที่ต้องการ มีความเด็ดขาด มีความเป็นผู้นำ รักความยุติธรรม เชื่อว่าใครทำผิดต้องได้รับผิด </p>
          </div>
        </div>
        <button className="tag-close" onClick={handleCloseButtonClick}> X </button>
      </div>
    </div>
  );
}
