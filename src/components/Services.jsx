import React from 'react'
import pc from '../assets/pc.svg'
import fire from '../assets/fire.svg'
import ink from '../assets/ink.svg'
import phone from '../assets/phone.svg'
import build from '../assets/build.svg'
import graph from '../assets/graph.svg'
import { ServiceCard } from './ServiceCard'
import { Caption } from './Caption'

export const Services = () => {
  return (
    <section class="dark:bg-darkbg">
        <Caption title="Our Services" text="The various services we provide to make your business more powerful"/>

        <div className="flex justify-center mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

                <ServiceCard icon={fire} title="Ideate" description="We help you develop creative ideas so that your business can grow more rapidly" className='drop-shadow-indigo-600/25'/>
                <ServiceCard icon={ink} title="Design" description="We provide services with the best designs than our designer team for your business" className='drop-shadow-red-600/25'/>
                <ServiceCard icon={pc} title="Web Development" description="We help develop company websites to be more professional and attractive and attractive" className='drop-shadow-green-600/25'/>
                <ServiceCard icon={phone} title="App Development" description="We help develop company mobile apps to be more professional and attractive" className='drop-shadow-yellow-600/25'/>
                <ServiceCard icon={build} title="Business Growth" description="We also provide services by providing input for your business growth" className='drop-shadow-blue-600/25'/>
                <ServiceCard icon={graph} title="Digital marketing" description="We also help you market your products through an online marketplace" className='drop-shadow-amber-600/25'/>

            </div>
        </div>
    </section>
  )
}