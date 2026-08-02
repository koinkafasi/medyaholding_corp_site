"use client";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";
import Button from "@/src/component/Button";
import Icons from "@/src/component/Icons";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

export default function CtaGrid() {
    const dict = getDictionary(useLocale() as Locale);

    return (
        <div className="bg-white dark:bg-[#070707] w-full px-[16px] md:px-[72px] pb-[48px] md:pb-[80px]">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-[24px] mb-[48px] md:mb-[64px]">
                <div>
                    <Tag>
                        <Typography size={14} sizeMobile={12} weight={500}>{dict.ctaGrid.label}</Typography>
                    </Tag>
                    <div className="font-display text-[32px] md:text-[48px] font-semibold leading-[41.6px] md:leading-[56px] text-[#070707] dark:text-[#fff] mt-[24px] max-w-[560px]">
                        {dict.ctaGrid.title}
                    </div>
                </div>
                <div className="flex flex-col items-start gap-[24px] w-full lg:w-[35%]">
                    <Typography size={16} className="opacity-70">
                        {dict.ctaGrid.subtitle}
                    </Typography>
                    <Link href="/contact">
                        <Button variant="primary">
                            {dict.ctaGrid.items[0].ctaLabel}
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#EEE] dark:border-[#1D1D1D] rounded-[12px] overflow-hidden">
                {dict.ctaGrid.items.map((item, idx) => (
                    <Link
                        key={item.title}
                        href={item.href}
                        className={`group flex flex-col justify-between gap-[24px] p-[24px] min-h-[200px] hover:bg-[#EEE] dark:hover:bg-[#1D1D1D] transition-colors duration-300 cursor-pointer ${idx !== 0 ? "border-t sm:border-t-0 sm:border-l border-[#EEE] dark:border-[#1D1D1D]" : ""
                            }`}
                    >
                        <div>
                            <Typography as="div" size={20} weight={700} className="mb-[8px]">
                                {item.title}
                            </Typography>
                            <Typography size={14} className="opacity-70">
                                {item.desc}
                            </Typography>
                        </div>
                        <div className="flex items-center gap-[8px]">
                            <Typography size={14} weight={600} className="text-[#1146F2]">{item.ctaLabel}</Typography>
                            <Icons name="arrowUpRight" className="w-4 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform duration-300" color="#1146F2" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
