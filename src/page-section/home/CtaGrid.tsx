"use client";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import Typography from "@/src/component/Typography";
import Icons from "@/src/component/Icons";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

export default function CtaGrid() {
    const dict = getDictionary(useLocale() as Locale);

    return (
        <div className="bg-white dark:bg-[#070707] w-full px-[16px] md:px-[72px] pb-[48px] md:pb-[80px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#EEE] dark:border-[#1D1D1D] rounded-[12px] overflow-hidden">
                {dict.ctaGrid.items.map((item, idx) => (
                    <Link
                        key={item.title}
                        href={item.href}
                        className={`group flex flex-col justify-between gap-[24px] p-[24px] min-h-[180px] hover:bg-[#EEE] dark:hover:bg-[#1D1D1D] transition-colors duration-300 cursor-pointer ${idx !== 0 ? "border-t sm:border-t-0 sm:border-l border-[#EEE] dark:border-[#1D1D1D]" : ""
                            }`}
                    >
                        <div>
                            <Typography as="div" size={18} weight={700} className="mb-[8px]">
                                {item.title}
                            </Typography>
                            <Typography size={14} className="opacity-70">
                                {item.desc}
                            </Typography>
                        </div>
                        <div className="flex items-center gap-[8px]">
                            <Typography size={14} weight={600}>{item.ctaLabel}</Typography>
                            <Icons name="arrowUpRight" className="w-4 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform duration-300" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
