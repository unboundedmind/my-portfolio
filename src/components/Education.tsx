import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, MapPin, Building2 } from 'lucide-react';

const Education = () => {
  const educationData = [
    { degree: 'M.A.', university: 'Shaheed Nandkumar Patel Vishwavidyalaya', location: 'Raigarh, Chhattisgarh' },
    { degree: 'B.A.', university: 'Atal Bihari Vajpayee Vishwavidyalaya', location: 'Bilaspur, Chhattisgarh' },
    { degree: 'Diploma in Computer Applications', university: 'Dr. CV Raman University', location: 'Bilaspur, Chhattisgarh' },
    { degree: 'Diploma in Electronics & Telecommunication Engineering', university: 'CSVTU Bhilai', location: 'Chhattisgarh' },
    { degree: '12th', university: 'Chhattisgarh Board of Secondary Education', location: 'Raipur' },
    { degree: '10th', university: 'Central Board of Secondary Education', location: 'Delhi' },
  ];

  return (
    <section id="education" className="section-padding bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Academic Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Education</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              className="glass p-8 rounded-[2.5rem] border border-slate-100 dark:border-white/5 hover:border-primary/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors">
                {edu.degree}
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-slate-500 dark:text-slate-400">
                  <Building2 size={18} className="mt-1 flex-shrink-0" />
                  <p className="text-sm font-medium">{edu.university}</p>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <MapPin size={18} className="flex-shrink-0" />
                  <p className="text-xs">{edu.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
