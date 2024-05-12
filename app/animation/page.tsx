"use client"

import React, { useEffect } from 'react';

export default function Animation() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = '/character';
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="h-[100vh] bg-gradient-to-b from-indigo-700 via-purple-500 to-pink-500" >
            <div className="fade-in flex justify-center absolute inset-0 grid place-items-center text-white text-5xl font-thaibold"> " ทุกคนควรได้รับความยุติธรรม " </div>
        </div>
    );
};
