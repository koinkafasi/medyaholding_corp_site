import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from '@gsap/react';
import React, { Suspense } from "react";

const Hero = React.lazy(() => import('@/src/page-section/sectors/Hero'));
const SectorsList = React.lazy(() => import('@/src/page-section/sectors/SectorsList'));
const Faq = React.lazy(() => import('@/src/page-section/Faq'));

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(useGSAP);

export default function Sectors() {
    return (
        <div>
            <Suspense>
                <Hero />
                <SectorsList />
                <Faq />
            </Suspense>
        </div>
    )
}
