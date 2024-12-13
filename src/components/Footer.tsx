import React from 'react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Let's create something amazing together</h3>
            <p className="text-gray-400">
              Open for freelance opportunities and interesting projects.
            </p>
          </div>
          <div className="text-right">
            <p className="text-gray-400">© {new Date().getFullYear()} Loveday Annointed</p>
            <p className="text-gray-400">All rights reserved</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed
                   bottom-6 
                   right-6 
                   text-black 
                   p-3 
                   rounded-full 
                   shadow-md
                   transition"
                  aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#222"
        >
          <path d="m280-400 200-200 200 200H280Z" />
        </svg>
      </button>
    </footer>
  );
}