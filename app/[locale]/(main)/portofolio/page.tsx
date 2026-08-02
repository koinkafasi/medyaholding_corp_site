import React, { Suspense } from "react";

const Hero = React.lazy(() => import("@/src/page-section/portofolio/Hero"));
const CaseStudy = React.lazy(() => import("@/src/page-section/portofolio/CaseStudy"));

export default function Portofolio() {
    return (
        <div>
            <Suspense>
                <Hero />
                <CaseStudy />
            </Suspense>
        </div>
    )
}
