import React from 'react';
import { motion } from 'framer-motion';

const blobs = [
  "/blob/Blob.svg",
  "/blob/Blob (1).svg",
  "/blob/Blob (2).svg",
  "/blob/Blob (3).svg",
];

const teamMembers = [
  {
    name: "ANAND BUGALIA",
    role: "President, Student Council",
    bio: "Leading campus startup ecosystem and strategic incubation initiatives.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7EYhDZp_j1JnA0EtHZeDXzg0c2BMybqIE6sRePV90_3nAVDWxzkyVfCpsPO0-l81blIDJSDpITbLgYx8vP2PZyUXot4kC-DrURtr6X13e3pNrHgaPFdRozdME3-W1bFHQ7LEaRslFqvqXk5D35iL903aCe7X9SZw3ecpGvmHGI4wzSxoqkIA9JemUAafPc8BYDu-1170Y94n40u0QGeK5d9RGIwbqkUFGr4kvC6BsHp-FWmEMbD4g36X832ERMUfLvauNA7H6yLTa",
    linkedin: "https://www.linkedin.com/company/iic-jssaten/posts/",
    instagram: "https://www.instagram.com/iic.jssaten/?hl=en",
  },
  {
    name: "HIRANI SHAH",
    role: "Vice President, IIC JSS",
    bio: "Fostering student innovation programs and industry partnerships.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfAbu_a0oPU3Oazd0VcMi8m-4zjpKC6mvBu7FktUanuaQUib0zYEYTC_0FGmTmOQpxtmU5aJj7yPHwViz4-7dX2OnEuqPA9NLimlovoXYc-36EWyZFnGaasnu5wsV40kbfKfMXzZT8zj15zSEC1wWmCxTvFagj3mbrjijh-zHHpgLzsH8g16r4uYKi51AZ1L7kEMBayjmzCJTOERx3IVraocFRW7_2iUMXj8NhT1NLuntjvhDI2dggEBukYWv7rUFg4rgfp1ZNwfHy",
    linkedin: "https://www.linkedin.com/company/iic-jssaten/posts/",
    instagram: "https://www.instagram.com/iic.jssaten/?hl=en",
  },
  {
    name: "ANKIT MASOOM",
    role: "Head Design & Creatives",
    bio: "Crafting brand identity, UI/UX aesthetics, and creative media.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAE5FPKkU51UB3VTrZA0Nnp6z65lqRKIUTYpagT9KFBD2_G5HEHYglhcKbVa6oXO3fm7BYgnL6EMFtCTFvAIf9EhxmPHxclOF8oG3vWg25cEPXQq04fXtfOioWQok1wms9_ej72dQNlCZsWNtPuhHf8HHcsCADW3ClRIBE-jdH6T8Cn_poINPd7akI4tw_AWoBGbt7JqgZpzIdV9k8-vEXUWVyUsxoHbL05LRKEk_tu5u2CnmcnQD7ik2CPKrCSNItirTlPDA6qawo5",
    linkedin: "https://www.linkedin.com/company/iic-jssaten/posts/",
    instagram: "https://www.instagram.com/iic.jssaten/?hl=en",
  },
  {
    name: "SONI",
    role: "Head Design & Creatives",
    bio: "Directing visual communications and event creative design.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4W2CBiTTRviWz5T2s0pZPcVLqj7zBkZme1otdhPAySpormDxKtIZRS2WGaAVIRtNn9VMCtbsJH98g700kLSw2fLv92JsaxK_lusZ2IlGYUGhPRL6kBu5oHCtuaBBYuWucfgH80OgTensBVOgjOvr5jvDCzuvFjFxg6HMnZvYvLHUHkpfTaGnfqSJSLaPVfHva0XRr9OYR8ceGS38h5U2Y3G3yEGEs3vm1FACRvlGKogppxiG8ljh9_GUrMxndfr7CZ_m9KU6i84T3",
    linkedin: "https://www.linkedin.com/company/iic-jssaten/posts/",
    instagram: "https://www.instagram.com/iic.jssaten/?hl=en",
  },
  {
    name: "GUNJAN",
    role: "Innovation Activity Lead",
    bio: "Organizing hackathons, ideathons, and campus innovation drives.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfAbu_a0oPU3Oazd0VcMi8m-4zjpKC6mvBu7FktUanuaQUib0zYEYTC_0FGmTmOQpxtmU5aJj7yPHwViz4-7dX2OnEuqPA9NLimlovoXYc-36EWyZFnGaasnu5wsV40kbfKfMXzZT8zj15zSEC1wWmCxTvFagj3mbrjijh-zHHpgLzsH8g16r4uYKi51AZ1L7kEMBayjmzCJTOERx3IVraocFRW7_2iUMXj8NhT1NLuntjvhDI2dggEBukYWv7rUFg4rgfp1ZNwfHy",
    linkedin: "https://www.linkedin.com/company/iic-jssaten/posts/",
    instagram: "https://www.instagram.com/iic.jssaten/?hl=en",
  },
  {
    name: "KRISHNA POOJITHA",
    role: "Start-up Activity Lead",
    bio: "Mentoring student founders and accelerating prototype development.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7EYhDZp_j1JnA0EtHZeDXzg0c2BMybqIE6sRePV90_3nAVDWxzkyVfCpsPO0-l81blIDJSDpITbLgYx8vP2PZyUXot4kC-DrURtr6X13e3pNrHgaPFdRozdME3-W1bFHQ7LEaRslFqvqXk5D35iL903aCe7X9SZw3ecpGvmHGI4wzSxoqkIA9JemUAafPc8BYDu-1170Y94n40u0QGeK5d9RGIwbqkUFGr4kvC6BsHp-FWmEMbD4g36X832ERMUfLvauNA7H6yLTa",
    linkedin: "https://www.linkedin.com/company/iic-jssaten/posts/",
    instagram: "https://www.instagram.com/iic.jssaten/?hl=en",
  },
  {
    name: "SHREEDHAR GUPTA",
    role: "IPR & Tech Transfer Lead",
    bio: "Assisting student researchers with patent filings and IP commercialization.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAE5FPKkU51UB3VTrZA0Nnp6z65lqRKIUTYpagT9KFBD2_G5HEHYglhcKbVa6oXO3fm7BYgnL6EMFtCTFvAIf9EhxmPHxclOF8oG3vWg25cEPXQq04fXtfOioWQok1wms9_ej72dQNlCZsWNtPuhHf8HHcsCADW3ClRIBE-jdH6T8Cn_poINPd7akI4tw_AWoBGbt7JqgZpzIdV9k8-vEXUWVyUsxoHbL05LRKEk_tu5u2CnmcnQD7ik2CPKrCSNItirTlPDA6qawo5",
    linkedin: "https://www.linkedin.com/company/iic-jssaten/posts/",
    instagram: "https://www.instagram.com/iic.jssaten/?hl=en",
  },
  {
    name: "DEEPIKA RATHOD",
    role: "Social Media & Public Relations",
    bio: "Managing public relations, media outreach, and community engagement.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4W2CBiTTRviWz5T2s0pZPcVLqj7zBkZme1otdhPAySpormDxKtIZRS2WGaAVIRtNn9VMCtbsJH98g700kLSw2fLv92JsaxK_lusZ2IlGYUGhPRL6kBu5oHCtuaBBYuWucfgH80OgTensBVOgjOvr5jvDCzuvFjFxg6HMnZvYvLHUHkpfTaGnfqSJSLaPVfHva0XRr9OYR8ceGS38h5U2Y3G3yEGEs3vm1FACRvlGKogppxiG8ljh9_GUrMxndfr7CZ_m9KU6i84T3",
    linkedin: "https://www.linkedin.com/company/iic-jssaten/posts/",
    instagram: "https://www.instagram.com/iic.jssaten/?hl=en",
  },
];

export default function Team() {
  const doodleImg = "/vector2/achievements _ graph, chart, analytics, statistics, flag, teamwork, team, working together.svg";

  return (
    <section id="team" className="bg-transparent py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-gilroy">
      <div className="max-w-6xl mx-auto">
        {/* Oversized Mint Color-Block Container (Block Mint #d1fae5) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#d1fae5] text-[#0f172a] rounded-[28px] md:rounded-[36px] p-8 md:p-14 lg:p-16 relative overflow-hidden shadow-sm"
        >
          {/* Header Row with Analytics Doodle */}
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-12">
            <div className="relative">
              {/* Decorative Star Accent */}
              <div className="absolute -top-6 -left-4 z-10 pointer-events-none opacity-80 hidden sm:block">
                <img src="/vector1/Group 18 (2).svg" alt="Star Accent Doodle" className="w-8 h-8 object-contain" />
              </div>

              {/* Section Eyebrow (figmaMono) */}
              <div className="mb-4">
                <span className="font-mono text-xs md:text-sm uppercase tracking-[0.35em] text-[#0f172a]/70 font-semibold bg-black/5 px-4 py-1.5 rounded-full inline-block">
                  STUDENT LEADERSHIP & TEAM
                </span>
              </div>

              {/* Section Headline */}
              <h2 className="font-gilroy text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-[#0f172a] mb-2 max-w-3xl">
                Meet the Minds Driving IIC JSS Noida
              </h2>

              <p className="font-gilroy text-base md:text-lg text-[#0f172a]/80 max-w-2xl">
                Reach out for startup guidance, event participation, incubation queries, or partner proposals.
              </p>
            </div>

            {/* Analytics Doodle Asset */}
            <div className="w-full lg:w-64 flex-shrink-0 flex justify-center">
              <img src={doodleImg} alt="Analytics & Statistics Doodle" className="w-full max-w-[200px] h-auto object-contain pointer-events-none select-none mix-blend-multiply" />
            </div>
          </div>

          {/* Grid of Custom Styled Team Cards (Gilroy Typography Specified) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {teamMembers.map((member, idx) => (
              <div 
                key={member.name + idx}
                className="bg-white text-[#060016] p-4.5 sm:p-5 rounded-[28px] outline outline-1 outline-[#00160a]/10 shadow-[-8px_16px_24px_rgba(0,22,10,0.06)] hover:shadow-[-12px_20px_28px_rgba(0,22,10,0.12)] transition-[transform,box-shadow] duration-300 ease-out flex flex-col items-center text-center justify-between group hover:-translate-y-1 font-gilroy"
              >
                {/* Profile Image Container with Background Organic Blob */}
                <div className="relative w-full aspect-square mb-3.5 flex items-center justify-center">
                  {/* Organic Background Blob */}
                  <img 
                    src={blobs[idx % blobs.length]} 
                    alt="" 
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none scale-110 opacity-75 group-hover:scale-120 group-hover:opacity-95 transition-transform duration-500" 
                  />

                  {/* Profile Avatar Frame */}
                  <div className="relative w-[84%] h-[84%] overflow-hidden rounded-[20px] border border-black/10 shadow-sm z-10 bg-white">
                    <img 
                      src={member.img} 
                      alt={member.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[transform,filter] duration-500 scale-100 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Member Info (Gilroy Typography) */}
                <div className="flex flex-col items-center flex-grow justify-center w-full mb-3">
                  <h3 className="font-gilroy text-base sm:text-lg font-bold text-[#060016] tracking-tight mb-1.5">
                    {member.name}
                  </h3>
                  
                  <span className="font-mono text-[10px] uppercase tracking-wider text-white bg-[#060016] px-3 py-1 rounded-full font-bold inline-block mb-2">
                    {member.role}
                  </span>

                  <p className="font-gilroy text-[11px] text-[#060016]/75 leading-relaxed font-normal px-1 line-clamp-2">
                    {member.bio}
                  </p>
                </div>

                {/* Social Buttons (LinkedIn & Instagram Pills with Gilroy Typography) */}
                <div className="w-full flex items-center justify-center gap-2 pt-2.5 border-t border-[#060016]/10">
                  {/* LinkedIn Button */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 px-2.5 bg-[#060016] text-white hover:bg-neutral-800 transition-all duration-300 rounded-full font-gilroy text-[11px] font-bold inline-flex items-center justify-center gap-1 shadow-sm group/btn"
                    title={`Connect with ${member.name} on LinkedIn`}
                  >
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>

                  {/* Instagram Button */}
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 px-2.5 bg-white text-[#060016] border border-[#060016]/20 hover:bg-neutral-100 transition-all duration-300 rounded-full font-gilroy text-[11px] font-bold inline-flex items-center justify-center gap-1"
                    title={`Follow ${member.name} on Instagram`}
                  >
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="pt-8 border-t border-black/10 flex flex-wrap items-center justify-between gap-6 font-gilroy">
            <div>
              <h4 className="font-gilroy text-xl font-bold text-[#0f172a]">Have a startup idea or event query?</h4>
              <p className="font-gilroy text-sm text-[#0f172a]/75">Connect directly with our council executive leads.</p>
            </div>
            
            <a 
              href="#contact" 
              className="px-8 py-3.5 bg-[#000000] text-white font-gilroy font-semibold text-base rounded-full hover:bg-neutral-800 transition-all shadow-md inline-flex items-center gap-2"
            >
              <span>Contact Us</span>
              <span className="font-mono text-xs">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}