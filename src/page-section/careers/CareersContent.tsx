"use client";
import { useRef } from "react";
import { useLocale } from "next-intl";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "@/i18n/navigation";
import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";
import Button from "@/src/component/Button";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

export default function CareersContent() {
    const dict = getDictionary(useLocale() as Locale);
    const gridRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!gridRef.current) return;
        gsap.fromTo(
            gridRef.current.querySelectorAll(".value-card"),
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
        <>
            <div className="bg-white dark:bg-[#070707] w-full px-[16px] md:px-[72px] py-[48px] md:py-[80px]">
                <Tag>
                    <Typography size={14} sizeMobile={12} weight={500}>{dict.careers.eyebrow}</Typography>
                </Tag>
                <div className="flex flex-col lg:flex-row justify-between items-start w-full mt-[24px] gap-[16px]">
                    <div className="text-[32px] md:text-[48px] font-bold leading-[41.6px] md:leading-[56px] text-[#070707] dark:text-[#fff] w-full lg:w-[50%]">
                        {dict.careers.title}
                    </div>
                    <Typography size={16} weight={500} lineHeight={24} className="w-full lg:w-[40%]">
                        {dict.careers.subtitle}
                    </Typography>
                </div>

                <div ref={gridRef} className="mt-[64px] grid grid-cols-1 md:grid-cols-3 gap-[24px]">
                    {dict.careers.values.map((item) => (
                        <div key={item.title} className="value-card flex flex-col items-start gap-[16px] bg-[#EEE] dark:bg-[#1D1D1D] rounded-[12px] p-[24px]">
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

            <div className="bg-white dark:bg-[#070707] w-full px-[16px] md:px-[72px] pb-[48px] md:pb-[80px]">
                <div className="bg-[#EEE] dark:bg-[#1D1D1D] rounded-[20px] p-[32px] md:p-[60px] flex flex-col md:flex-row items-start md:items-end justify-between gap-[24px]">
                    <div className="flex flex-col gap-[8px] max-w-[520px]">
                        <Typography as="div" size={28} weight={700}>
                            {dict.careers.ctaTitle}
                        </Typography>
                        <Typography size={14} className="opacity-70">
                            {dict.careers.ctaSubtitle}
                        </Typography>
                    </div>
                    <Link href="/contact">
                        <Button variant="secondary">{dict.careers.ctaLabel}</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}
