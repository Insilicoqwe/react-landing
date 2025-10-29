import React from 'react'
import { ChevronRight } from 'lucide-react';
import girl from '../assets/happy-girl.png'

export const GetStartred = () => {
  return (
    <section className="flex flex-col h-screen lg:flex-row items-center justify-between px-6 lg:px-85 py-15 bg-white overflow-hidden select-none">
        <div className="relative max-w-3xl z-10 text-center lg:text-left">
            <h1 className="poppins-semibold text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Make your business{" "}
                <span className="text-orange-500">more powerful</span> <br /> with us
            </h1>
            <p className="poppins-regular mt-6 text-gray-500 text-xl">
                We provide various services to make <br /> your business grow and get bigger.
                Your <br /> satisfaction is our first priority.
            </p>
            <button className="flex mt-8 px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow-lg hover:opacity-90 transition">
                Get Started 
                <ChevronRight />
            </button>
        </div>

      <div className="absolute right-[150px] mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
        <img
          src={girl}
          alt="Happy business woman"
          className="w-[900px] rz-10 drop-shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
        />
      </div>
    </section>
  )
}