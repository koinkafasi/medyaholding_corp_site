import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from '@gsap/react';
import React, { Suspense } from "react";

const Hero = React.lazy(() => import("@/src/page-section/about/Hero"));
const AboutUs = React.lazy(() => import("@/src/page-section/about/AboutUs"));
const CorporateVideo = React.lazy(() => import("@/src/page-section/about/CorporateVideo"));
const Approach = React.lazy(() => import('@/src/page-section/about/Approach'));

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(useGSAP);

export default function About() {
    return (
        <div>
            <Suspense>
                <Hero />
                <AboutUs />
                <CorporateVideo />
                <Approach />
            </Suspense>
        </div>
    )
}