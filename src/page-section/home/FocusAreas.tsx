"use client";
import { useRef } from "react";
import { useLocale } from "next-intl";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "@/i18n/navigation";
import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";
import Icons from "@/src/component/Icons";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

export default function FocusAreas() {
    const dict = getDictionary(useLocale() as Locale);
    const gridRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!gridRef.current) return;
        gsap.fromTo(
            gridRef.current.querySelectorAll(".focus-card"),
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
                <Typography size={14} sizeMobile={12} weight={500}>{dict.focusAreas.eyebrow}</Typography>
            </Tag>
            <div className="text-[32px] md:text-[48px] font-bold leading-[41.6px] md:leading-[56px] text-[#070707] dark:text-[#fff] mt-[24px] max-w-[640px]">
                {dict.focusAreas.title[0]} <br />
                {dict.focusAreas.title[1]}
            </div>

            <div ref={gridRef} className="mt-[48px] md:mt-[64px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
                {dict.focusAreas.cards.map((card) => (
                    <div key={card.title} className="focus-card flex flex-col justify-between gap-[32px] bg-[#EEE] dark:bg-[#1D1D1D] rounded-[12px] p-[24px] min-h-[280px]">
                        <div>
                            <Typography as="div" size={20} weight={700} className="mb-[16px]">
                                {card.title}
                            </Typography>
                            <ul className="flex flex-col gap-[8px]">
                                {card.bullets.map((bullet) => (
                                    <li key={bullet}>
                                        <Typography size={14} className="opacity-70">{bullet}</Typography>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Link href={card.href} className="group/link flex items-center gap-[8px] cursor-pointer">
                            <Typography size={14} weight={600} className="text-[#1146F2]">{card.ctaLabel}</Typography>
                            <Icons name="arrowUpRight" className="w-4 group-hover/link:translate-x-[2px] group-hover/link:-translate-y-[2px] transition-transform duration-300" color="#1146F2" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
