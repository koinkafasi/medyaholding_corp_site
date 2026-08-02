import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from '@gsap/react';
import React, { Suspense } from "react";

const Hero = React.lazy(() => import('@/src/page-section/sustainability/Hero'));
const SustainabilityContent = React.lazy(() => import('@/src/page-section/sustainability/SustainabilityContent'));

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(useGSAP);

export default function Sustainability() {
    return (
        <div>
            <Suspense>
                <Hero />
                <SustainabilityContent />
            </Suspense>
        </div>
    )
}
