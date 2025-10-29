import React from 'react'
import working_space from '../assets/working-space.png'
import meeting_corner from '../assets/meeting-corner.png'
import meeting_room from '../assets/meeting-room.png'
import rest_room from '../assets/rest-room.png'
import single_working_space from '../assets/single-working-space.png'
import kitchen from '../assets/kitchen.png'

export const WorkingSpace = () => {
  return (
    <section>
        <div class="justify-center items-center">
            <div class="text-center">
                <p class="poppins-semibold text-xl text-red-500 mb-5 mt-15">Working space</p>
                <h1 class="poppins-semibold text-3xl">Let’s meet our interior room decoration</h1>
            </div>
        </div>

        <div className="flex items-center justify-center mt-8 ">
            <div className="columns-3 gap-2">
                <div class="mb-2 p-3">
                    <img src={working_space} alt="" />
                </div>
                <div class="mb-2 p-3">
                    <img src={rest_room} alt="" />
                </div>
                <div class="mb-2 p-3">
                    <img src={meeting_corner} alt="" />
                </div>
                <div class="mb-2 p-3">
                    <img src={single_working_space} alt="" />
                </div>
                <div class="mb-2 p-3">
                    <img src={meeting_room} alt="" />
                </div>
                <div class="mb-2 p-3">
                    <img src={kitchen} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}