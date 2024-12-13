import React from 'react';
import { Code, Palette, Lightbulb } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm a passionate developer and designer with a focus on creating
            intuitive and engaging digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <Code className="w-12 h-12 mb-4 text-blue-600" />
            <h3 className="text-xl font-bold mb-2">Development</h3>
            <p className="text-gray-600">
              Specialized in modern web technologies and frameworks to build
              scalable applications. making work simple to understand and iterate
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <Palette className="w-12 h-12 mb-4 text-purple-600" />
            <h3 className="text-xl font-bold mb-2">Design</h3>
            <p className="text-gray-600">
              Creating beautiful and functional interfaces with attention to detail
              and user experience, centered on what the client needs.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <Lightbulb className="w-12 h-12 mb-4 text-yellow-600" />
            <h3 className="text-xl font-bold mb-2">Strategy</h3>
            <p className="text-gray-600">
              Developing effective solutions that align with business goals and user needs. Thereby taking the most suitable path in the shortest time
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          I specialize mainly in MERN stack and I'm hoping to find jobs to both train and challenge me to become more proffesional
          </p>
        </div>
      </div>
    </section>
  );
}