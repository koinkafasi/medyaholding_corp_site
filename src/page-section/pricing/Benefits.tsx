"use client";
import Image from "next/image";
import { useLocale } from "next-intl";
import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

import Eclipse from '@/src/assets/images/lates-project-eclipse.png';
import Trends from '@/src/assets/images/trends.png';
import Rocket from '@/src/assets/images/rocket.png';
import TargetBlue from '@/src/assets/images/targetBlue.png';

const ICONS = [Trends, Rocket, TargetBlue, Trends, Rocket, TargetBlue];

export default function Benefits() {
    const dict = getDictionary(useLocale() as Locale);
    const rowOne = dict.benefits.items.slice(0, 3);
    const rowTwo = dict.benefits.items.slice(3, 6);
    return (
        <div className="bg-white dark:bg-[#070707] w-full px-[16px] md:px-[72px] py-[60px] md:py-[80px]">
            <Tag>
                <Typography size={14} sizeMobile={12} weight={500}>{dict.benefits.label}</Typography>
            </Tag>
            <div className="flex flex-col lg:flex-row justify-between items-start w-full mt-[24px] gap-[16px]">
                <div className="text-[32px] md:text-[48px] font-bold leading-[41.6px] md:leading-[56px] text-[#070707] dark:text-[#fff] w-full lg:w-[50%]">
                    {dict.benefits.title[0]} <br />
                    {dict.benefits.title[1]} <Image src={Eclipse} alt="Eclipse" className="inline w-12 md:w-20" />
                </div>
                <div className="flex gap-[10px] w-full lg:w-[30%]">
                    <Typography size={16} weight={500}>
                        {dict.benefits.subtitle}
                    </Typography>
                </div>
            </div>
            <div className="mt-[64px] flex flex-col lg:flex-row items-center gap-[24px]">
                {rowOne.map((item, idx) => (
                    <div key={idx} className="flex flex-1 shrink-0 basis-0 flex-col items-start gap-[32px] bg-[#EEE] dark:bg-[#1D1D1D] border border-[#EEE] rounded-[12px] p-[24px]">
                        <Image src={ICONS[idx]} alt="" className="w-15" />
                        <div>
                            <Typography size={20} weight={700} lineHeight={32}>
                                {item.title}
                            </Typography>
                            <Typography className="mt-[8px]">
                                {item.desc}
                            </Typography>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-[24px] flex flex-col lg:flex-row items-center gap-[24px]">
                {rowTwo.map((item, idx) => (
                    <div key={idx} className="flex flex-1 shrink-0 basis-0 flex-col items-start gap-[32px] bg-[#EEE] dark:bg-[#1D1D1D] border border-[#EEE] rounded-[12px] p-[24px]">
                        <Image src={ICONS[idx + 3]} alt="" className="w-15" />
                        <div>
                            <Typography size={20} weight={700} lineHeight={32}>
                                {item.title}
                            </Typography>
                            <Typography className="mt-[8px]">
                                {item.desc}
                            </Typography>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
