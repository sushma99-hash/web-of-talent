
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Passionate Developer & Problem Solver
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              I'm a dedicated developer with a passion for creating innovative solutions 
              and beautiful user experiences. With a strong foundation in modern web 
              technologies, I enjoy tackling complex challenges and turning ideas into 
              reality.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open source projects, or sharing knowledge with the 
              developer community.
            </p>
            <p className="text-lg text-gray-600">
              I'm currently looking for opportunities where I can contribute to 
              meaningful projects and continue growing as a developer.
            </p>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Quick Facts</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-600">Location: Your City, Country</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-600">Experience: X+ years</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-600">Education: Your Degree</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-600">Interests: Technology, Design, Innovation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
