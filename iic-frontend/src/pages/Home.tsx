import React, { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
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
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      <SmoothScroll>
        <div className="bg-[#ffffff] text-black selection:bg-black selection:text-white overflow-x-hidden min-h-screen">
          {!isLoading && <Navbar />}
        
        {/* Main Hero Section */}
        <Hero />

        {/* Light Hairline Grid Background Layer (Starts immediately after Hero section) */}
        <div className="relative z-0">
          <div className="absolute inset-0 z-0 bg-grid-hairline pointer-events-none opacity-70" />

          {/* Section Components */}
          <div className="relative z-10">
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
          </div>
        </div>

        <ScrollToTop />
      </div>
    </SmoothScroll>
    </>
  );
}