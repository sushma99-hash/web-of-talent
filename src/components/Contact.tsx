
import React, { useState } from 'react';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-navy-500 mx-auto mb-4"></div>
          <p className="text-xl text-navy-300 max-w-3xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Let's Connect
            </h3>
            <p className="text-lg text-navy-300 mb-8">
              Feel free to reach out if you're looking for a developer, have a question, 
              or just want to connect.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-navy-800 rounded-lg flex items-center justify-center mr-4 border border-navy-700">
                  <Mail className="text-navy-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-navy-300">your.email@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-navy-800 rounded-lg flex items-center justify-center mr-4 border border-navy-700">
                  <Github className="text-navy-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">GitHub</h4>
                  <a 
                    href="https://github.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-navy-400 hover:text-navy-300 flex items-center"
                  >
                    github.com/yourusername
                    <ArrowUpRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-navy-800 rounded-lg flex items-center justify-center mr-4 border border-navy-700">
                  <Linkedin className="text-navy-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-navy-400 hover:text-navy-300 flex items-center"
                  >
                    linkedin.com/in/yourusername
                    <ArrowUpRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center px-6 py-3 bg-navy-600 text-white rounded-lg hover:bg-navy-500 transition-colors duration-300"
              >
                Download Resume
                <ArrowUpRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-navy-900 rounded-xl shadow-lg p-8 border border-navy-800">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Send a Message
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-navy-800 border border-navy-700 text-white rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-navy-800 border border-navy-700 text-white rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-navy-800 border border-navy-700 text-white rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-navy-600 text-white rounded-lg hover:bg-navy-500 transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
