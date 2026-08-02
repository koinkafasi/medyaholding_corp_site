"use client";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

import Icons from "@/src/component/Icons";
import Tag from "@/src/component/Tag"
import Typography from "@/src/component/Typography"
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

export default function PricingSection() {
    const dict = getDictionary(useLocale() as Locale);
    return (
        <div className="bg-white dark:bg-[#070707] w-full px-[16px] md:px-[72px] py-[80px] flex flex-col items-center gap-[24px]">
            <Tag>
                <Typography size={14} sizeMobile={12} weight={500}>{dict.pricingSection.label}</Typography>
            </Tag>
            <div className="flex flex-col items-center gap-[40px]">
                <div className="flex flex-col items-center gap-[24px]">
                    <Typography as="div" size={48} sizeMobile={32} weight={700} lineHeight={56} lineHeightMobile={41.6} className="w-full lg:w-[65%] text-center">
                        {dict.pricingSection.title}
                    </Typography>
                    <Typography as="div" size={14} lineHeight={24} className="text-center w-full md:w-[80%] lg:w-[40%]">
                        {dict.pricingSection.subtitle}
                    </Typography>
                </div>
            </div>
            <div className="bg-[#EEE] dark:bg-[#1D1D1D] flex flex-col lg:flex-row items-start gap-[24px] p-[24px] rounded-[20px] w-full md:w-[75%]">
                <div className="w-full lg:w-[50%] rounded-[12px] p-[24px] cursor-pointer hover:bg-white group hover:dark:bg-[#393939] transition-all duration-300">
                    <Typography size={32} weight={600} lineHeight={40}>
                        {dict.pricingSection.standardPlan}
                    </Typography>
                    <Typography as="div" size={14} lineHeight={24} className="mt-[12px]">
                        {dict.pricingSection.standardDesc}
                    </Typography>
                    <Link href="/contact">
                        <div className="my-[32px] rounded-full border  border-[#1D1D1D] dark:border-[#fff] dark:text-[#fff] py-[18px] flex items-center justify-center group-hover:bg-[#1146F2] group-hover:border-[#1146F2] group-hover:text-white group-hover:dark:text-[#070707]">
                            <div>{dict.pricingSection.getStarted}</div>
                        </div>
                    </Link>
                    <div className="flex flex-col items-start gap-[12px] dark:text-[#fff]">
                        {dict.pricingSection.standardFeatures.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-[16px]">
                                <Icons name="arrowUpRight" className="w-5" />
                                {feature}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full lg:w-[50%] rounded-[12px] p-[24px] relative cursor-pointer hover:bg-white hover:dark:bg-[#393939] group transition-all duration-300">
                    <div className="absolute top-0 right-2 lg:right-10 p-[8px] text-[14px] text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-[8px]">
                        {dict.pricingSection.bestValue}
                    </div>
                    <Typography size={32} weight={600} lineHeight={40}>
                        {dict.pricingSection.premiumPlan}
                    </Typography>
                    <Typography as="div" size={14} lineHeight={24} className="mt-[12px]">
                        {dict.pricingSection.premiumDesc}
                    </Typography>
                    <Link href="/contact">
                        <div className="my-[32px] rounded-full border border-[#1D1D1D] dark:border-[#fff] dark:text-[#fff] py-[18px] flex items-center justify-center group-hover:bg-[#1146F2] group-hover:border-[#1146F2] group-hover:text-white group-hover:dark:text-[#070707]">
                            <div>{dict.pricingSection.getStarted}</div>
                        </div>
                    </Link>
                    <div className="flex flex-col items-start gap-[12px] dark:text-[#fff]">
                        {dict.pricingSection.premiumFeatures.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-[16px]">
                                <Icons name="arrowUpRight" className="w-5" />
                                {feature}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
