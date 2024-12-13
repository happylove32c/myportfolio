import React from 'react';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';


const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce solution built with React and Node.js",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    tags: ["React", "Node.js", "MongoDB"],
    live:"https://example.com",
    github:"github.com"
  },
  {
    title: "UI/UX Training App",
    description: "A minimal React and Firebase app built to teach people how to code",
    image: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=500&auto=format&fit=crop&q=80",
    tags: ["React", "Typescript", "Firebase"],
    live:"https://example.com",
    github:"github.com"
  },
  {
    title: "Portfolio Website",
    description: "A minimalist portfolio for a professional photographer",
    image: "https://plus.unsplash.com/premium_photo-1682088318236-8c4958076b34?w=500&auto=format&fit=crop&q=80",
    tags: ["React", "Tailwind", "Framer Motion"],
    live:"https://example.com",
    github:"github.com"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    tags: ["TypeScript", "React", "Firebase"],
    live:"https://example.com",
    github:"github.com"
  }
];

export function Work() {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Selected Work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/20 rounded-full text-sm text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2 mt-2 top-0 right-0">
                    <span
                      className="p-2 bg-white/20 rounded-full hover:bg-gray-300 hover:text-gray-600 text-sm text-white"
                    >
                      <a href="{project.live}" className='flex gap-2'><ArrowUpRight size={20} /> </a>
                    </span>

                    <span
                      className="p-2 bg-white/20 hover:bg-gray-300 hover:text-gray-600 rounded-full text-sm text-white"
                    >
                      <a href="{project.github}"><Github className="w-6 h-6" /></a>
                    </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}