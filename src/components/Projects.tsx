
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "GlucoVista – CGM Market Analysis",
      description: "Analyzed Reddit and Twitter data using NLP (stemming, lemmatization), performed sentiment/topic modeling to identify top glucose monitoring devices and customer‐preferred features, guiding strategic product positioning.",
      technologies: ["Python", "NLP", "Sentiment Analysis", "Topic Modeling", "Data Analysis"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop"
    },
    {
      title: "Cloud Microservices Platform",
      description: "Five Spring Boot/Docker microservices deployed on AWS EKS, communicating via Kafka and REST, with MongoDB persistence, Resilience4j circuit breakers, Prometheus/Grafana monitoring, and CI/CD/chaos testing under a DDD‐driven, scalable architecture.",
      technologies: ["Spring Boot", "Docker", "AWS EKS", "Kafka", "MongoDB", "Resilience4j", "Prometheus", "Grafana"],
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=500&h=300&fit=crop"
    },
    {
      title: "NewsApp – Distributed News Application",
      description: "Java/Tomcat web service containerized on GitHub Codespaces with MongoDB Atlas logging and a Bootstrap JSP dashboard, paired with an Android app (EditText, RecyclerView, ProgressBar) for real‐time Guardian news search and display.",
      technologies: ["Java", "Tomcat", "MongoDB Atlas", "Bootstrap", "JSP", "Android", "REST API"],
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&h=300&fit=crop"
    },
  ];

  return (
    <section id="projects" className="py-20 starry-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-navy-500 mx-auto mb-4"></div>
          <p className="text-xl text-navy-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-navy-900/80 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-navy-800"
            >
              <div className="h-48 bg-navy-800 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-navy-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-navy-800 text-navy-300 text-sm rounded-full border border-navy-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
