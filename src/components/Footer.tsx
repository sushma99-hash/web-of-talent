import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-navy-400">
            © 2025 Sushma Gadepalli
          </p>
          
          <div className="flex space-x-4">
            <a
              href="https://github.com/sushma99-hash"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-navy-800 rounded-full hover:bg-navy-700 transition-colors duration-300 border border-navy-700"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sushma-gadepalli-81358a163/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-navy-800 rounded-full hover:bg-navy-700 transition-colors duration-300 border border-navy-700"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:sushma15729@gmail.com"
              className="p-2 bg-navy-800 rounded-full hover:bg-navy-700 transition-colors duration-300 border border-navy-700"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
