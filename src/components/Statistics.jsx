import React from 'react'
import { CircleCheck } from 'lucide-react';

export const Statistics = () => {
  return (
    <section class="xl:flex xl:justify-center gap-30 py-25 bg-gray-50 dark:bg-darkerbg">
        <div class="xl:flex gap-8">
            <div class="xl:flex xl:flex-col xl:grid-cols-1 gap-8 mt-10">

                <div className="select-none bg-white dark:bg-indigo-600 rounded-xl drop-shadow-[0_0px_100px_rgba(124,134,255,0.3)] px-8 py-8 mx-8 mb-8 xl:mb-0 xl:py-15 xl:mx-0 xl:w-62 items-center text-center transition-shadow duration-300 cursor-pointer">
                    <h3 className="poppins-semibold text-5xl font-semibold mb-2 mt-8 text-indigo-600 dark:text-white">70K+</h3>           
                    <p className="poppins-regular text-xl text-gray-500 dark:text-gray-100 mb-6">
                        We have more than customers
                    </p>
                </div>

                <div className="select-none bg-white dark:bg-indigo-600 rounded-xl drop-shadow-[0_0px_100px_rgba(124,134,255,0.3)] px-8 py-8 mx-8 mb-8 xl:mb-0 xl:py-15 xl:mx-0 xl:w-62 items-center text-center transition-shadow duration-300 cursor-pointer">
                    <h3 className="poppins-semibold text-5xl font-semibold mb-2 mt-8 text-red-500">10M+</h3>           
                    <p className="poppins-regular text-xl text-gray-500 dark:text-gray-100 mb-6">
                        People who are helped because of our hard work
                    </p>
                </div>

            </div>
            <div class="xl:flex xl:flex-col xl:grid-cols-1 gap-8">

                <div className="select-none bg-white dark:bg-indigo-600 rounded-xl drop-shadow-[0_0px_100px_rgba(124,134,255,0.3)] px-8 py-8 mx-8 mb-8 xl:mb-0 xl:py-15 xl:mx-0 xl:w-62 items-center text-center transition-shadow duration-300 cursor-pointer">
                    <h3 className="poppins-semibold text-5xl font-semibold mb-2 mt-8 text-orange-500">100+</h3>           
                    <p className="poppins-regular text-xl text-gray-500 dark:text-gray-100 mb-6">
                        Projects we have completed
                    </p>
                </div>

                <div className="select-none bg-white dark:bg-indigo-600 rounded-xl drop-shadow-[0_0px_100px_rgba(124,134,255,0.3)] px-8 py-8 mx-8 mb-8 xl:mb-0 xl:py-15 xl:mx-0 xl:w-62 items-center text-center transition-shadow duration-300 cursor-pointer">
                    <h3 className="poppins-semibold text-5xl font-semibold mb-2 mt-8 text-green-500">200+</h3>           
                    <p className="poppins-regular text-xl text-gray-500 dark:text-gray-100 mb-6 ">
                        Support from world-renowned companies
                    </p>
                </div>

            </div>
        </div>

        <div className='max-w-max px-10 xl:px-0 xl:max-w-120 select-none'>
            <h1 class="poppins-semibold text-2xl xl:text-[56px] my-10 leading-tight dark:text-white">Customer satisfaction is our first priority</h1>
            <p class="poppins-regular text-md xl:text-lg text-gray-500 dark:text-white">We serve many customers, ranging from small businesses, medium entrepreneurs, to world-renowned companies. Their satisfaction is our pleasure. We strive to provide the best service by:</p>
            <ul class="space-y-6 poppins-regular text-md xl:text-lg mt-10">
                <li class="flex items-start">
                    <div class="flex-shrink: 0 ">
                        <CircleCheck color="#4f39f6"/>
                    </div>
                    <p className="ml-3 text-gray-500 dark:text-white">
                        Professional team with strong experience
                    </p>
                </li>
                <li class="flex items-start ">
                    <div class="flex-shrink: 0 ">
                        <CircleCheck color="#4f39f6"/>
                    </div>
                    <p className="ml-3 text-gray-500 dark:text-white">
                        Provide attractive and professional design services
                    </p>
                </li>
                <li class="flex items-start ">
                    <div class="flex-shrink: 0 ">
                        <CircleCheck color="#4f39f6"/>
                    </div>
                    <p className="ml-3 text-gray-500 dark:text-white">
                        Support for service 24 hours a week
                    </p>
                </li>
                <li class="flex items-start ">
                    <div class="flex-shrink: 0 ">
                        <CircleCheck color="#4f39f6"/>
                    </div>
                    <p className="ml-3 text-gray-500 dark:text-white">
                        Helping our customers to grow their business
                    </p>
                </li>
                <li class="flex items-start ">
                    <div class="flex-shrink: 0 ">
                        <CircleCheck color="#4f39f6"/>
                    </div>
                    <p className="ml-3 text-gray-500 dark:text-white">
                        Provide support to market products through online marketplace 
                    </p>
                </li>
            </ul>
        </div>
    </section>
  )
}