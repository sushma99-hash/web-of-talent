
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 starry-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-navy-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Software Developer & Creative Problem Solver
            </h3>
            <p className="text-lg text-navy-300 mb-6">
              I'm a software developer who loves building clean, intuitive digital 
              experiences and solving tricky problems with code. I enjoy turning ideas 
              into real, working products using modern web technologies instead learning 
              something new with every project.
            </p>
            <p className="text-lg text-navy-300 mb-6">
              Outside of work, I'm usually playing badminton or jamming to music with 
              my friends (bonus points if we're singing along). I'm always up for 
              exploring new tools or tech that can make life a little easier—or a lot 
              more fun.
            </p>
            <p className="text-lg text-navy-300 mb-8">
              I'm currently looking for opportunities to work on meaningful projects, 
              grow as a developer, and collaborate with great teams.
            </p>

            {/* Merged Quick Facts */}
            <div className="space-y-3 bg-navy-900/50 p-6 rounded-lg border border-navy-800">
              <h4 className="text-xl font-semibold text-white mb-4">Quick Facts</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-navy-500 rounded-full mr-3"></span>
                  <span className="text-navy-300">Location: Pittsburgh, Pennsylvania, USA</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-navy-500 rounded-full mr-3"></span>
                  <span className="text-navy-300">Experience: 4 years</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-navy-500 rounded-full mr-3"></span>
                  <span className="text-navy-300">Education: Masters in Information Systems Management, Carnegie Mellon University</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-navy-500 rounded-full mr-3"></span>
                  <span className="text-navy-300">Interests: Technology, Badminton, Music and Gardening</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex justify-center">
            {/* Placeholder for video/picture */}
            <div className="w-80 h-80 bg-navy-800 rounded-lg flex items-center justify-center border border-navy-700">
              <span className="text-navy-400 text-center">
                Video or Picture<br />Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
