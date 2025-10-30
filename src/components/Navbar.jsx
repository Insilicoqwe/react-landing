import React from 'react'
import logo from '../assets/logo.svg'

export const Navbar = () => {
    const navItems = [
        {name: "Home", href: "#" },
        {name: "Works", href: "#" },
        {name: "About", href: "#" }
    ];

  return (
    <nav class=" w-full top-0 left-0 z-50 backdrop-blur-3xl">
        <div class="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
            <img src={logo} alt="Logo" class="select-none drop-shadow-[0_0px_10px_rgba(79,57,246,0.5)]"/>
            <div class="hidden md:flex items-center space-x-15">
                {navItems.map((item) => (
                    <a
                    key={item.name}
                    href={item.href}
                    class="select-none text-xl poppins-semibold text-gray-500 hover:text-indigo-600 transition-colors duration-300"
                    >
                        {item.name}
                    </a>
                ))}
            </div>

            <div>
                <a href="#" class="select-none drop-shadow-[0_0px_10px_rgba(79,57,246,0.5)] text-sm poppins-semibold bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-4 rounded-lg transition-colors suration-300">
                    Contact us
                </a>
            </div>
        </div>
    </nav>
  )
}
