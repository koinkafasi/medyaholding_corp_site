"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import Icons from "@/src/component/Icons";
import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

import Eclipse from '@/src/assets/images/lates-project-eclipse.png';
import SectorMedia from '@/src/assets/images/generated/sector-media.png';
import SectorTechnology from '@/src/assets/images/generated/sector-technology.png';
import SectorProduct from '@/src/assets/images/generated/sector-product.png';

const IMAGES = [SectorMedia, SectorTechnology, SectorProduct];

export default function LatestProject() {
    const dict = getDictionary(useLocale() as Locale);
    const gridRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!gridRef.current) return;
        const cards = gridRef.current.querySelectorAll(".project-card");

        gsap.fromTo(
            cards,
            { autoAlpha: 0, y: 48 },
            {
                autoAlpha: 1,
                y: 0,
                duration: 0.9,
                ease: "power3.out",
                stagger: 0.12,
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 80%",
                },
            }
        );
    }, []);

    return (
        <div className="bg-white dark:bg-[#070707] w-full px-[20px] md:px-[72px] py-[48px] md:py-[80px]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-[24px]">
                <div className="flex flex-col items-start gap-[24px]">
                    <Tag>
                        <Typography size={14} sizeMobile={12} weight={500}>{dict.latestProject.label}</Typography>
                    </Tag>
                    <div className="text-[32px] md:text-[48px] font-bold leading-[41.6px] md:leading-[56px] text-[#070707] dark:text-[#fff]">
                        {dict.latestProject.title[0]} <br />
                        {dict.latestProject.title[1]} <Image src={Eclipse} alt="Eclipse" className="inline w-10 md:w-20" />
                    </div>
                </div>
                <Link href="/sectors">
                    <div className="flex gap-[10px] border-b border-[#070707] dark:border-[#fff] cursor-pointer">
                        <Typography size={16} weight={500}>{dict.latestProject.cta}</Typography>
                        <Icons name="arrowRight" className="w-5" />
                    </div>
                </Link>
            </div>
            <div ref={gridRef} className="mt-[64px] grid grid-cols-1 md:grid-cols-3 gap-3">
                {IMAGES.map((img, idx) => (
                    <div key={idx} className="project-card aspect-[4/5] w-full overflow-hidden rounded-[12px]">
                        <Image src={img} alt="" className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    )
}
