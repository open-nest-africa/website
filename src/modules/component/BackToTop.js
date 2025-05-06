import React from "react"

export default function BackToTop() {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 flex flex-col items-center justify-center bg-[#0C9EDD] text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 z-50"
      >
        <svg
          className="w-6 h-6 mb-1"
          fill="none"
          stroke="white"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
        <span className="text-xs font-semibold">Back to Top</span>
      </button>
    );
  }