import React from 'react'
import './Navbar.css'

export const Navbar = () => {
    const navItems = [
        {name: "Home", href: "#" },
        {name: "Works", href: "#" },
        {name: "About", href: "#" }
    ];

  return (
    <nav class="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <div class="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
            <div class="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                    <a
                    key={item.name}
                    href={item.href}
                    class="poppins-semibold text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
                        {item.name}
                    </a>
                ))}
            </div>

            <div>
                <a href="#" class="text-sm poppins-semibold bg-blue-600 hover:bg-blue-600 text-white px-7 py-3 rounded-lg transition-colors suration-300">
                    Contact us
                </a>
            </div>
        </div>
    </nav>
  )
}
