import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding pt-32">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Available for Work
          </motion.span>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              ANCHAL DEWANGAN
            </h2>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Building Skills. <br />
            <span className="text-primary">Creating Value.</span> <br />
            Growing Every Day.
          </h1>

          <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-6 leading-relaxed">
            Electronics & Telecommunication Engineer <br />
            Web Development Learner | AI Content Creator
          </p>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed">
            My journey from <span className="font-semibold text-slate-900 dark:text-white underline decoration-primary/30 underline-offset-4">Electronics Engineering</span> to <span className="font-semibold text-slate-900 dark:text-white underline decoration-accent/30 underline-offset-4">Web Development & AI</span>.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 flex items-center gap-2"
            >
              View My Work <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass rounded-2xl font-bold border border-slate-200 dark:border-white/10"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="relative mt-12 lg:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative z-10 w-full max-w-[450px] mx-auto lg:max-w-none aspect-square glass rounded-[3rem] p-6 lg:p-8 overflow-hidden">
            <img 
              src="/Anchal.jpeg" 
              alt="Anchal Dewangan"
              className="w-full h-full object-cover rounded-[2rem]"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Decorative elements - Now with higher z-index and adjusted mobile positions */}
          <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 w-24 h-24 lg:w-32 lg:h-32 glass rounded-3xl flex items-center justify-center animate-bounce z-20 shadow-xl">
            <span className="text-3xl lg:text-4xl">🚀</span>
          </div>
          
          <div className="absolute -bottom-6 -left-4 lg:-bottom-10 lg:-left-10 p-4 lg:p-6 glass rounded-3xl max-w-[160px] lg:max-w-[200px] z-20 shadow-xl">
            <p className="text-[10px] lg:text-xs font-bold text-primary mb-1 uppercase tracking-tighter">Current Focus</p>
            <p className="text-xs lg:text-sm font-medium">Mastering Web Dev & AI Content</p>
          </div>

          {/* Social Icons - Moved here to overlap the image area */}
          <div className="absolute top-1/2 -right-2 lg:-right-6 transform -translate-y-1/2 flex flex-col gap-3 z-30">
            <motion.a 
              href="https://github.com/unboundedmind" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.1, x: 5 }}
              className="p-3 lg:p-4 glass rounded-2xl text-slate-600 dark:text-slate-300 hover:text-primary transition-colors shadow-lg"
            >
              <Github size={22} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/itsanchaldewangan" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.1, x: 5 }}
              className="p-3 lg:p-4 glass rounded-2xl text-slate-600 dark:text-slate-300 hover:text-primary transition-colors shadow-lg"
            >
              <Linkedin size={22} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
