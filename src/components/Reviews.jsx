import React from 'react'
import { ProfileCard } from './ProfileCard'
import ronald from '../assets/ronald.png'
import guy from '../assets/guy.png'
import kristin from '../assets/kristin.png'
import robert from '../assets/robert.png'
import savannah from '../assets/savannah.png'
import courtney from '../assets/courtney.png'

import { Caption } from './Caption'

export const Reviews = () => {
  return (
    <section class="my-15 py-15 bg-gray-50 dark:bg-darkerbg">
        
        <Caption title="Testimonials" text="Some testimonials from our customers" />

        <div className="flex items-center justify-center mt-30">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 gap-y-30">
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