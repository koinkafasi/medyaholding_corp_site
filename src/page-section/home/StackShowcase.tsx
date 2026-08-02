"use client";
import { useRef } from "react";
import { useLocale } from "next-intl";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

export default function StackShowcase() {
    const dict = getDictionary(useLocale() as Locale);
    const gridRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!gridRef.current) return;
        gsap.fromTo(
            gridRef.current.querySelectorAll(".stack-card"),
            { autoAlpha: 0, y: 32 },
            {
                autoAlpha: 1,
                y: 0,
                duration: 0.7,
                ease: "power3.out",
                stagger: 0.08,
                scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
            }
        );
    }, []);

    return (
        <div className="bg-white dark:bg-[#070707] w-full px-[16px] md:px-[72px] py-[48px] md:py-[80px]">
            <Tag>
                <Typography size={14} sizeMobile={12} weight={500}>{dict.stackShowcase.eyebrow}</Typography>
            </Tag>
            <div className="font-display text-[32px] md:text-[48px] font-semibold leading-[41.6px] md:leading-[56px] text-[#070707] dark:text-[#fff] mt-[24px] max-w-[640px]">
                {dict.stackShowcase.title[0]} <br />
                {dict.stackShowcase.title[1]}
            </div>

            <div ref={gridRef} className="mt-[48px] md:mt-[64px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#EEE] dark:bg-[#1D1D1D] rounded-[12px] overflow-hidden border border-[#EEE] dark:border-[#1D1D1D]">
                {dict.stackShowcase.items.map((item, idx) => (
                    <div key={item.title} className="stack-card group bg-white dark:bg-[#070707] hover:bg-[#1146F2]/[0.04] transition-colors duration-300 p-[32px] flex flex-col gap-[24px] min-h-[220px]">
                        <Typography as="span" size={14} weight={700} className="text-[#1146F2]">
                            {String(idx + 1).padStart(2, "0")}
                        </Typography>
                        <div>
                            <Typography as="div" size={22} weight={700} className="mb-[8px]">
                                {item.title}
                            </Typography>
                            <Typography as="div" size={14} lineHeight={22} className="opacity-60">
                                {item.desc}
                            </Typography>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
