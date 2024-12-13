import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Creative Developer & Designer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              I create beautiful digital experiences that help businesses grow and succeed.
            </p>
            <a
              href="#work"
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              View My Work
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
              alt="Developer workspace"
              className="rounded-lg shadow-xl"
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </section>
  );
}