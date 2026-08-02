"use client";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from '@gsap/react';
import { useRef } from "react";
import { useLocale } from "next-intl";

import Hero from "@/src/page-section/home/Hero";
import AboutUs from "@/src/page-section/about/AboutUs";
import LogoPartners from "@/src/page-section/home/LogoPartners";
import PartnerInvite from "@/src/page-section/home/PartnerInvite";
import ValueProposition from "@/src/page-section/home/ValueProposition";
import StackShowcase from "@/src/page-section/home/StackShowcase";
import FocusAreas from "@/src/page-section/home/FocusAreas";
import Services from "@/src/page-section/home/Services";
import CtaGrid from "@/src/page-section/home/CtaGrid";
import SectionDotNav from "@/src/component/SectionDotNav";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollToPlugin);

export default function Home() {
  const dict = getDictionary(useLocale() as Locale);

  const heroRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const partnersRef = useRef<HTMLDivElement | null>(null);
  const valueRef = useRef<HTMLDivElement | null>(null);
  const stackRef = useRef<HTMLDivElement | null>(null);
  const focusRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  const scrollToNextSection = () => {
    if (aboutRef.current) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: aboutRef.current, offsetY: 50 },
        ease: "power2.inOut",
      });
    }
  };

  const sections = [
    { id: "hero", label: dict.sectionNav.hero, ref: heroRef },
    { id: "about", label: dict.sectionNav.about, ref: aboutRef },
    { id: "partners", label: dict.sectionNav.partners, ref: partnersRef },
    { id: "value", label: dict.sectionNav.value, ref: valueRef },
    { id: "stack", label: dict.sectionNav.stack, ref: stackRef },
    { id: "focus", label: dict.sectionNav.focus, ref: focusRef },
    { id: "services", label: dict.sectionNav.services, ref: servicesRef },
    { id: "cta", label: dict.sectionNav.cta, ref: ctaRef },
  ];

  return (
    <div className="">
      <SectionDotNav sections={sections} />
      <div ref={heroRef}>
        <Hero onScrollToTestimonials={scrollToNextSection} />
      </div>
      <div ref={aboutRef}>
        <AboutUs />
      </div>
      <div ref={partnersRef}>
        <LogoPartners />
        <PartnerInvite />
      </div>
      <div ref={valueRef}>
        <ValueProposition />
      </div>
      <div ref={stackRef}>
        <StackShowcase />
      </div>
      <div ref={focusRef}>
        <FocusAreas />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={ctaRef}>
        <CtaGrid />
      </div>
    </div>
  )
}
