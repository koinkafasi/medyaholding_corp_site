"use client";

import { useLocale } from "next-intl";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

interface Props {
    index: number;
    total: number;
    label: string;
}

export default function SectionFooterBar({ index, total, label }: Props) {
    const dict = getDictionary(useLocale() as Locale);

    return (
        <div className="absolute bottom-[24px] md:bottom-[40px] left-[20px] right-[20px] md:left-[72px] md:right-[72px] flex items-center justify-between text-[#070707] dark:text-white">
            <div className="flex items-center gap-[10px] opacity-50">
                <span className="text-[12px] font-semibold tracking-[0.08em]">
                    {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
                <span className="w-[24px] h-px bg-current" />
                <span className="text-[12px] font-medium tracking-[0.04em]">{label}</span>
            </div>
            <div className="hidden sm:flex items-center gap-[8px] opacity-50">
                <span className="text-[12px] font-medium tracking-[0.04em]">{dict.homeHero.scrollDown}</span>
                <span className="w-[6px] h-[6px] rounded-full border border-current animate-bounce" />
            </div>
        </div>
    );
}
