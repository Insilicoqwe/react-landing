import React from 'react'
import amazon from '../assets/amazon.png'
import jeep from '../assets/jeep.png'
import areem from '../assets/areem.png'
import hubspot from '../assets/hubspot.png'
import jquery from '../assets/jquery.png'

import canon from '../assets/canon.png'
import fedex from '../assets/fedex.png'
import bitcoin from '../assets/bitcoin.png'
import pirelli from '../assets/pirelli.png'
import philips from '../assets/philips.png'

export const Customers = () => {
  return (
    <section class="py-15">
        <div class="justify-center items-center">
            <div class="text-center">
                <p class="poppins-semibold text-sm md:text-md xl:text-xl text-red-500 mt-8">Some of Our Great Customers</p>
                <h1 class="poppins-semibold text-lg md:text-xl xl:text-3xl">Some of the companies we have worked with</h1>
            </div>

            <div class="justify-center py-10">
                <div class="flex flex-col xl:flex-row justify-center gap-4 xl:gap-11">
                    <img src={amazon} alt="" class="object-none h-15"/>
                    <img src={jeep} alt="" class="object-none h-15"/>
                    <img src={areem} alt="" class="object-none h-15"/>
                    <img src={hubspot} alt="" class="object-none h-15"/>
                    <img src={jquery} alt="" class="object-none h-15"/>
                </div>
                <div class="flex flex-col xl:flex-row justify-center gap-4 xl:gap-0">
                    <img src={canon} alt="" class="object-none h-15"/>
                    <img src={fedex} alt="" class="object-none h-15"/>
                    <img src={bitcoin} alt="" class="object-none h-15"/>
                    <img src={pirelli} alt="" class="object-none h-15"/>
                    <img src={philips} alt="" class="object-none h-15"/>
                </div>
            </div>
        </div>
    </section>
  )
}