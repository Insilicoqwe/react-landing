import React from 'react'
import clsx from "clsx";

export const Caption = ({ title, text, bgcolor }) => {
  return (
    <div class={clsx("justify-center items-center dark:", bgcolor)}>
        <div class="text-center">
            <p class="poppins-semibold text-sm md:text-md xl:text-xl text-red-500 dark:text-yellow-400">{title}</p>
            <h1 class="poppins-semibold text-lg md:text-xl xl:text-3xl dark:text-white">{text}</h1>
        </div>
    </div>
  )
}
