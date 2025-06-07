import React from "react"

export default function BackToTop() {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
    return (

      <>
      <div className="fixed bottom-6 right-0 mr-3 flex flex-col items-center z-50">
        <button
          onClick={scrollToTop}
          className="bg-[#0C9EDD] text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="white"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
        <span className="mt-2 text-sm text-[#0C9EDD]  px-2 py-1 rounded">
          BACK TO TOP
        </span>
      </div>
    </>
    );
  }