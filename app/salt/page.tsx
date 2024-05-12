"use client";

import { useState , useEffect } from 'react';

export default function Salt() {

    const numOfImages = 10; 

    const [showCharacter, setShowCharacter] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
          setShowCharacter(true);
      }, 2000);
      return () => clearTimeout(timer);
  }, []);

  return (
    <div>
        <div className="center grid grid-cols-5 gap-3 space-x-10 space-y-20">

        {Array.from({ length: numOfImages }, ( _, index ) => (
           <img key={index + 1} src='salt.svg' className='w-[100px] fade-in' style={{ animationDelay: `${(index + 1) * 0.1}s` }}/>
        ))}
        </div>
    
        {showCharacter && (
        <a href="/salt-result" className="fixed bottom-8 tag-button right-6 hover:border-black hover:border-3 hover:bg-gray-400 hover:text-black "> next</a>
        )}

    </div>

    
  );
}
