'use client';
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useTheme } from "@/src/context/ThemeProvider";
import { useLocale } from "next-intl";

import Image from "next/image";
import Icons from "@/src/component/Icons";
import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

import Services1 from '@/src/assets/images/service-1.png';
import Services2 from '@/src/assets/images/service-2.png';
import Services3 from '@/src/assets/images/service-3.png';
import Services4 from '@/src/assets/images/service-4.png';
import Services5 from '@/src/assets/images/service-5.png';

const IMAGES = [Services1, Services2, Services3, Services4, Services5];

export default function OurServices() {
    const { theme } = useTheme();
    const dict = getDictionary(useLocale() as Locale);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    const services = dict.ourServices.items.map((item, idx) => ({
        title: item.title,
        image: IMAGES[idx],
        desc: item.desc,
    }));

    useEffect(() => {
        cardsRef.current.forEach((card) => {
            if (!card) return;

            card.addEventListener("mouseenter", () => {
                gsap.to(card, {
                    backgroundColor: theme === "light" ? "rgba(17,70,242,0.06)" : "rgba(17,70,242,0.1)",
                    padding: "24px 32px",
                    borderRadius: "12px",
                    duration: 0.5,
                    ease: "power2.out",
                });
            });

            card.addEventListener("mouseleave", () => {
                gsap.to(card, {
                    backgroundColor: "transparent",
                    padding: "0px",
                    borderRadius: "12px",
                    duration: 0.5,
                    ease: "power2.out",
                });
            });
        });
    }, [theme]);

    return (
        <div className="bg-white dark:bg-[#070707] py-[48px] md:py-[80px] px-[8px] md:px-[12px] w-full">
            <div className="bg-[#EEE] dark:bg-[#1D1D1D] rounded-[20px] py-[64px] px-[16px] md:p-[60px]">
                <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end self-stretch gap-[16px]">
                    <div className="flex flex-col items-start gap-[24px]">
                        <Tag>{dict.ourServices.label}</Tag>
                        <Typography as="div" size={48} sizeMobile={32} weight={700} lineHeight={56} lineHeightMobile={41.6}>
                            {dict.ourServices.title[0]} <br />
                            {dict.ourServices.title[1]}
                        </Typography>
                    </div>
                    <div className="flex flex-col items-start gap-[48px] lg:gap-[14px] w-full lg:w-[35%]">
                        <Typography size={14}>
                            {dict.ourServices.subtitle}
                        </Typography>
                        <div className="flex gap-[8px] cursor-pointer">
                            <Typography size={16} weight={500} className="text-[#1146F2]">{dict.ourServices.cta}</Typography>
                            <Icons name="arrowRight" className="w-5" color="#1146F2" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-[51px] mt-[48px] md:mt-[64px]">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            ref={(el) => {
                                if (el) cardsRef.current[idx] = el;
                            }}
                            className="flex flex-col lg:flex-row items-center justify-between w-full gap-[24px]"
                            style={{ padding: 0, backgroundColor: "transparent", borderRadius: "12px" }}
                        >
                            <Typography
                                as="div"
                                size={32}
                                sizeMobile={28}
                                weight={600}
                                lineHeight={40}
                                className="w-full lg:w-[25%]"
                            >
                                {service.title}
                            </Typography>
                            <Image src={service.image} alt={service.title} className="w-full lg:w-[20rem] rounded-[20px] order-3 lg:order-2" />
                            <Typography
                                as="div"
                                size={14}
                                lineHeight={20}
                                className="w-full order-2 lg:w-[30%] lg:order-3 opacity-70"
                            >
                                {service.desc}
                            </Typography>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
