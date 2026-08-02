import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from '@gsap/react';
import React, { Suspense } from "react";

const Hero = React.lazy(() => import('@/src/page-section/careers/Hero'));
const CareersContent = React.lazy(() => import('@/src/page-section/careers/CareersContent'));

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(useGSAP);

export default function Careers() {
    return (
        <div>
            <Suspense>
                <Hero />
                <CareersContent />
            </Suspense>
        </div>
    )
}
