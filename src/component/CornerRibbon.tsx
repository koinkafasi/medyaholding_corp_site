"use client";
import { useRef } from "react";
import { useLocale } from "next-intl";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Typography from "@/src/component/Typography";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

/**
 * Diagonal corner ribbon with an infinitely scrolling marquee track.
 * Meant to sit inside a `relative overflow-hidden` ancestor (HeroBackground)
 * so the rotated ends clip cleanly at the container edges.
 */
export default function CornerRibbon() {
    const dict = getDictionary(useLocale() as Locale);
    const trackRef = useRef<HTMLDivElement>(null);

    const words = [dict.site.title, ...dict.logoPartners.items];
    const loop = [...words, ...words, ...words];

    useGSAP(() => {
        if (!trackRef.current) return;
        const totalWidth = trackRef.current.scrollWidth / 3;
        gsap.to(trackRef.current, {
            x: `-=${totalWidth}`,
            duration: 14,
            ease: "linear",
            repeat: -1,
            modifiers: {
                x: (x) => {
                    const current = parseFloat(x);
                    return (current % totalWidth) + "px";
                },
            },
        });
    }, [dict]);

    return (
        <div
            className="absolute top-[128px] md:top-[148px] right-[-96px] w-[340px] rotate-45 bg-gradient-to-r from-[#873AE3] to-[#1146F2] py-[8px] shadow-[0_4px_16px_rgba(0,0,0,0.35)] overflow-hidden"
            aria-hidden="true"
        >
            <div ref={trackRef} className="flex items-center gap-[10px] whitespace-nowrap w-max">
                {loop.map((word, i) => (
                    <span key={i} className="flex items-center gap-[10px] flex-shrink-0">
                        <Typography as="span" size={12} weight={700} noDarkMode color="#fff" className="uppercase tracking-[0.15em]">
                            {word}
                        </Typography>
                        <span className="w-[4px] h-[4px] rounded-full bg-white/50" />
                    </span>
                ))}
            </div>
        </div>
    )
}
