
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-8 flex items-center justify-center">
            <span className="text-gray-600 text-lg">Photo</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hello, I'm{' '}
            <span className="text-blue-600">Your Name</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A passionate developer creating amazing digital experiences
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Github size={24} className="text-gray-700" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Linkedin size={24} className="text-gray-700" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Mail size={24} className="text-gray-700" />
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
