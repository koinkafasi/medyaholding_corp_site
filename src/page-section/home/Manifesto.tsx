"use client"

import { useRef, useEffect } from "react";
import gsap from 'gsap';
import { useLocale } from "next-intl";
import { useTheme } from "@/src/context/ThemeProvider";

import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

export default function Manifesto() {
    const { theme } = useTheme();
    const dict = getDictionary(useLocale() as Locale);
    const statement = dict.homeManifesto.statement;

    const statementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!statementRef.current) return

        const chars = statementRef.current.querySelectorAll("span")

        gsap.set(chars, { opacity: 1, color: "#8D8D8D" })

        const tween = gsap.to(chars, {
            opacity: 1,
            color: theme === "light" ? "#070707" : "#fff",
            stagger: 0.03,
            scrollTrigger: {
                trigger: statementRef.current,
                start: "top 75%",
                end: "bottom 40%",
                scrub: 1,
            },
        })

        return () => {
            tween.scrollTrigger?.kill()
            tween.kill()
        }
    }, [theme, statement])

    return (
        <div className="min-h-screen flex flex-col items-start justify-center bg-white dark:bg-[#070707] w-full px-[20px] md:px-[72px] py-[64px]">
            <Tag>
                <Typography size={14} sizeMobile={12} weight={500}>{dict.homeManifesto.label}</Typography>
            </Tag>
            <div
                key={statement}
                ref={statementRef}
                className="mt-[32px] md:mt-[40px] text-[32px] md:text-[56px] lg:text-[64px] font-semibold leading-[40px] md:leading-[68px] lg:leading-[76px] max-w-[900px]"
                style={{ whiteSpace: "pre-wrap" }}
            >
                {statement.split("").map((char, index) => (
                    <span key={index} className="inline-block">
                        {char}
                    </span>
                ))}
            </div>
            <Typography size={18} className="mt-[32px] max-w-[560px]">
                {dict.homeManifesto.subtitle}
            </Typography>
        </div>
    )
}
