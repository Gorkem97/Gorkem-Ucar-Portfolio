import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, Trophy, CheckCircle2, Sparkles } from 'lucide-react';
import { recognitionsData } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  const getIcon = (type?: string, tag?: string) => {
    if (type === 'trophy' || tag?.includes('Award')) {
      return (
        <div className="w-11 h-11 rounded-2xl bg-[#F5AF38]/15 border border-[#F5AF38]/30 flex items-center justify-center text-[#B87A14] shrink-0 shadow-xs">
          <Trophy className="w-5 h-5" />
        </div>
      );
    }
    if (type === 'academic' || tag?.includes('Academic')) {
      return (
        <div className="w-11 h-11 rounded-2xl bg-[#E26D46]/15 border border-[#E26D46]/30 flex items-center justify-center text-[#E26D46] shrink-0 shadow-xs">
          <GraduationCap className="w-5 h-5" />
        </div>
      );
    }
    return (
      <div className="w-11 h-11 rounded-2xl bg-[#1F5A63]/15 border border-[#1F5A63]/30 flex items-center justify-center text-[#1F5A63] shrink-0 shadow-xs">
        <Award className="w-5 h-5" />
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#FAF5EB] border-t border-[#EAE2D3]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E232A] tracking-tight">
            Honors &amp; Recognition
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#737C8B] font-light max-w-lg mx-auto">
            Official competition awards, international certifications, and academic excellence honors.
          </p>
        </div>

        {/* Honors & Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {recognitionsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-7 rounded-3xl bg-white border border-[#EAE2D3] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header with Icon, Tag and Year */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  {getIcon(item.iconType, item.tag)}

                  <div className="flex flex-col items-end gap-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FAF5EB] border border-[#EAE2D3] text-[11px] font-semibold text-[#1E232A]">
                      {item.tag}
                    </span>
                    <span className="text-xs font-mono font-medium text-[#737C8B]">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Award / Distinction Title */}
                <h3 className="text-lg font-extrabold text-[#1E232A] group-hover:text-[#1F5A63] transition-colors leading-snug mb-1.5">
                  {item.role}
                </h3>

                {/* Organization / Competition */}
                <p className="text-xs font-semibold text-[#B87A14] uppercase tracking-wider mb-4">
                  {item.name} • <span className="text-[#737C8B] font-normal lowercase tracking-normal">{item.organization}</span>
                </p>

                {/* Direct Achievement Description */}
                <p className="text-sm text-[#4A505C] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Verified Badge Footer */}
              <div className="pt-4 mt-6 border-t border-[#EAE2D3]/70 flex items-center gap-1.5 text-xs font-medium text-[#1F5A63]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Credential</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
