import React, { Suspense } from "react";

const Hero = React.lazy(() => import("@/src/page-section/contact/Hero"));
const Form = React.lazy(() => import("@/src/page-section/contact/Form"));

export default function Contact() {
    return (
        <div>
            <Suspense>
                <Hero />
                <Form />
            </Suspense>
        </div>
    )
}
