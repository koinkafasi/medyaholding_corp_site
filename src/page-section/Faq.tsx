"use client";
import { useLocale } from "next-intl";
import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";
import Accordion, { AccordionData } from "@/src/component/Accordion";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

export default function Faq() {
    const dict = getDictionary(useLocale() as Locale);
    const accordionData: AccordionData[] = dict.faq.items;
    return (
        <div className="bg-white dark:bg-[#070707] w-full px-[16px] md:px-[72px] py-[48px] md:py-[80px]">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-[16px]">
                <div className="flex flex-col items-start gap-[24px]">
                    <Tag>
                        <Typography size={14} sizeMobile={12} weight={500}>{dict.faq.label}</Typography>
                    </Tag>
                    <div className="text-[32px] md:text-[48px] font-bold leading-[41.6px] md:leading-[56px] text-[#070707] dark:text-[#fff]">
                        {dict.faq.title}
                    </div>
                </div>
                <div className="flex gap-[10px]">
                    <Typography size={16} sizeMobile={14} weight={500} lineHeight={24}>
                        {dict.faq.subtitle}
                    </Typography>
                </div>
            </div>
            <hr className="hidden lg:block border border-[#B2B2B2] w-full my-[64px]" />
            <div className="flex justify-end items-end mt-[48px] lg:mt-0">
                <div className="w-full lg:w-[50%]">
                    <Accordion items={accordionData} />
                </div>
            </div>
        </div>
    )
}
