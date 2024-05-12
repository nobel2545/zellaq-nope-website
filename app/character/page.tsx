"use client"

import React, { useState, useEffect } from 'react';

export default function Character() {
    const [showCharacter, setShowCharacter] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowCharacter(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="h-[100vh] bg-neutral-800" >
            <div className="flex flex-row">
                {showCharacter ? (
                    <img src="character.svg" className="h-screen ml-20 items-center justify-center"/>
                ) : (
                    <img src="character-black.svg" className="h-screen ml-20 items-center justify-center"/>
                )}

                <div className="flex flex-col center mt-10 ml-72 space-y-10">
                    {showCharacter && (
                        <>
                            <div className="font-thaibold text-white text-8xl"> ตุลย์ </div>
                            <div className="flex flex-row space-x-8">
                                <img src="water.png" className="w-[75px] h-[75px]" />
                                <div className="font-thaibold text-white"> ธาตุน้ำ </div>
                            </div>
                        </>
                    )}
                </div>

                <a href="/" className="fixed bottom-8 tag-button right-6 hover:border-black hover:border-3 hover:bg-gray-400 hover:text-black "> next</a>
            </div>
        </div>
    );
};

