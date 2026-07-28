import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Custom CSS for bi-directional marquee animation with hover pause
const marqueeStyle = `
  @keyframes scroll-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes scroll-right {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
  .animate-marquee-left {
    animation: scroll-left 45s linear infinite;
  }
  .animate-marquee-right {
    animation: scroll-right 45s linear infinite;
  }
  .marquee-container:hover .animate-marquee-left,
  .marquee-container:hover .animate-marquee-right {
    animation-play-state: paused;
  }
`;

type ImageItem = {
  type: 'image';
  src: string;
  alt: string;
  title?: string;
};

type TestimonialItem = {
  type: 'testimonial';
  user: string;
  avatar: string;
  role: string;
  text: string;
};

type MarqueeItemData = ImageItem | TestimonialItem;

const row1Data: MarqueeItemData[] = [
  { 
    type: 'image', 
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMhYJO0rXf4YfjBpgJwWkD42YLtzfOchB9jbqyM2hwKigvbE13-RXrotVDcXivC-mMTCTXJ_4h7sILCAOlgW058BFG1RnC8pIlRP1IgOWCJlbI5S92GYKbb0WdSFmKK4BFZtQbbdKyYPgTJ78p5P8ZlB9iJ8s37MxOBURsAwTB5rtM9w_3kTGRBpStm5TBSXNLjvqzOh_EHyaUf0ABxUfLofhwFI4KMDipehgoG5urzjGu_scoBvJobCScDadBZRO1pFxE6aO18m1e", 
    alt: 'Ideathon & Hackathon Flagship',
    title: 'Ideathon 2025'
  },
  { 
    type: 'testimonial', 
    user: 'ananya_sharma', 
    role: 'Founder, EcoBytes', 
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', 
    text: 'IIC JSS Noida provided us the perfect platform and mentorship to build our prototype from scratch!' 
  },
  { 
    type: 'image', 
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwZrxsQsVy4erK1tGQFohaxEDI1jG2-2J9MWacw2l16Q4frVUj44AbPVRdEgWwq0YJ9ObV6vAjJ-zMOgjX2t7nlfAGApZX-ErNcpOIV2eHCdRBRIJQHxOYNVYkOejUYKnJ6hBAkeM0xVgRbp3XcJsATzzdpES4dpB2BW4rRwhJ4SLl8EIZU1a9VhR8raRTxbuSonH6ESbDT22La-CijaS2LJQT1M0AQC5GlWYtRPOuN5kGMqJ2lchvVt8gdvxNL4FyDRZotULUCTto", 
    alt: 'Keynote Speaker Session',
    title: 'Keynote Founder Talk'
  },
  { 
    type: 'image', 
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIfi8niBVqzF7JV4R-JP-XqNsfF8ofLO6YxXO9tyoOpWyQfwgjpUSm576HItEyQ5FwlA6VQ5lCfsZDkM9JzakRfVOt7PLP1OZLtl_PwuWhUgIC6eGK6CRptNmuBk8HUWoMFShXSHOzujFiYOlmbNkOESU8bMdqrSzlMYTZYVS9pGPuxYp0CAkQp3d2qXivnweaTAjf4u5916gMq6Zte49NLuHHE_A-NQ9iLFcRqk8nR7ZyH3XBQyevyTlY1_r5d-EPrTDEkT4CaxDE", 
    alt: 'JSSATE Auditorium Summit',
    title: 'Innovation Summit'
  },
  { 
    type: 'testimonial', 
    user: 'rohan_verma', 
    role: 'Winner, Pitch Fest 2025', 
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', 
    text: 'The energy at the Innovation Summit was unreal. Pitching directly to angel investors was a game-changer.' 
  },
  { 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80', 
    alt: 'Startup Expo & Mentorship',
    title: 'Startup Expo'
  },
];

const row2Data: MarqueeItemData[] = [
  { 
    type: 'testimonial', 
    user: 'priyanshu_tech', 
    role: 'Student Innovator', 
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80', 
    text: 'The IPR & Patent workshops organized by IIC helped us file our very first patent application seamlessly.' 
  },
  { 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80', 
    alt: 'Hackathon Coding Marathon',
    title: '24hr Hackathon'
  },
  { 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80', 
    alt: 'Team Collaboration Session',
    title: 'Incubation Sprint'
  },
  { 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80', 
    alt: 'Workshop and Training',
    title: 'IPR Workshop'
  },
  { 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80', 
    alt: 'Fireside Chat with Founders',
    title: 'Founder Fireside'
  },
  { 
    type: 'testimonial', 
    user: 'sneha_roy', 
    role: 'Co-Founder, HealthPulse', 
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80', 
    text: 'From campus idea to incubator funding, IIC team backed us every step of the way!' 
  },
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const MarqueeItem = ({ item }: { item: MarqueeItemData }) => {
    if (item.type === 'image') {
      return (
        <div 
          onClick={() => setActiveImage(item.src)}
          className="flex-shrink-0 mx-2 sm:mx-3 md:mx-4 cursor-pointer group relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 shadow-lg select-none"
        >
          <img
            src={item.src}
            alt={item.alt}
            className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[280px] md:h-[280px] object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="whitespace-normal absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
            <span className="text-[#FFB800] text-xs font-bold uppercase tracking-wider mb-1">
              {item.title || 'IIC Event'}
            </span>
            <span className="text-white text-sm font-semibold flex items-center gap-1">
              <span>View Image</span>
              <span className="material-symbols-outlined text-sm">fullscreen</span>
            </span>
          </div>
        </div>
      );
    }

    if (item.type === 'testimonial') {
      return (
        <div className="flex-shrink-0 mx-2 sm:mx-3 md:mx-4">
          <div className="whitespace-normal bg-[#1C1E2A] border border-white/10 w-[260px] h-[200px] sm:w-[320px] sm:h-[250px] md:w-[350px] md:h-[280px] rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 shadow-lg flex flex-col justify-between hover:border-[#FFB800]/50 transition-colors">
            <div className="flex items-center space-x-3 mb-2">
              <img
                src={item.avatar}
                alt={`${item.user} avatar`}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-[#FFB800] flex-shrink-0"
                loading="lazy"
              />
              <div className="min-w-0 flex-1">
                <div className="font-semibold text-white text-sm sm:text-base truncate">@{item.user}</div>
                <div className="text-xs text-[#FFB800] font-medium truncate">{item.role}</div>
              </div>
            </div>
            <blockquote className="text-slate-300 text-xs sm:text-sm leading-relaxed flex-grow italic overflow-hidden break-words line-clamp-4">
              "{item.text}"
            </blockquote>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <section id="gallery" className="bg-white py-16 sm:py-24 font-sans overflow-hidden border-t border-black/5 relative">
      <style>{marqueeStyle}</style>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-12 sm:mb-16 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-black/70 bg-neutral-100 border border-black/10 px-4 py-1.5 rounded-full inline-block font-semibold">
            COMMUNITY & EVENTS GALLERY
          </span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-sans text-4xl sm:text-6xl text-black mb-6 font-extrabold tracking-tighter"
        >
          Life at IIC JSSATE Noida
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-sans text-black/70 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
        >
          Explore moments from our flagship hackathons, pitch fests, founder workshops, and startup success stories!
        </motion.p>
      </div>

      {/* Top Marquee (Scrolls Left) */}
      <div className="marquee-container relative flex overflow-hidden mb-4 sm:mb-8 w-full">
        <div className="flex animate-marquee-left whitespace-nowrap min-w-max">
          {row1Data.map((item, index) => (
            <MarqueeItem key={`row1-1-${index}`} item={item} />
          ))}
          {row1Data.map((item, index) => (
            <MarqueeItem key={`row1-2-${index}`} item={item} />
          ))}
          {row1Data.map((item, index) => (
            <MarqueeItem key={`row1-3-${index}`} item={item} />
          ))}
        </div>
      </div>

      {/* Bottom Marquee (Scrolls Right) */}
      <div className="marquee-container relative flex overflow-hidden w-full">
        <div className="flex animate-marquee-right whitespace-nowrap min-w-max">
          {row2Data.map((item, index) => (
            <MarqueeItem key={`row2-1-${index}`} item={item} />
          ))}
          {row2Data.map((item, index) => (
            <MarqueeItem key={`row2-2-${index}`} item={item} />
          ))}
          {row2Data.map((item, index) => (
            <MarqueeItem key={`row2-3-${index}`} item={item} />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <button 
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 text-white text-4xl hover:text-[#FFB800] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-4xl">close</span>
            </button>
            <img 
              src={activeImage} 
              alt="Enlarged gallery photo" 
              className="max-w-full max-h-[85vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}