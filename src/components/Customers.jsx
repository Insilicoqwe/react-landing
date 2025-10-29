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
                <p class="poppins-semibold text-xl text-red-500 mb-5 mt-8">Some of Our Great Customers</p>
                <h1 class="poppins-semibold text-3xl">Some of the companies we have worked with</h1>
            </div>

            <div class="justify-center py-10">
                <div class="flex justify-center gap-4 py-6">
                    <img src={amazon} alt="" />
                    <img src={jeep} alt="" />
                    <img src={areem} alt="" />
                    <img src={hubspot} alt="" />
                    <img src={jquery} alt="" />
                </div>

                <div class="flex justify-center gap-4 py-6">
                    <img src={canon} alt="" />
                    <img src={fedex} alt="" />
                    <img src={bitcoin} alt="" />
                    <img src={pirelli} alt="" />
                    <img src={philips} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}