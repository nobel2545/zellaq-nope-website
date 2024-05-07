import React from 'react';

export default function Spinrare() {
  const numOfImages = 8; 
  const imageUrl = 'salt.png';
  
  return (
    <div className="center grid grid-cols-4 gap-4 space-x-10 space-y-5">
      {Array.from({ length: numOfImages }, (_, index) => (
        <img 
          key={index} 
          src={imageUrl} 
          alt={`Image ${index}`} 
          className="w-full fade-in" 
          style={{ animationDelay: `${index * 0.1}s` }} // เพิ่ม animationDelay เพื่อให้รูปภาพแสดงผลตามลำดับ
        />
      ))}
    </div>
  );
}

