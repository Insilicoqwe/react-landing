import React from 'react'
import clsx from "clsx";
import { ChevronRight } from 'lucide-react';

export const ServiceCard = ({ icon, title, description, className = '' }) => {
  return (
    <div className="group bg-white dark:bg-darkbg rounded-xl shadow-lg drop-shadow-[0_0px_45px_rgba(79,57,246,0.20)] p-8 w-72 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
        <div class="w-20 flex items-center justify-center select-none">
            <img src={icon} alt="" className={clsx("drop-shadow-xl", className)}/>
        </div>

        <h3 className="poppins-semibold text-lg font-semibold mb-2 mt-8 dark:text-white">{title}</h3>
                    
        <p className="poppins-regular text-gray-500 dark:text-white mb-6">
            {description}
        </p>

        <button
          onClick=""
          className="bg-gray-100 dark:bg-darkerbg text-blue-400 dark:text-white p-3 rounded-full shadow-md group-hover:bg-indigo-600 group-hover:text-white transition cursor-pointer"
        >
          <ChevronRight/>
        </button>
    </div>
  )
}