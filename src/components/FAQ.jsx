import { useState } from "react";
import { ChevronUp, ChevronDown  } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What are the services provided to customers?",
      answer:
        "Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, and support the growth of business ideas to help customers market their products online through the marketplace.",
    },
    {
      question: "How can I submit a proposal for cooperation?",
      answer:
        "You can submit a proposal through our contact form, or by emailing our business team directly. We’ll review your idea and reach out to schedule a discussion.",
    },
    {
      question:
        "I come from a faraway place, can collaboration be done fully online?",
      answer:
        "Absolutely! We often collaborate through online meetings using Zoom, Teams, or Google Meet, depending on your preference.",
    },
    {
      question: "How do I get the payment complete?",
      answer:
        "Once the project is finalized and approved, we process payments securely through bank transfer or your preferred payment gateway.",
    },
    {
      question: "How long can the collaboration last?",
      answer:
        "That depends on the project’s scope! Small projects may take a few weeks, while larger collaborations can last several months or more.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-16 px-4 flex justify-center">
      <div className="w-full max-w-3xl">
        <div class="text-center">
            <p class="poppins-semibold text-xl text-red-500 mb-5 mt-15">Working space</p>
            <h1 class="poppins-semibold text-3xl">Let’s meet our interior room decoration</h1>
        </div>

        <div className="space-y-4 mt-15">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`py-5 border rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "border-indigo-500 bg-white shadow-md"
                  : "border-gray-200 bg-white"
              }`}
            >
              {/* Заголовок вопроса */}
              <button
                onClick={() => toggle(index)}
                className="poppins-semibold cursor-pointer w-full flex justify-between items-center text-left px-6 py-4 font-medium text-gray-800 hover:bg-gray-50 transition"
              >
                <span>{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-indigo-500" />
                ) : (
                  <ChevronDown className="text-gray-500" />
                )}
              </button>

              {/* Ответ */}
              <div
                className={`poppins-regular transition-all duration-100 overflow-hidden ${
                  openIndex === index ? "max-h-96 p-6 pt-0" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}