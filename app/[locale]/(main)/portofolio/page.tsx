import React, { Suspense } from "react";

const Hero = React.lazy(() => import("@/src/page-section/portofolio/Hero"));
const CaseStudy = React.lazy(() => import("@/src/page-section/portofolio/CaseStudy"));
const Faq = React.lazy(() => import("@/src/page-section/Faq"));

export default function Portofolio() {
    return (
        <div>
            <Suspense>
                <Hero />
                <CaseStudy />
                <Faq />
            </Suspense>
        </div>
    )
}
