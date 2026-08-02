"use client"

import { useRef, useEffect } from "react";
import gsap from 'gsap';
import { useLocale } from "next-intl";
import { useTheme } from "@/src/context/ThemeProvider";

import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";
import SectionBackdrop from "@/src/component/SectionBackdrop";
import SectionFooterBar from "@/src/component/SectionFooterBar";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

export default function Manifesto() {
    const { theme } = useTheme();
    const dict = getDictionary(useLocale() as Locale);
    const statement = dict.homeManifesto.statement;

    const statementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!statementRef.current) return

        const chars = statementRef.current.querySelectorAll(".char")

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
        <div className="relative z-0 min-h-screen flex flex-col items-start justify-center bg-white dark:bg-[#070707] w-full px-[20px] md:px-[72px] py-[64px]">
            <SectionBackdrop index={1} />
            <Tag>
                <Typography size={14} sizeMobile={12} weight={500}>{dict.homeManifesto.label}</Typography>
            </Tag>
            <div
                key={statement}
                ref={statementRef}
                className="font-display mt-[32px] md:mt-[40px] text-[36px] md:text-[64px] lg:text-[76px] font-semibold leading-[44px] md:leading-[76px] lg:leading-[88px] max-w-[960px]"
                style={{ whiteSpace: "pre-wrap" }}
            >
                {statement.split(" ").flatMap((word, wi, arr) => {
                    const wordEl = (
                        <span key={`w-${wi}`} className="inline-block whitespace-nowrap">
                            {word.split("").map((char, ci) => (
                                <span key={ci} className="inline-block char">
                                    {char}
                                </span>
                            ))}
                        </span>
                    );
                    return wi < arr.length - 1 ? [wordEl, " "] : [wordEl];
                })}
            </div>
            <Typography size={18} className="mt-[32px] max-w-[560px]">
                {dict.homeManifesto.subtitle}
            </Typography>
            <SectionFooterBar index={1} total={8} label={dict.sectionNav.philosophy} />
        </div>
    )
}
