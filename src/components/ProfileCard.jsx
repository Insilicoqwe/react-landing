import React from 'react'

export const ProfileCard = ({ icon, name, company }) => {
  return (
    <div className="relative bg-white rounded-3xl hover:drop-shadow-[0_0px_45px_rgba(79,57,246,0.20)] p-8 pt-20 max-w-sm w-full cursor-pointer transition-all duration-150">
        {/* Avatar */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <img
              src={icon}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="text-center mt-8">
          <h2 className="poppins-semibold text-3xl font-bold text-gray-900 mb-2">
            {name}
          </h2>
          <p className="poppins-regular text-gray-400 text-lg mb-6">
            {company}
          </p>
          
          <p className="poppins-regular text-gray-500 text-lg mb-8 px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </p>

          {/* Stars */}
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-6 h-6 fill-indigo-600"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
  )
}