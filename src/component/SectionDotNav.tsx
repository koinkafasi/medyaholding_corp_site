"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import clsx from "clsx";

gsap.registerPlugin(ScrollToPlugin);

export interface DotNavSection {
    id: string;
    label: string;
    ref: RefObject<HTMLElement | null>;
}

export default function SectionDotNav({ sections }: { sections: DotNavSection[] }) {
    const [active, setActive] = useState(0);
    const clickLockRef = useRef(false);

    useEffect(() => {
        const targets = sections
            .map((s) => s.ref.current)
            .filter((el): el is HTMLElement => !!el);

        if (targets.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (clickLockRef.current) return;
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    const idx = sections.findIndex((s) => s.ref.current === entry.target);
                    if (idx !== -1) setActive(idx);
                });
            },
            { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
        );

        targets.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [sections]);

    const scrollToSection = (idx: number) => {
        const el = sections[idx].ref.current;
        if (!el) return;
        clickLockRef.current = true;
        setActive(idx);
        gsap.to(window, {
            duration: 1,
            scrollTo: { y: el, offsetY: 0 },
            ease: "power2.inOut",
            onComplete: () => {
                clickLockRef.current = false;
            },
        });
    };

    return (
        <div className="hidden lg:flex fixed right-[24px] top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-[16px]">
            {sections.map((s, idx) => (
                <button
                    key={s.id}
                    type="button"
                    aria-label={s.label}
                    onClick={() => scrollToSection(idx)}
                    className="group relative flex items-center justify-center w-[18px] h-[18px]"
                >
                    <span
                        className={clsx(
                            "rounded-full border transition-all duration-300",
                            active === idx
                                ? "w-[10px] h-[10px] bg-[#1146F2] border-[#1146F2]"
                                : "w-[6px] h-[6px] bg-transparent border-[#8D8D8D] group-hover:border-[#1146F2] group-hover:scale-125"
                        )}
                    />
                    <span className="pointer-events-none absolute right-full mr-[12px] whitespace-nowrap text-[12px] font-medium text-[#070707] dark:text-white bg-white dark:bg-[#1D1D1D] border border-[#EEE] dark:border-[#2A2A2A] px-[10px] py-[4px] rounded-[6px] shadow-md opacity-0 translate-x-[4px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                        {s.label}
                    </span>
                </button>
            ))}
        </div>
    );
}
