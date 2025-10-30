import React from 'react'
import { ChevronRight } from 'lucide-react';

export const StartNow = () => {
  return (
    <div className="relative max-w-5xl mx-auto px-4">
          <div className="bg-yellow-400 rounded-3xl p-12 text-center shadow-2xl">
            <p className="poppins-regular text-white text-sm font-medium mb-3">
              Are You Ready For
            </p>
            <h2 className="poppins-semibold text-white text-4xl font-bold mb-8">
              Start a New Project
            </h2>
            
            <div className="flex justify-center max-w-md mx-auto relative">
              <button class="flex gap-2 poppins-regular bg-indigo-600 rounded-xl py-4 px-11 text-white text-md">
                Start now
                <ChevronRight/>
              </button>
            </div>
          </div>
        </div>
    
  )
}