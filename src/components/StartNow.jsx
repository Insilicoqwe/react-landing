import React from 'react'
import { ChevronRight } from 'lucide-react';

export const StartNow = () => {
  return (
    <div class="px-50 py-50">
        <div class="bg-yellow-400 py-25 flex flex-col justify-center text-center items-center rounded-3xl">
            <p class="poppins-regular text-white text-md">Are You Ready For</p>
            <h1 class="poppins-semibold text-white text-5xl mt-6">Start a New Project</h1>
            <button className="items-center flex mt-8 px-12 py-5 rounded-lg bg-indigo-600 text-white text-xl font-semibold drop-shadow-2xl drop-shadow-amber-600/50 cursor-pointer">
                Get Started
                <ChevronRight />
            </button>
        </div>
    </div>
  )
}