import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'wouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SmoothScroll from '@/components/SmoothScroll';
import { Bell, Calendar, MapPin, ArrowLeft, CheckCircle2, Sparkles, Clock, ExternalLink } from 'lucide-react';

interface EventItem {
  id: string;
  category: string;
  tag: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  colorBg: string;
  status: string;
  desc: string;
  doodleImg?: string;
}

const upcomingEventsData: EventItem[] = [
  {
    id: 'event-01',
    category: 'Incubation & Pitch Fests',
    tag: 'FLAGSHIP PITCH',
    title: 'Will be uploaded soon',
    date: 'COMING SOON',
    time: 'COMING SOON',
    venue: 'Will be uploaded soon',
    colorBg: '#e4f5a3',
    status: 'COMING SOON',
    desc: 'Event details, schedule, and registration guidelines will be uploaded soon.',
    doodleImg: '/vector2/achievements _ teamwork, team, working together, assistance, man, woman, people, flag, target.svg',
  },
  {
    id: 'event-02',
    category: 'Hackathons & Ideathons',
    tag: '24HR HACKATHON',
    title: 'Will be uploaded soon',
    date: 'COMING SOON',
    time: 'COMING SOON',
    venue: 'Will be uploaded soon',
    colorBg: '#e9d5ff',
    status: 'COMING SOON',
    desc: 'Event details, schedule, and registration guidelines will be uploaded soon.',
    doodleImg: '/card/puzzle.png',
  },
  {
    id: 'event-03',
    category: 'IPR & Tech Transfer',
    tag: 'PATENT WORKSHOP',
    title: 'Will be uploaded soon',
    date: 'COMING SOON',
    time: 'COMING SOON',
    venue: 'Will be uploaded soon',
    colorBg: '#d1fae5',
    status: 'COMING SOON',
    desc: 'Event details, schedule, and registration guidelines will be uploaded soon.',
    doodleImg: '/card/papper.png',
  },
  {
    id: 'event-04',
    category: 'Incubation & Pitch Fests',
    tag: 'STARTUP EXPO',
    title: 'Will be uploaded soon',
    date: 'COMING SOON',
    time: 'COMING SOON',
    venue: 'Will be uploaded soon',
    colorBg: '#ffedd5',
    status: 'COMING SOON',
    desc: 'Event details, schedule, and registration guidelines will be uploaded soon.',
    doodleImg: '/vector2/product development _ idea, thought, innovation, people, team, teamwork, working together.svg',
  },
  {
    id: 'event-05',
    category: 'Hackathons & Ideathons',
    tag: 'IDEATHON',
    title: 'Will be uploaded soon',
    date: 'COMING SOON',
    time: 'COMING SOON',
    venue: 'Will be uploaded soon',
    colorBg: '#fce7f3',
    status: 'COMING SOON',
    desc: 'Event details, schedule, and registration guidelines will be uploaded soon.',
    doodleImg: '/card/hat.png',
  },
  {
    id: 'event-06',
    category: 'IPR & Tech Transfer',
    tag: 'NATIONAL CONCLAVE',
    title: 'Will be uploaded soon',
    date: 'COMING SOON',
    time: 'COMING SOON',
    venue: 'Will be uploaded soon',
    colorBg: '#fdfbf7',
    status: 'COMING SOON',
    desc: 'Event details, schedule, and registration guidelines will be uploaded soon.',
    doodleImg: '/card/butterfly.png',
  },
];

const categories = [
  'All Events',
  'Hackathons & Ideathons',
  'Incubation & Pitch Fests',
  'IPR & Tech Transfer',
];

export default function UpcomingEvents() {
  const [, setLocation] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('All Events');
  const [notifiedEvents, setNotifiedEvents] = useState<Record<string, boolean>>({});

  const filteredEvents = upcomingEventsData.filter(
    (ev) => selectedCategory === 'All Events' || ev.category === selectedCategory
  );

  const toggleNotify = (id: string) => {
    setNotifiedEvents((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <SmoothScroll>
      <div className="bg-white text-black selection:bg-black selection:text-white overflow-x-hidden min-h-screen flex flex-col justify-between">
        <Navbar />

        {/* Main Content Area */}
        <main className="pt-24 md:pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full relative z-10">
          {/* Hairline Grid Overlay */}
          <div className="absolute inset-0 bg-grid-hairline opacity-50 pointer-events-none -z-10" />

          {/* Top Breadcrumb Navigation & Back Link */}
          <div className="mb-8 flex items-center justify-between">
            <button
              onClick={() => setLocation('/')}
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 border border-black/10 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#060016] hover:bg-black hover:text-white transition-all cursor-pointer shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </button>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-black/50 font-bold hidden sm:inline-block">
              IIC JSS NOIDA · CALENDAR 2026-27
            </span>
          </div>

          {/* Section Hero Header Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 p-8 sm:p-12 bg-[#060016] text-white rounded-[28px] md:rounded-[36px] relative overflow-hidden shadow-xl border border-white/10"
          >
            {/* Decorative Sparkle Accent */}
            <div className="absolute top-6 right-8 opacity-40 pointer-events-none hidden sm:block">
              <Sparkles className="w-10 h-10 text-[#e4f5a3]" />
            </div>

            <div className="max-w-2xl relative z-10">
              <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#e4f5a3] font-bold block mb-4">
                WHAT WE DO · UPCOMING CALENDAR
              </span>
              <h1 className="font-sans text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-white mb-4">
                Upcoming Innovation Events & Summits
              </h1>
              <p className="font-sans text-base sm:text-lg text-white/80 leading-relaxed">
                Discover upcoming hackathons, startup pitch competitions, patent workshops, and investor conclaves organized by Institution's Innovation Council, JSSATE Noida.
              </p>
            </div>
          </motion.div>

          {/* Category Filter Pills */}
          <div className="mb-10 flex flex-wrap items-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#060016] text-white shadow-md'
                    : 'bg-neutral-100 text-black/70 border border-black/10 hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Upcoming Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  style={{ backgroundColor: item.colorBg }}
                  className="text-[#0f172a] rounded-[28px] p-7 sm:p-9 relative overflow-hidden shadow-sm hover:shadow-md transition-all border border-black/10 flex flex-col justify-between group"
                >
                  {/* Decorative Background Asset */}
                  {item.doodleImg && (
                    <img
                      src={item.doodleImg}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="absolute -right-4 -bottom-4 w-36 h-36 object-contain pointer-events-none select-none opacity-20 mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                    />
                  )}

                  <div>
                    {/* Top Row: Tag & Coming Soon Badge */}
                    <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] font-bold text-[#0f172a]/70 bg-black/5 px-3 py-1 rounded-full border border-black/5">
                        {item.tag}
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-black text-white shadow-xs">
                        <Clock className="w-3 h-3 text-[#e4f5a3]" />
                        <span>{item.status}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0f172a] mb-3">
                      {item.title}
                    </h3>

                    {/* Event Metadata (Date, Time, Venue) */}
                    <div className="flex flex-col gap-2 mb-4 text-xs font-sans font-semibold text-[#0f172a]/85">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#0f172a]/70 flex-shrink-0" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#0f172a]/70 flex-shrink-0" />
                        <span>{item.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#0f172a]/70 flex-shrink-0" />
                        <span>{item.venue}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-sans text-sm text-[#0f172a]/80 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Interactive Know More Button (Directs to WhatsApp Channel) */}
                  <div className="pt-4 border-t border-black/10 flex items-center justify-between gap-4">
                    <a
                      href="https://whatsapp.com/channel/0029Vb93O53GE56qqFW7E800"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full text-xs font-sans font-bold transition-all cursor-pointer inline-flex items-center gap-2 shadow-xs bg-white text-[#0f172a] border border-black/15 hover:bg-black hover:text-white"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>KNOW MORE</span>
                    </a>

                    <span className="font-mono text-[11px] font-bold text-[#0f172a]/60 uppercase tracking-widest">
                      COMING SOON
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </SmoothScroll>
  );
}
