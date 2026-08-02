"use client";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";
import Button from "@/src/component/Button";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

export default function InvestorsContent() {
    const dict = getDictionary(useLocale() as Locale);

    return (
        <div className="bg-white dark:bg-[#070707] w-full px-[16px] md:px-[72px] py-[48px] md:py-[80px]">
            <Tag>
                <Typography size={14} sizeMobile={12} weight={500}>{dict.investors.eyebrow}</Typography>
            </Tag>
            <div className="mt-[64px] bg-[#EEE] dark:bg-[#1D1D1D] rounded-[20px] p-[32px] md:p-[60px] flex flex-col items-start gap-[24px] max-w-[640px]">
                <Typography as="div" size={28} weight={700}>
                    {dict.investors.title}
                </Typography>
                <Typography size={16} lineHeight={26} className="opacity-70">
                    {dict.investors.pendingNote}
                </Typography>
                <Link href="/contact">
                    <Button variant="secondary">{dict.investors.contactLabel}</Button>
                </Link>
            </div>
        </div>
    )
}
