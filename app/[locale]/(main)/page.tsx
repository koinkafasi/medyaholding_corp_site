"use client";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from '@gsap/react';
import { useRef } from "react";
import { useLocale } from "next-intl";

import Hero from "@/src/page-section/home/Hero";
import Manifesto from "@/src/page-section/home/Manifesto";
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
  const manifestoRef = useRef<HTMLDivElement | null>(null);
  const partnersRef = useRef<HTMLDivElement | null>(null);
  const valueRef = useRef<HTMLDivElement | null>(null);
  const stackRef = useRef<HTMLDivElement | null>(null);
  const focusRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  const scrollToNextSection = () => {
    if (manifestoRef.current) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: manifestoRef.current, offsetY: 0 },
        ease: "power2.inOut",
      });
    }
  };

  const sections = [
    { id: "hero", label: dict.sectionNav.hero, ref: heroRef },
    { id: "manifesto", label: dict.sectionNav.philosophy, ref: manifestoRef },
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
      <div ref={heroRef} className="snap-section">
        <Hero onScrollToTestimonials={scrollToNextSection} />
      </div>
      <div ref={manifestoRef} className="snap-section">
        <Manifesto />
      </div>
      <div ref={partnersRef} className="snap-section">
        <LogoPartners />
        <PartnerInvite />
      </div>
      <div ref={valueRef} className="snap-section">
        <ValueProposition />
      </div>
      <div ref={stackRef} className="snap-section">
        <StackShowcase />
      </div>
      <div ref={focusRef} className="snap-section">
        <FocusAreas />
      </div>
      <div ref={servicesRef} className="snap-section">
        <Services />
      </div>
      <div ref={ctaRef} className="snap-section">
        <CtaGrid />
      </div>
    </div>
  )
}
