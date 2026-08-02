"use client";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from '@gsap/react';
import React, { useRef, Suspense } from "react";

const Hero = React.lazy(() => import("@/src/page-section/home/Hero"));
const AboutUs = React.lazy(() => import("@/src/page-section/about/AboutUs"));
const LatestProject = React.lazy(() => import("@/src/page-section/home/LatestProject"));
const LogoPartners = React.lazy(() => import("@/src/page-section/home/LogoPartners"));
const Services = React.lazy(() => import("@/src/page-section/home/Services"));
const Pricing = React.lazy(() => import("@/src/page-section/PricingSection"));
const Faq = React.lazy(() => import("@/src/page-section/Faq"));

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollToPlugin);

export default function Home() {
  const nextSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: nextSectionRef.current, offsetY: 50 },
        ease: "power2.inOut",
      });
    }
  };

  return (
    <div className="">
      <Suspense>
        <Hero onScrollToTestimonials={scrollToNextSection} />
        <div ref={nextSectionRef}>
          <AboutUs />
        </div>
        <LatestProject />
        <LogoPartners />
        <Services />
        <Pricing />
        <Faq />
      </Suspense>
    </div>
  )
}
