import React from 'react';

export default function Spinrare() {
  const numOfImages = 10; 
  
  return (
    <div className="center grid grid-cols-5 gap-1 space-x-10 space-y-20">
      {Array.from({ length: numOfImages }, (_, index ) => (
        <img 
          key={index + 1} 
          src="salt.svg"
          className="w-full fade-in w-[100px]" 
          style={{ animationDelay: `${(index + 1) * 0.1}s` }} // เพิ่ม animationDelay เพื่อให้รูปภาพแสดงผลตามลำดับ
        />
      ))}
    </div>
  );
}

