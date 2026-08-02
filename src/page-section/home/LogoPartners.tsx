"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocale } from "next-intl";

import Typography from "@/src/component/Typography";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

export default function LogoPartners() {
    const dict = getDictionary(useLocale() as Locale);
    const sliderRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!sliderRef.current) return;

        const wrapper = sliderRef.current.querySelector(".slider-track") as HTMLDivElement;
        if (!wrapper) return;

        const totalWidth = wrapper.scrollWidth / 2;
        gsap.to(wrapper, {
            x: `-=${totalWidth}`,
            duration: 24,
            ease: "linear",
            repeat: -1,
            modifiers: {
                x: (x) => {
                    const current = parseFloat(x);
                    return (current % totalWidth) + "px";
                },
            },
        });
    }, [dict]);

    const track = [...dict.logoPartners.items, ...dict.logoPartners.items, ...dict.logoPartners.items];

    return (
        <div className="bg-white dark:bg-[#070707] py-[48px] md:py-[60px] flex flex-col items-center gap-[32px]">
            <Typography as="div" size={16} weight={500} className="text-center px-[40px]">
                {dict.logoPartners.label}
            </Typography>
            <div className="overflow-hidden w-full" ref={sliderRef}>
                <div className="flex items-center gap-16 slider-track whitespace-nowrap">
                    {track.map((label, index) => (
                        <Typography
                            key={index}
                            as="span"
                            size={28}
                            weight={600}
                            className="opacity-30 flex-shrink-0"
                        >
                            {label}
                        </Typography>
                    ))}
                </div>
            </div>
        </div>
    )
}
