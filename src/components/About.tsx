
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-navy-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Passionate Developer & Problem Solver
            </h3>
            <p className="text-lg text-navy-300 mb-6">
              I'm a dedicated developer with a passion for creating innovative solutions 
              and beautiful user experiences. With a strong foundation in modern web 
              technologies, I enjoy tackling complex challenges and turning ideas into 
              reality.
            </p>
            <p className="text-lg text-navy-300 mb-6">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open source projects, or sharing knowledge with the 
              developer community.
            </p>
            <p className="text-lg text-navy-300">
              I'm currently looking for opportunities where I can contribute to 
              meaningful projects and continue growing as a developer.
            </p>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Quick Facts</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-navy-500 rounded-full mr-3"></span>
                  <span className="text-navy-300">Location: Your City, Country</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-navy-500 rounded-full mr-3"></span>
                  <span className="text-navy-300">Experience: X+ years</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-navy-500 rounded-full mr-3"></span>
                  <span className="text-navy-300">Education: Your Degree</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-navy-500 rounded-full mr-3"></span>
                  <span className="text-navy-300">Interests: Technology, Design, Innovation</span>
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
