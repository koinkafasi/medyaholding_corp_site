import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from '@gsap/react';
import React, { Suspense } from "react";

const Hero = React.lazy(() => import('@/src/page-section/investors/Hero'));
const InvestorsContent = React.lazy(() => import('@/src/page-section/investors/InvestorsContent'));

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(useGSAP);

export default function Investors() {
    return (
        <div>
            <Suspense>
                <Hero />
                <InvestorsContent />
            </Suspense>
        </div>
    )
}
