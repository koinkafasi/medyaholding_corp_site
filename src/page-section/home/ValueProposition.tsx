"use client";
import { useState } from "react";
import { useLocale } from "next-intl";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

export default function ValueProposition() {
    const dict = getDictionary(useLocale() as Locale);
    const [active, setActive] = useState(0);

    useGSAP(() => {
        gsap.fromTo(
            `.value-panel-${active}`,
            { autoAlpha: 0, y: 12 },
            { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );
    }, [active]);

    return (
        <div className="bg-white dark:bg-[#070707] w-full px-[16px] md:px-[72px] py-[48px] md:py-[80px]">
            <Tag>
                <Typography size={14} sizeMobile={12} weight={500}>{dict.valueProp.eyebrow}</Typography>
            </Tag>
            <div className="font-display text-[32px] md:text-[48px] font-semibold leading-[41.6px] md:leading-[56px] text-[#070707] dark:text-[#fff] mt-[24px] max-w-[720px]">
                {dict.valueProp.title}
            </div>

            <div className="mt-[48px] md:mt-[64px] flex flex-col lg:flex-row gap-[24px] lg:gap-[64px]">
                <div className="flex lg:flex-col gap-[8px] lg:w-[35%] overflow-x-auto lg:overflow-visible">
                    {dict.valueProp.items.map((item, idx) => (
                        <button
                            key={item.title}
                            onClick={() => setActive(idx)}
                            className={`text-left flex-shrink-0 px-[20px] py-[16px] rounded-[12px] border transition-colors duration-300 cursor-pointer ${idx === active
                                    ? "border-[#1146F2] bg-[#1146F2]/5"
                                    : "border-[#EEE] dark:border-[#1D1D1D]"
                                }`}
                        >
                            <Typography size={16} weight={600} className="whitespace-nowrap lg:whitespace-normal">
                                {item.title}
                            </Typography>
                        </button>
                    ))}
                </div>

                <div className="lg:w-[65%] flex items-center">
                    <div key={active} className={`value-panel-${active}`}>
                        <Typography as="div" size={24} sizeMobile={20} weight={500} lineHeight={36}>
                            {dict.valueProp.items[active].desc}
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}
