
import React from 'react';
import AboutComponent from '../components/About';

const About = () => {
  return (
    <div className="pt-20"> {/* Add top padding to account for fixed header */}
      <AboutComponent />
    </div>
  );
};

export default About;
