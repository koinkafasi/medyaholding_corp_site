"use client"

import { useRef, useEffect } from "react";
import gsap from 'gsap';
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

        gsap.set(chars, { opacity: 1, color: "#8D8D8D" })

        const tween = gsap.to(chars, {
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

        // Kill only this component's own trigger/tween on cleanup -- never
        // ScrollTrigger.getAll(), which would tear down every other
        // section's scroll-triggered reveal on the page too.
        return () => {
            tween.scrollTrigger?.kill()
            tween.kill()
        }

    }, [theme, descAboutUs])



    return (
        <div className="bg-white dark:bg-[#070707] w-full px-[20px] md:px-[72px] py-[48px] md:py-[80px] flex flex-col md:flex-row justify-between items-stretch gap-[24px]">
            <div className="flex flex-col items-start gap-[24px] w-full md:w-[42%] shrink-0">
                <Tag>
                    <Typography size={14} sizeMobile={12} weight={500}>{dict.nav.about}</Typography>
                </Tag>
                <div className="relative w-full flex-1 min-h-[220px] rounded-[12px] overflow-hidden bg-[#EEE] dark:bg-[#1D1D1D]">
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        src="/videos/corporate.mp4"
                        poster="/videos/corporate-poster.jpg"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                    <span className="absolute inset-0 bg-white/20 pointer-events-none" />
                </div>
            </div>
            <div className="w-full md:flex-1 flex flex-col gap-[48px] md:gap-[80px]">
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
