
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 80 },
      ]
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Java", level: 90 },
        { name: "Spring Microservices", level: 90 },
        { name: "SQL", level: 90 },
        { name: "Python", level: 70 },
        { name: "REST APIs", level: 85 },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 100 },
        { name: "Docker", level: 85 },
        { name: "AWS", level: 90 },
        { name: "Figma", level: 90 },
        { name: "Tableau", level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 starry-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-navy-500 mx-auto mb-4"></div>
          <p className="text-xl text-navy-300 max-w-3xl mx-auto">
            Here are the technologies and tools I work with
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-navy-900/80 rounded-xl p-6 border border-navy-800"
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-navy-300 font-medium">{skill.name}</span>
                      <span className="text-navy-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-navy-800 rounded-full h-2">
                      <div
                        className="bg-navy-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
