import React from 'react'
import meet from '../assets/meet.png'

import { Caption } from './Caption'

export const Documentation = () => {
  return (
    <section class="relative mt-25">
        <div className="absolute inset-0 z-0">
        {/* Левая оранжевая волна */}
        <div className="absolute bottom-0 left-0 w-[80%] h-[80%] bg-orange-400 rounded-tr-[100%]"></div>
        {/* Правая красная волна */}
        <div className="absolute bottom-0 right-0 w-[45%] h-[75%] bg-red-500 rounded-tl-[100%]"></div>
      </div>

            <div class="justify-center items-center">
                <Caption title="Our Documentation" text="See what our profile is like and how we work for your business"/>

                <div class="flex items-center justify-center z-10 px-15 pb-15 mt-15">
                    <img src={meet} alt="" class="drop-shadow-2xl"/>
                </div>
            </div>
            
        </section>
  )
} 