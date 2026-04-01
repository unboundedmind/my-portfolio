import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Cpu, Sun, Layout } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'KVL & KCL Training Kit',
      desc: 'A professional educational kit designed to demonstrate Kirchhoff\'s Voltage and Current Laws with real-time measurement units and circuit simulations.',
      icon: <Cpu size={24} />,
      tags: ['Electronics', 'Education', 'Engineering'],
      image: '/kvl-kcl-kit.png',
    },
    {
      title: 'Arduino Sun Tracking Solar Panel',
      desc: 'A smart solar panel system that tracks the sun\'s movement to maximize energy efficiency.',
      icon: <Sun size={24} />,
      tags: ['Arduino', 'Solar Energy', 'IoT'],
      image: '/sun-tracking-solar-pic.png',
    },
    {
      title: 'Learning Projects Portfolio',
      desc: 'A collection of UI designs, portfolio templates, and future tools built during my web development journey.',
      icon: <Layout size={24} />,
      tags: ['Web Dev', 'UI/UX', 'Portfolio'],
      image: '/portfolio-grid.png',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Selected Work</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="glass rounded-[3rem] overflow-hidden border border-slate-100 dark:border-white/5 group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/unboundedmind" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-md rounded-2xl hover:bg-primary transition-colors text-white"
                    >
                      <Github size={20} />
                    </a>
                    <button className="p-3 bg-white/20 backdrop-blur-md rounded-2xl hover:bg-primary transition-colors text-white">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-10">
                <div className="flex items-center gap-3 text-primary mb-4">
                  <div className="p-2 bg-primary/10 rounded-xl">{project.icon}</div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] font-bold uppercase tracking-widest opacity-60">{tag}</span>
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
