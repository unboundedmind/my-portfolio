import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 bg-slate-50 dark:bg-slate-900/30 border-t border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <a href="#" className="text-2xl font-bold tracking-tighter text-primary">AD.</a>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs text-center md:text-left">
            Building digital experiences with passion and precision.
          </p>
        </div>

        <div className="flex items-center gap-6 text-slate-400">
          <a href="https://github.com/unboundedmind" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/itsanchaldewangan" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
          <a href="https://www.instagram.com/itsanchaldewangan" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2 text-sm text-slate-500 dark:text-slate-400">
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Anchal Dewangan
          </p>
          <p>© {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
