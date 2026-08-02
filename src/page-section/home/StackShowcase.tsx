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
        <div className="bg-[#070707] dark:bg-[#1D1D1D] w-full px-[16px] md:px-[72px] py-[48px] md:py-[80px]">
            <Tag color="#fff" noDarkMode>
                <Typography size={14} sizeMobile={12} weight={500} color="#fff" noDarkMode>{dict.stackShowcase.eyebrow}</Typography>
            </Tag>
            <div className="text-[32px] md:text-[48px] font-bold leading-[41.6px] md:leading-[56px] text-white mt-[24px] max-w-[640px]">
                {dict.stackShowcase.title[0]} <br />
                {dict.stackShowcase.title[1]}
            </div>

            <div ref={gridRef} className="mt-[48px] md:mt-[64px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10 rounded-[12px] overflow-hidden">
                {dict.stackShowcase.items.map((item, idx) => (
                    <div key={item.title} className="stack-card bg-[#070707] dark:bg-[#1D1D1D] p-[32px] flex flex-col gap-[24px] min-h-[220px]">
                        <Typography as="span" size={14} weight={600} color="#fff" noDarkMode className="opacity-40">
                            {String(idx + 1).padStart(2, "0")}
                        </Typography>
                        <div>
                            <Typography as="div" size={22} weight={700} color="#fff" noDarkMode className="mb-[8px]">
                                {item.title}
                            </Typography>
                            <Typography as="div" size={14} lineHeight={22} color="#fff" noDarkMode className="opacity-60">
                                {item.desc}
                            </Typography>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
