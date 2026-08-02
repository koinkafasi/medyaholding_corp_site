"use client"

import { useRef, useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocale } from "next-intl";
import { useTheme } from "@/src/context/ThemeProvider";

import Image from "next/image";
import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

import Group from '@/src/assets/images/group.png';
import Cash from '@/src/assets/images/cash.png';
import Target from '@/src/assets/images/target.png';

const icons = [Group, Cash, Target];

export default function AboutUs() {
    const { theme } = useTheme();
    const dict = getDictionary(useLocale() as Locale);
    const descAboutUs = dict.aboutUs.description;

    const descAboutUsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!descAboutUsRef.current) return

        const chars = descAboutUsRef.current.querySelectorAll("span")

        ScrollTrigger.getAll().forEach(t => t.kill())

        gsap.set(chars, { opacity: 1, color: "#8D8D8D" })

        gsap.to(chars, {
            opacity: 1,
            color: theme === "light" ? "#070707" : "#fff",
            stagger: 0.05,
            scrollTrigger: {
                trigger: descAboutUsRef.current,
                start: "top 70%",
                end: "bottom 30%",
                scrub: 1,
            },
        })

        ScrollTrigger.refresh()

    }, [theme, descAboutUs])



    return (
        <div className="bg-white dark:bg-[#070707] w-full px-[20px] md:px-[72px] py-[48px] md:py-[80px] flex flex-col md:flex-row justify-between items-start gap-[24px]">
            <Tag>
                <Typography size={14} sizeMobile={12} weight={500}>About Us</Typography>
            </Tag>
            <div className="w-full md:w-[65%] flex flex-col gap-[48px] md:gap-[80px]">
                <div key={descAboutUs} ref={descAboutUsRef} className="text-[28px] md:text-[40px] font-semibold leading-[36.8px] md:leading-[48px]" style={{ whiteSpace: "pre-wrap" }}>
                    {descAboutUs.split("").map((char, index) => (
                        <span key={index} className="inline-block">
                            {char}
                        </span>
                    ))}
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-[32px]">
                    {dict.aboutUs.items.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-start gap-[24px] md:gap-[32px]">
                            <Image src={icons[idx]} alt="" className="w-12" />
                            <div>
                                <Typography size={20} weight={700} lineHeight={32}>
                                    {item.title}
                                </Typography>
                                <Typography sizeMobile={14} className="mt-[4px]">
                                    {item.desc}
                                </Typography>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
