"use client";
import { useRef } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

import SectorMedia from "@/src/assets/images/generated/sector-media.png";
import SectorTechnology from "@/src/assets/images/generated/sector-technology.png";
import SectorProduct from "@/src/assets/images/generated/sector-product.png";
import SectorBrand from "@/src/assets/images/generated/sector-brand.png";
import SectorVenture from "@/src/assets/images/generated/sector-venture.png";

const IMAGES = [SectorMedia, SectorTechnology, SectorProduct, SectorBrand, SectorVenture];

export default function SectorsList() {
    const dict = getDictionary(useLocale() as Locale);
    const listRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!listRef.current) return;
        gsap.fromTo(
            listRef.current.querySelectorAll(".sector-row"),
            { autoAlpha: 0, y: 40 },
            {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.15,
                scrollTrigger: { trigger: listRef.current, start: "top 75%" },
            }
        );
    }, []);

    return (
        <div className="bg-white dark:bg-[#070707] w-full px-[16px] md:px-[72px] py-[48px] md:py-[80px]">
            <Tag>
                <Typography size={14} sizeMobile={12} weight={500}>{dict.sectors.eyebrow}</Typography>
            </Tag>
            <div className="text-[32px] md:text-[48px] font-bold leading-[41.6px] md:leading-[56px] text-[#070707] dark:text-[#fff] mt-[24px] max-w-[640px]">
                {dict.sectors.title[0]} <br />
                {dict.sectors.title[1]}
            </div>

            <div ref={listRef} className="mt-[64px] flex flex-col gap-[80px] md:gap-[120px]">
                {dict.sectors.items.map((item, idx) => (
                    <div
                        key={item.title}
                        className={`sector-row flex flex-col lg:flex-row items-center gap-[32px] lg:gap-[64px] ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                    >
                        <div className="w-full lg:w-1/2 aspect-[16/9] rounded-[20px] overflow-hidden relative">
                            <Image src={IMAGES[idx]} alt={item.title} fill className="object-cover" />
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col gap-[16px]">
                            <Typography as="span" size={14} weight={700} className="text-[#1146F2]">
                                {String(idx + 1).padStart(2, "0")}
                            </Typography>
                            <Typography as="div" size={32} weight={700} lineHeight={40}>
                                {item.title}
                            </Typography>
                            <Typography size={16} lineHeight={26} className="opacity-70 max-w-[480px]">
                                {item.detail}
                            </Typography>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
