"use client";
import Image from "next/image";
import { useLocale } from "next-intl";
import Accordion, { AccordionData } from "@/src/component/Accordion";
import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

import CaseStudyImg from '@/src/assets/images/generated/sector-venture.png'

export default function CaseStudy() {
    const dict = getDictionary(useLocale() as Locale);
    const accordionData: AccordionData[] = dict.caseStudy.items;
    return (
        <div className="bg-white dark:bg-[#070707] py-[60px] md:py-[80px] px-[8px] md:px-[12px] w-full">
            <div className="bg-[#EEE] dark:bg-[#1D1D1D] rounded-[20px] py-[64px] md:py-[80px] px-[16px] md:px-[60px]">
                <Tag>{dict.caseStudy.label}</Tag>
                <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end self-stretch gap-[16px] mt-[24px]">
                    <div className="flex flex-col items-start gap-[24px] w-full lg:w-[50%]">
                        <Typography as="div" size={48} sizeMobile={32} weight={700} lineHeightMobile={41.6} lineHeight={56}>
                            {dict.caseStudy.title}
                        </Typography>
                    </div>
                    <div className="flex flex-col items-start gap-[14px] w-full lg:w-[40%]">
                        <Typography size={14} className="opacity-70">
                            {dict.caseStudy.subtitle}
                        </Typography>
                    </div>
                </div>
                <div className="mt-[64px] flex flex-col md:flex-row items-start justify-between gap-[48px] md:gap-[10%]">
                    <Accordion items={accordionData} variant="primary" className="order-2 md:order-1" />
                    <Image src={CaseStudyImg} alt="How we build" className="w-full order-1 md:order-2 md:w-[45%]" />
                </div>
            </div>
        </div>
    )
}
