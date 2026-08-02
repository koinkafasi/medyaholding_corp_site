"use client";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import Typography from "@/src/component/Typography";
import Icons from "@/src/component/Icons";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

export default function PartnerInvite() {
    const dict = getDictionary(useLocale() as Locale);

    return (
        <div className="bg-white dark:bg-[#070707] w-full px-[16px] md:px-[72px] pb-[48px] md:pb-[80px]">
            <Link
                href="/contact"
                className="group flex flex-col md:flex-row items-center justify-between gap-[24px] border border-dashed border-[#B2B2B2] dark:border-[#393939] rounded-[16px] px-[32px] py-[40px] hover:border-[#1146F2] transition-colors duration-300 cursor-pointer"
            >
                <div className="flex items-center gap-[20px]">
                    <div className="flex-shrink-0 w-[56px] h-[56px] rounded-full border border-dashed border-[#B2B2B2] dark:border-[#393939] group-hover:border-[#1146F2] flex items-center justify-center transition-colors duration-300">
                        <span className="text-[24px] font-light opacity-40 group-hover:opacity-100 group-hover:text-[#1146F2] transition-all duration-300">+</span>
                    </div>
                    <div>
                        <Typography as="div" size={20} weight={700}>
                            {dict.partnerInvite.title}
                        </Typography>
                        <Typography size={14} className="opacity-70 mt-[4px]">
                            {dict.partnerInvite.subtitle}
                        </Typography>
                    </div>
                </div>
                <div className="flex items-center gap-[8px] flex-shrink-0 text-[#1146F2]">
                    <Typography size={14} weight={600} className="text-[#1146F2]">
                        {dict.partnerInvite.cta}
                    </Typography>
                    <Icons name="arrowUpRight" className="w-4 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform duration-300" color="#1146F2" />
                </div>
            </Link>
        </div>
    )
}
