import React from 'react'
import { CircleCheck } from 'lucide-react';

export const Statistics = () => {
  return (
    <section class="h-screen flex justify-between px-90 mt-30">
        <div class="flex gap-8">
            <div class="flex flex-col grid-cols-1 gap-8 mt-10">

                <div className="select-none bg-white rounded-xl drop-shadow-[0_0px_100px_rgba(124,134,255,0.3)] p-8 pt-15 pb-15 w-62 items-center text-center transition-shadow duration-300 cursor-pointer">
                    <h3 className="poppins-semibold text-5xl font-semibold mb-2 mt-8 text-indigo-600">70K+</h3>           
                    <p className="poppins-regular text-gray-500 mb-6">
                        We have more than customers
                    </p>
                </div>

                <div className="select-none bg-white rounded-xl drop-shadow-[0_0px_100px_rgba(124,134,255,0.3)] p-8 pt-15 pb-15 w-62 items-center text-center transition-shadow duration-300 cursor-pointer">
                    <h3 className="poppins-semibold text-5xl font-semibold mb-2 mt-8 text-red-600">10M+</h3>           
                    <p className="poppins-regular text-gray-500 mb-6">
                        People who are helped because of our hard work
                    </p>
                </div>

            </div>
            <div class="flex flex-col grid-cols-1 gap-8">

                <div className="select-none bg-white rounded-xl drop-shadow-[0_0px_100px_rgba(124,134,255,0.3)] p-8 pt-15 pb-15 w-62 items-center text-center transition-shadow duration-300 cursor-pointer">
                    <h3 className="poppins-semibold text-5xl font-semibold mb-2 mt-8 text-orange-500">100+</h3>           
                    <p className="poppins-regular text-gray-500 mb-6">
                        We have more than customers
                    </p>
                </div>

                <div className="select-none bg-white rounded-xl drop-shadow-[0_0px_100px_rgba(124,134,255,0.3)] p-8 pt-15 pb-15 w-62 items-center text-center transition-shadow duration-300 cursor-pointer">
                    <h3 className="poppins-semibold text-5xl font-semibold mb-2 mt-8 text-green-400">200+</h3>           
                    <p className="poppins-regular text-gray-500 mb-6">
                        People who are helped because of our hard work
                    </p>
                </div>

            </div>
        </div>

        <div className='max-w-120 select-none'>
            <h1 class="poppins-semibold text-[56px] leading-tight">Customer satisfaction is our first priority</h1>
            <p class="poppins-regular text-lg mt-10 text-gray-500">We serve many customers, ranging from small businesses, medium entrepreneurs, to world-renowned companies. Their satisfaction is our pleasure. We strive to provide the best service by:</p>
            <ul class="space-y-6 poppins-regular text-lg mt-10">
                <li class="flex items-start ">
                    <div class="flex-shrink: 0 ">
                        <CircleCheck color="#4f39f6"/>
                    </div>
                    <p className="ml-3 text-gray-500">
                        Professional team with strong experience
                    </p>
                </li>
                <li class="flex items-start ">
                    <div class="flex-shrink: 0 ">
                        <CircleCheck color="#4f39f6"/>
                    </div>
                    <p className="ml-3 text-gray-500">
                        Provide attractive and professional design services
                    </p>
                </li>
                <li class="flex items-start ">
                    <div class="flex-shrink: 0 ">
                        <CircleCheck color="#4f39f6"/>
                    </div>
                    <p className="ml-3 text-gray-500">
                        Support for service 24 hours a week
                    </p>
                </li>
                <li class="flex items-start ">
                    <div class="flex-shrink: 0 ">
                        <CircleCheck color="#4f39f6"/>
                    </div>
                    <p className="ml-3 text-gray-500">
                        Helping our customers to grow their business
                    </p>
                </li>
                <li class="flex items-start ">
                    <div class="flex-shrink: 0 ">
                        <CircleCheck color="#4f39f6"/>
                    </div>
                    <p className="ml-3 text-gray-500">
                        Provide support to market products through online marketplace 
                    </p>
                </li>
            </ul>
        </div>
    </section>
  )
}