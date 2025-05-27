"use client"
import React, { useState, useEffect } from 'react';
import { Code, Cpu, Wifi, Zap, Book, Youtube, Coffee, Clock, User, MapPin, GraduationCap, Lightbulb } from 'lucide-react';


const AboutPage = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [typewriterText, setTypewriterText] = useState('');
  
  const fullText = "Building the future, one line of code at a time";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const skills = [
    { name: 'Java & Spring', icon: Code, level: 85 },
    { name: 'ESP8266/IoT', icon: Cpu, level: 80 },
    { name: 'Networking', icon: Wifi, level: 75 },
    { name: 'Automation', icon: Zap, level: 70 },
    { name: 'Deep Q-Learning', icon: Lightbulb, level: 65 }
  ];

  const projects = [
    {
      title: "ESP8266 Home Automation",
      desc: "IoT project controlling home devices with ESP8266 microcontrollers",
      tech: ["ESP8266", "Arduino", "WiFi", "Sensors"]
    },
    {
      title: "PC Automation Suite",
      desc: "Desktop automation tools for productivity enhancement",
      tech: ["Java", "Spring", "SQLite", "Automation"]
    },
    {
      title: "Modular Switch Project",
      desc: "Custom networking switch with Realtek controllers and PoE",
      tech: ["Networking", "PoE", "Realtek", "Hardware"]
    },
    {
      title: "De IT Lab Content",
      desc: "Educational tech content creation and tutorials",
      tech: ["YouTube", "Education", "Tech Reviews"]
    }
  ];

  const tools = [
    { name: "Pop!_OS", color: "bg-orange-500" },
    { name: "VSCode", color: "bg-blue-500" },
    { name: "Java", color: "bg-red-500" },
    { name: "Spring", color: "bg-green-500" },
    { name: "Thymeleaf", color: "bg-purple-500" },
    { name: "SQLite", color: "bg-gray-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <User size={60} className="text-cyan-400" />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              De IT Guy
            </h1>
            
            <div className="text-xl text-gray-300 mb-8 h-8">
              {typewriterText}<span className="animate-pulse">|</span>
            </div>
            
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <GraduationCap size={16} />
                <span>CS Student & Lecturer</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Tech Enthusiast</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>Early Riser</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      {/* Content Sections */}
      <div className="container mx-auto px-6 py-16">
        
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-cyan-400">About Me</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I'm a passionate computer science student and lecturer with a deep curiosity for 
                  technology. My journey spans across coding, networking, IoT, and automation, 
                  where I love to learn by building real-world projects.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  From ESP8266 IoT projects to PC automation tools, I enjoy exploring the 
                  intersection of hardware and software. I'm also venturing into deep Q-learning 
                  and creating educational content as "De IT Guy" and "De IT Lab."
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I maintain a structured daily routine, waking up early to maximize productivity. 
                  As both a student and educator, I'm constantly building my academic and 
                  practical experience in the tech world.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                  <Coffee className="text-orange-400 mb-4" size={32} />
                  <h3 className="text-xl font-semibold mb-2">Daily Routine</h3>
                  <p className="text-gray-400">Early riser focused on productive mornings and structured learning</p>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                  <Youtube className="text-red-400 mb-4" size={32} />
                  <h3 className="text-xl font-semibold mb-2">Content Creation</h3>
                  <p className="text-gray-400">Educational tech content through "De IT Guy" and "De IT Lab"</p>
                </div>
              </div>
            </div>
          </div>
        

        
          <div className="max-w-4xl mx-auto my-9">
            <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                  <div className="flex items-center mb-4">
                    <skill.icon className="text-cyan-400 mr-3" size={24} />
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-400 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-sm text-gray-400 mt-2">{skill.level}%</div>
                </div>
              ))}
            </div>
          </div>
        

        
          <div className="max-w-6xl mx-auto my-9">
            <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        

        
          <div className="max-w-4xl mx-auto my-9">
            <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400">Development Environment</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <Code size={40} className="text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Operating System</h3>
                <p className="text-gray-400">Pop!_OS for development</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Book size={40} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Code Editor</h3>
                <p className="text-gray-400">VSCode for all projects</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Zap size={40} className="text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Learning Style</h3>
                <p className="text-gray-400">Hands-on building approach</p>
              </div>
            </div>
            
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-center">Tech Stack</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {tools.map((tool, index) => (
                  <div key={index} className={`px-6 py-3 rounded-full ${tool.color} text-white font-medium transform hover:scale-110 transition-all duration-300`}>
                    {tool.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        
      </div>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-gray-700 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            Always learning, always building. Let's connect and create something amazing together!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;