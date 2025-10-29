import React from 'react'
import clsx from "clsx";

export const ServiceCard = ({ icon, title, description, className = '' }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 w-72 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
        <div class="w-20 flex items-center justify-center select-none">
            <img src={icon} alt="" className={clsx("drop-shadow-xl", className)}/>
        </div>

        <h3 className="poppins-semibold text-lg font-semibold mb-2 mt-8">{title}</h3>
                    
        <p className="poppins-regular text-gray-500 mb-6">
            {description}
        </p>
    </div>
  )
}