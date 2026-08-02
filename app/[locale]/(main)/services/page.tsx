import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from '@gsap/react';
import React, { Suspense } from "react";

const Hero = React.lazy(() => import('@/src/page-section/services/Hero'));
const OurServices = React.lazy(() => import('@/src/page-section/services/OurServices'));

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(useGSAP);

export default function Services() {
    return (
        <div>
            <Suspense>
                <Hero />
                <OurServices />
            </Suspense>
        </div>
    )
}