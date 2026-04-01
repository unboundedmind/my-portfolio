import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Vocational Training',
      company: 'BSNL (Bharat Sanchar Nigam Limited)',
      duration: '1 Month',
      location: 'Chhattisgarh, India',
      desc: 'Gained practical insights into telecommunication systems, network infrastructure, and operational workflows.',
      tags: ['Telecommunication', 'Networking', 'Training'],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Professional Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Experience</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="glass p-10 md:p-12 rounded-[3rem] border border-slate-100 dark:border-white/5 relative group hover:border-primary/30 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Briefcase size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold tracking-tight">{exp.role}</h3>
                    <p className="text-lg font-medium text-primary/80">{exp.company}</p>
                    
                    {/* Mobile & Tablet Portrait View: Stacked under BSNL */}
                    <div className="flex lg:hidden flex-col gap-3 text-slate-500 dark:text-slate-400 mt-4">
                      <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest">
                        <div className="w-5 flex justify-center flex-shrink-0">
                          <Calendar size={16} className="text-primary/60" />
                        </div>
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-5 flex justify-center flex-shrink-0">
                          <MapPin size={16} className="text-primary/60" />
                        </div>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop & Tablet Landscape View: Right-aligned */}
                <div className="hidden lg:flex flex-col items-end gap-3 text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest">
                    <div className="w-5 flex justify-center flex-shrink-0">
                      <Calendar size={16} className="text-primary/60" />
                    </div>
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-5 flex justify-center flex-shrink-0">
                      <MapPin size={16} className="text-primary/60" />
                    </div>
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl">
                {exp.desc}
              </p>

              <div className="flex flex-wrap gap-3">
                {exp.tags.map((tag, j) => (
                  <span key={j} className="px-5 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={24} className="text-primary/30" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
