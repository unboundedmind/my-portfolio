import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Let's Build Something <span className="text-primary">Great.</span></h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
              I'm always open to new opportunities, collaborations, or just a friendly chat about tech, AI, and engineering. Feel free to reach out through any of the channels below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <motion.div 
                className="glass p-6 sm:p-8 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-xl group hover:border-primary/20 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail size={28} />
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email Me</p>
                <p className="text-lg sm:text-xl font-bold mb-4 px-2 leading-tight flex flex-col items-center">
                  <span>anchaldewangan06</span>
                  <span className="text-primary/80">@gmail.com</span>
                </p>
                <a 
                  href="mailto:anchaldewangan06@gmail.com"
                  className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                >
                  Send an Email <ExternalLink size={16} />
                </a>
              </motion.div>

              <motion.div 
                className="glass p-6 sm:p-8 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-xl group hover:border-accent/20 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <MapPin size={28} />
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Location</p>
                <p className="text-xl font-bold mb-4">Raigarh, Chhattisgarh, India</p>
                <p className="text-slate-500 font-medium">Open to Work</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
