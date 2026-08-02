import React, { Suspense } from "react";

const Hero = React.lazy(() => import("@/src/page-section/portofolio/Hero"));
const LatestProject = React.lazy(() => import("@/src/page-section/portofolio/LatestProject"));
const CaseStudy = React.lazy(() => import("@/src/page-section/portofolio/CaseStudy"));
const Faq = React.lazy(() => import("@/src/page-section/Faq"));

export default function Portofolio() {
    return (
        <div>
            <Suspense>
                <Hero />
                <LatestProject />
                <CaseStudy />
                <Faq />
            </Suspense>
        </div>
    )
}
