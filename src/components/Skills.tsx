import React from 'react';
import { motion } from 'motion/react';
import { FileText, Table, Presentation, FileSpreadsheet, Keyboard, Palette, Code, Terminal, Sparkles, Brain, Bot, Zap } from 'lucide-react';

const Skills = () => {
  const skillGroups = [
    {
      title: 'AI & Future Tech',
      skills: [
        { name: 'Prompt Engineering', icon: <Sparkles size={20} /> },
        { name: 'Generative AI', icon: <Brain size={20} /> },
        { name: 'AI Agents', icon: <Bot size={20} /> },
        { name: 'AI Tools (ChatGPT, Gemini)', icon: <Zap size={20} /> },
      ],
    },
    {
      title: 'Productivity & Office',
      skills: [
        { name: 'MS Word', icon: <FileText size={20} /> },
        { name: 'MS Excel', icon: <Table size={20} /> },
        { name: 'MS PowerPoint', icon: <Presentation size={20} /> },
        { name: 'Google Docs', icon: <FileText size={20} /> },
        { name: 'Google Sheets', icon: <FileSpreadsheet size={20} /> },
      ],
    },
    {
      title: 'Design & Development',
      skills: [
        { name: 'Canva Designing', icon: <Palette size={20} /> },
        { name: 'Typing & Documentation', icon: <Keyboard size={20} /> },
        { name: 'HTML & CSS', icon: <Code size={20} /> },
        { name: 'JavaScript', icon: <Terminal size={20} /> },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Skills & Tools</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-8 text-primary/80 tracking-tight border-b border-primary/10 pb-2 inline-block">{group.title}</h3>
              <div className="space-y-4">
                {group.skills.map((skill, j) => (
                  <motion.div
                    key={j}
                    className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 glass rounded-2xl border border-slate-100 dark:border-white/5 hover:border-primary/20 transition-all duration-300 group"
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-slate-700 dark:text-slate-300 flex-1 leading-tight text-sm sm:text-base">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
