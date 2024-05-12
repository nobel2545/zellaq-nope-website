"use client";

import { useState } from 'react';

export default function Result() {

    const numOfImages = 10; 

  return (
    <div>
        <div className="center grid grid-cols-5 gap-3 space-x-10 space-y-20">

        {Array.from({ length: numOfImages }, ( _, index ) => (
           <img key={index + 1} src='soul.svg' className='w-[100px]' style={{ animationDelay: `${(index + 1) * 0.1}s` }}/>
        ))}
        </div>
    
        <a href="/" className="fixed bottom-8 tag-button right-6 hover:border-black hover:border-3 hover:bg-gray-400 hover:text-black "> next</a>
    </div>

    
  );
}
