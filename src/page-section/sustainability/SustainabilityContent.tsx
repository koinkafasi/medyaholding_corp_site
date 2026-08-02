"use client";
import { useRef } from "react";
import { useLocale } from "next-intl";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

export default function SustainabilityContent() {
    const dict = getDictionary(useLocale() as Locale);
    const gridRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!gridRef.current) return;
        gsap.fromTo(
            gridRef.current.querySelectorAll(".pillar-card"),
            { autoAlpha: 0, y: 32 },
            {
                autoAlpha: 1,
                y: 0,
                duration: 0.7,
                ease: "power3.out",
                stagger: 0.1,
                scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
            }
        );
    }, []);

    return (
        <div className="bg-white dark:bg-[#070707] w-full px-[16px] md:px-[72px] py-[48px] md:py-[80px]">
            <Tag>
                <Typography size={14} sizeMobile={12} weight={500}>{dict.sustainability.eyebrow}</Typography>
            </Tag>
            <div className="flex flex-col lg:flex-row justify-between items-start w-full mt-[24px] gap-[16px]">
                <div className="text-[32px] md:text-[48px] font-bold leading-[41.6px] md:leading-[56px] text-[#070707] dark:text-[#fff] w-full lg:w-[50%]">
                    {dict.sustainability.title}
                </div>
                <Typography size={16} weight={500} lineHeight={24} className="w-full lg:w-[40%]">
                    {dict.sustainability.subtitle}
                </Typography>
            </div>

            <div ref={gridRef} className="mt-[64px] flex flex-col lg:flex-row items-stretch gap-[24px]">
                {dict.sustainability.pillars.map((item) => (
                    <div key={item.title} className="pillar-card flex-1 flex flex-col items-start gap-[16px] bg-[#EEE] dark:bg-[#1D1D1D] rounded-[12px] p-[24px]">
                        <Typography as="div" size={20} weight={700}>
                            {item.title}
                        </Typography>
                        <Typography size={14} className="opacity-70">
                            {item.desc}
                        </Typography>
                    </div>
                ))}
            </div>
        </div>
    )
}
