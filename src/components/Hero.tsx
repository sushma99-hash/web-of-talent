
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center starry-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-8 overflow-hidden rounded-full border-2 border-navy-600">
            <img 
              src="/lovable-uploads/fa30050d-cbb1-4d6a-a00d-ea23d3e27bac.png" 
              alt="Sushma Gadepalli"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gray-400">Hello, I'm</span>{' '}
            <span className="text-white">Sushma Gadepalli</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-navy-300 mb-8 max-w-3xl mx-auto">
            A software developer who cares deeply about performance and design
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-navy-800 rounded-full shadow-lg hover:bg-navy-700 transition-all duration-300"
            >
              <Github size={24} className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/sushma-gadepalli-81358a163/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-navy-800 rounded-full shadow-lg hover:bg-navy-700 transition-all duration-300"
            >
              <Linkedin size={24} className="text-white" />
            </a>
            <a
              href="mailto:sushma15729@gmail.com"
              className="p-3 bg-navy-800 rounded-full shadow-lg hover:bg-navy-700 transition-all duration-300"
            >
              <Mail size={24} className="text-white" />
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/projects"
              className="px-8 py-3 bg-navy-600 text-white rounded-lg hover:bg-navy-500 transition-colors duration-300"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-8 py-3 border-2 border-navy-600 text-navy-400 rounded-lg hover:bg-navy-600 hover:text-white transition-colors duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
