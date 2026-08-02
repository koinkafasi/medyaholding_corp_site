import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from '@gsap/react';
import React, { Suspense } from "react";

const Hero = React.lazy(() => import('@/src/page-section/news/Hero'));
const NewsContent = React.lazy(() => import('@/src/page-section/news/NewsContent'));

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(useGSAP);

export default function News() {
    return (
        <div>
            <Suspense>
                <Hero />
                <NewsContent />
            </Suspense>
        </div>
    )
}
