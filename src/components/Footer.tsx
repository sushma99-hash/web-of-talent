
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-950 text-white py-12 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
          <p className="text-navy-300 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with talented people.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-navy-800 rounded-full hover:bg-navy-700 transition-colors duration-300 border border-navy-700"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-navy-800 rounded-full hover:bg-navy-700 transition-colors duration-300 border border-navy-700"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 bg-navy-800 rounded-full hover:bg-navy-700 transition-colors duration-300 border border-navy-700"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <div className="border-t border-navy-800 pt-8">
            <p className="text-navy-400">
              © 2024 Your Name. All rights reserved. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
