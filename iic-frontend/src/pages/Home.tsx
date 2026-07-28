import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MarqueeStrip from '@/components/MarqueeStrip';
import AboutUs from '@/components/AboutUs';
import Events from '@/components/Events';
import Echo from '@/components/Echo';
import Gallery from '@/components/Gallery';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SmoothScroll from '@/components/SmoothScroll';
import ParallaxReveal from '@/components/ParallaxReveal';

export default function Home() {
  return (
    <SmoothScroll>
      <div className="bg-white text-black selection:bg-black selection:text-white overflow-x-hidden min-h-screen">
        <Navbar />
        
        <Hero />

        <MarqueeStrip />

        <ParallaxReveal speed={0.12} revealOffset={70} id="about">
          <AboutUs />
        </ParallaxReveal>

        <ParallaxReveal speed={0.08} revealOffset={60} id="events">
          <Events />
        </ParallaxReveal>

        <ParallaxReveal speed={0.15} revealOffset={80} id="initiatives">
          <Echo />
        </ParallaxReveal>

        <ParallaxReveal speed={0.1} revealOffset={70} id="gallery">
          <Gallery />
        </ParallaxReveal>

        <ParallaxReveal speed={0.08} revealOffset={60} id="team">
          <Team />
        </ParallaxReveal>

        <ParallaxReveal speed={0.05} revealOffset={40} id="footer">
          <Footer />
        </ParallaxReveal>

        <ScrollToTop />
      </div>
    </SmoothScroll>
  );
}