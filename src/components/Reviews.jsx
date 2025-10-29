import React from 'react'
import { ProfileCard } from './ProfileCard'
import ronald from '../assets/ronald.png'
import guy from '../assets/guy.png'
import kristin from '../assets/kristin.png'
import robert from '../assets/robert.png'
import savannah from '../assets/savannah.png'
import courtney from '../assets/courtney.png'



export const Reviews = () => {
  return (
    <section class="mt-15 mb-15">
        <div class="justify-center items-center">
            <div class="text-center">
                <p class="poppins-semibold text-xl text-red-500 mb-5 mt-8">Testimonials</p>
                <h1 class="poppins-semibold text-3xl">Some testimonials from our customers</h1>
            </div>
        </div>
        <div className="flex items-center justify-center mt-30">
            <div className="grid grid-cols-3 gap-8 gap-y-30">
                <ProfileCard icon={ronald} name="Ronald Richards" company="Google inc."/>
                <ProfileCard icon={guy} name="Guy Hawkins" company="Paypal inc."/>
                <ProfileCard icon={kristin} name="Kristin Watson" company="Microsoft inc."/>
                <ProfileCard icon={robert} name="Robert Fox" company="Facebook inc.."/>
                <ProfileCard icon={savannah} name="Savannah Nguyen" company="Twitter inc."/>
                <ProfileCard icon={courtney} name="Courtney Henry" company="Apple inc."/>
            </div>
        </div>
    </section>
  )
}