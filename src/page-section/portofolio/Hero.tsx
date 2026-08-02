"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocale } from "next-intl";

import Image from "next/image";
import Button from "@/src/component/Button";
import Typography from "@/src/component/Typography";
import HeroBackground from "@/src/component/HeroBackground";
import { Link } from "@/i18n/navigation";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

import SliderPorto1 from '@/src/assets/images/slider-porto-1.png';
import SliderPorto2 from '@/src/assets/images/slider-porto-2.png';
import SliderPorto3 from '@/src/assets/images/slider-porto-3.png';
import SliderPorto4 from '@/src/assets/images/slider-porto-4.png';
import SliderPorto5 from '@/src/assets/images/slider-porto-5.png';
import SliderPorto6 from '@/src/assets/images/slider-porto-6.png';

const sliders = [
    { src: SliderPorto1, alt: "Selected work" },
    { src: SliderPorto2, alt: "Selected work" },
    { src: SliderPorto3, alt: "Selected work" },
    { src: SliderPorto4, alt: "Selected work" },
    { src: SliderPorto5, alt: "Selected work" },
    { src: SliderPorto6, alt: "Selected work" },
];

export default function Hero() {
    const dict = getDictionary(useLocale() as Locale);
    const sliderRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!sliderRef.current) return;

        const wrapper = sliderRef.current.querySelector(".slider-track") as HTMLDivElement;
        if (!wrapper) return;

        const totalWidth = wrapper.scrollWidth / 2;
        gsap.to(wrapper, {
            x: `-=${totalWidth}`,
            duration: 20,
            ease: "linear",
            repeat: -1,
            modifiers: {
                x: (x) => {
                    const current = parseFloat(x);
                    return (current % totalWidth) + "px";
                },
            },
        });
    }, []);
    return (
        <HeroBackground component={
            <div className="mt-[72px] lg:mt-[120px] overflow-hidden w-full" ref={sliderRef}>
                <div className="flex items-center gap-[32px] slider-track w-max">
                    {[...sliders, ...sliders].map((slide, index) => (
                        <div key={`slider-porto-${index}`} className="flex flex-col items-start gap-[16px] w-[230px]">
                            <Image src={slide.src} alt={slide.alt} />
                        </div>
                    ))}
                </div>
            </div>
        }>
            <div className="flex flex-col lg:flex-row justify-between items-start self-stretch">
                <div className="w-full lg:w-[70%]">
                    <Typography as="div" color="#fff" size={72} sizeTablet={52} sizeMobile={40} weight={600} lineHeight={85} lineHeightTablet={64} lineHeightMobile={52} letterSpacing={-2.16} letterSpacingMobile={-1.2} noDarkMode>
                        {dict.portfolioHero.title}
                    </Typography>
                    <Typography color="#fff" noDarkMode size={18} className="mt-[24px] w-full lg:w-[70%]">
                        {dict.portfolioHero.subtitle}
                    </Typography>
                    <Link href="/contact">
                        <Button variant="primary" className="mt-[32px]">{dict.homeHero.cta}</Button>
                    </Link>
                </div>
            </div>
        </HeroBackground>
    )
}
