import React from 'react';
import { motion } from 'motion/react';
import { User, Cpu, Code, Sparkles } from 'lucide-react';

const About = () => {
  const features = [
    { icon: <Cpu size={24} />, title: 'Electronics Background', desc: 'Strong technical foundation in Engineering.' },
    { icon: <Code size={24} />, title: 'Web Development', desc: 'Transitioning into modern web technologies.' },
    { icon: <Sparkles size={24} />, title: 'AI & Content', desc: 'Exploring the intersection of AI and creativity.' },
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Combining Technical Knowledge with <span className="text-primary">Creativity.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              I am a passionate learner exploring web development, AI, and digital creation. With a background in Electronics & Telecommunication Engineering, I combine technical knowledge with creativity to build useful digital experiences.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              My journey is defined by a constant desire to learn and grow. From understanding complex circuits to crafting intuitive user interfaces, I enjoy the process of solving problems and creating value through technology.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {features.map((f, i) => (
                <motion.div 
                  key={i}
                  className="p-6 glass rounded-3xl border border-slate-100 dark:border-white/5"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-primary mb-4">{f.icon}</div>
                  <h3 className="font-bold text-sm mb-2">{f.title}</h3>
                  <p className="text-xs text-slate-500">{f.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Languages:</span>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-tighter">Hindi</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-tighter">English</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden glass p-4">
              <img 
                src="/learning-journey1.png" 
                alt="Learning Journey"
                className="w-full h-full object-cover rounded-[2.5rem]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 p-8 glass rounded-[2rem] shadow-2xl border border-white/20">
              <p className="text-3xl font-bold text-primary">5+</p>
              <p className="text-sm font-medium text-slate-500">Year of Learning <br />Journey</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
