import React from 'react'
import { ChevronRight } from 'lucide-react';
import world_map from '../assets/world-map.png'
import logo from '../assets/logo.svg'

export const Footer = () => {
  return (
    <div className="mt-40 bg-white flex flex-col justify-end">
      {/* Main Content Spacer */}
      <div className="flex-grow"></div>

      {/* Footer Section */}
      <footer className="relative bg-slate-900 text-white">
        {/* Subscribe Card - Overlapping */}
        <div className="relative -top-24 max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center shadow-2xl">
            <p className="text-indigo-100 text-sm font-medium mb-3">
              Get Notified About Project
            </p>
            <h2 className="text-4xl font-bold mb-8">
              Subscribe Now
            </h2>
            
            {/* Email Input */}
            <div className="poppins-light max-w-md mx-auto relative select-none">
              <input
                type="email"
                placeholder="Email"
                className="bg-white w-full px-6 py-4 rounded-xl text-gray-900 placeholder-gray-400 outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 p-3 rounded-full transition-colors">
                <ChevronRight/>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="max-w-5xl mx-auto px-4 pt-8 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Column 1 - About */}
            <div>
              <img src={logo} className="w-12 h-12 mb-6 select-none drop-shadow-[0_0px_10px_rgba(79,57,246,0.5)]"/>
              <p className="text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>

            {/* Column 2 - Our Office */}
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-6">Our Office</h3>
              <div className="relative w-full max-w-sm">
                <img src={world_map} alt="" />
              </div>
            </div>

            {/* Column 3 - Contact */}
            <div class="">
              <h3 className="text-xl font-semibold mb-6">Contact</h3>
              <div className="space-y-4 text-gray-400">
                <p>
                  Jl KH Samanhudi<br/>
                  Metro Atom Plaza Bl<br/>
                  AKS 1/11, Dki Jakarta
                </p>
                <p className="text-white">
                  info@yourdomain.com
                </p>
                <p className="text-white">
                  +62 (0) 000 0000 00
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2021 Creative Agency
            </p>
            <nav className="flex gap-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Works</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}