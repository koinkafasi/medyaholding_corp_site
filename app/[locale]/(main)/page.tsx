"use client";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from '@gsap/react';
import { useRef } from "react";

import Hero from "@/src/page-section/home/Hero";
import AboutUs from "@/src/page-section/about/AboutUs";
import LogoPartners from "@/src/page-section/home/LogoPartners";
import ValueProposition from "@/src/page-section/home/ValueProposition";
import StackShowcase from "@/src/page-section/home/StackShowcase";
import FocusAreas from "@/src/page-section/home/FocusAreas";
import Services from "@/src/page-section/home/Services";
import LatestProject from "@/src/page-section/home/LatestProject";
import CtaGrid from "@/src/page-section/home/CtaGrid";
import Pricing from "@/src/page-section/PricingSection";
import Faq from "@/src/page-section/Faq";

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
      <Hero onScrollToTestimonials={scrollToNextSection} />
      <div ref={nextSectionRef}>
        <AboutUs />
      </div>
      <LogoPartners />
      <ValueProposition />
      <StackShowcase />
      <FocusAreas />
      <Services />
      <LatestProject />
      <CtaGrid />
      <Pricing />
      <Faq />
    </div>
  )
}
