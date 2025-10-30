import React from 'react'
import meet from '../assets/meet.png'

export const Documentation = () => {
  return (
    <section class="relative">
        <div className="absolute inset-0 -z-10">
        {/* Левая оранжевая волна */}
        <div className="absolute bottom-0 left-0 w-[80%] h-[80%] bg-orange-400 rounded-tr-[100%]"></div>
        {/* Правая красная волна */}
        <div className="absolute bottom-0 right-0 w-[45%] h-[75%] bg-red-500 rounded-tl-[100%]"></div>
      </div>

            <div class="justify-center items-center">
                <div class="text-center">
                    <p class="poppins-semibold text-sm md:text-md xl:text-xl text-red-500 mt-8">Our Documentation</p>
                    <h1 class="poppins-semibold text-lg md:text-xl xl:text-3xl">See what our profile is like and how we work for your business</h1>
                </div>

                <div class="flex items-center justify-center mt-15 z-10 px-15 pb-15">
                    <img src={meet} alt="" class="drop-shadow-2xl"/>
                </div>
            </div>
            
        </section>
  )
}