import React from 'react'
import { ChevronRight } from 'lucide-react';
import girl from '../assets/happy-girl.png'

export const GetStartred = () => {
  return (
    <div className="min-h-[calc(100vh-90px)] bg-gray-50 dark:bg-darkbg flex items-center justify-center p-4 md:p-8">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="poppins-semibold dark:text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Make your business{' '}
              <span className="text-orange-500 dark:text-yellow-400">more powerful</span>
              <br />
              with us
            </h1>
            
            <p className="poppins-regular text-gray-600 dark:text-white text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              We provide various services to make your business grow and get bigger. Your satisfaction is our first priority.
            </p>
            
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2 drop-shadow-[0_0px_10px_rgba(79,57,246,0.5)] cursor-pointer">
              Get Started
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full max-w-2xl mx-auto">

              <div className="relative z-10 mx-auto w-4/5 lg:w-full">
                <div className="relative overflow-hidden">
                  <img
                    src={girl}
                    alt="Business woman"
                    className="w-full h-full object-cover shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}