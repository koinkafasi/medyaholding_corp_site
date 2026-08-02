import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from '@gsap/react';
import React, { Suspense } from "react";

const Hero = React.lazy(() => import("@/src/page-section/about/Hero"));
const AboutUs = React.lazy(() => import("@/src/page-section/about/AboutUs"));
const Approach = React.lazy(() => import('@/src/page-section/about/Approach'));
const Faq = React.lazy(() => import('@/src/page-section/Faq'));

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(useGSAP);

export default function About() {
    return (
        <div>
            <Suspense>
                <Hero />
                <AboutUs />
                <Approach />
                <Faq />
            </Suspense>
        </div>
    )
}