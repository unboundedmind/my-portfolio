import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

const ContentCreator = () => {
  return (
    <section className="section-padding bg-primary/5 dark:bg-primary/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -ml-32 -mb-32" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block flex items-center gap-2">
              <Sparkles size={16} /> Content Creation
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Sharing My <span className="text-primary">Learning Journey.</span></h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              I believe in learning in public. I create content around Tech, AI, and my personal growth journey to help others and document my progress.
            </p>

            <motion.a
              href="https://www.instagram.com/itsanchaldewangan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold shadow-xl transition-all"
            >
              Follow My Journey <ArrowRight size={20} />
            </motion.a>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6 mt-12">
              <div className="aspect-square rounded-3xl overflow-hidden glass p-2">
                <img src="/Anaar.png" alt="Pomegranate Content" className="w-full h-full object-cover rounded-2xl" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[3/4] rounded-3xl overflow-hidden glass p-2">
                <img src="/floating clock island.png" alt="Floating Island" className="w-full h-full object-cover rounded-2xl" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden glass p-2">
                <img src="/Magical forest.png" alt="Magical Forest" className="w-full h-full object-cover rounded-2xl" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden glass p-2">
                <img src="/Mango.png" alt="Mango Fruit" className="w-full h-full object-cover rounded-2xl" referrerPolicy="no-referrer" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContentCreator;
