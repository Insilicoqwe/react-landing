import { useState } from "react";
import { ChevronRight, ChevronLeft, Quote } from 'lucide-react';

export default function Carousel() {
    const testimonials = [
    {
      quote:
        "We are serious about providing our best service to all the customers we help. Customers satisfaction is our number one priority.",
      name: "Mark Garfield",
      role: "CEO & Head of Product",
    },
    {
      quote:
        "Our mission is to deliver value and happiness to every client we work with. Quality is what drives us every single day.",
      name: "Sophia Lee",
      role: "Product Manager",
    },
    {
      quote:
        "Every project we take is a chance to make someone's life easier. That’s why we always push beyond expectations.",
      name: "Liam Johnson",
      role: "UX Director",
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  return (
    <div className="bg-orange-400 dark:bg-darkerbg text-white flex flex-col items-center justify-center py-20 px-4">
      <div className="flex items-center justify-center gap-5 xl:gap-25 w-full max-w-7xl">
        <button
          onClick={prev}
          className="bg-white text-orange-400 dark:text-darkerbg p-3 rounded-full shadow-md hover:bg-indigo-600 hover:text-white transition cursor-pointer"
        >
          <ChevronLeft />
        </button>

        <div className="poppins-semibold flex flex-col items-center text-center max-w-3xl px-4 transition-all duration-500 ease-in-out">
          <Quote size={48} className="text-4xl mx-auto mb-6" />
          <p className="text-xl font-light leading-relaxed mb-6">
            {testimonials[current].quote}
          </p>
          <h3 className="font-semibold text-lg">
            {testimonials[current].name}
          </h3>
          <p className="text-lg">{testimonials[current].role}</p>
        </div>

        <button
          onClick={next}
          className="bg-white text-orange-400 dark:text-darkerbg p-3 rounded-full shadow-md hover:bg-indigo-600 hover:text-white transition cursor-pointer"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="flex justify-center items-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`h-1 w-6 rounded-full transition-all duration-300 ${
              i === current ? "bg-white w-8" : "bg-yellow-300/50 dark:bg-yellow-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}