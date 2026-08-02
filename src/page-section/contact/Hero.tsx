"use client";
import { useLocale } from "next-intl";
import HeroBackground from "@/src/component/HeroBackground";
import Typography from "@/src/component/Typography";
import Button from "@/src/component/Button";
import Icons from "@/src/component/Icons";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

export default function Hero() {
    const dict = getDictionary(useLocale() as Locale);
    return (
        <HeroBackground>
            <div className="w-full lg:w-[60%] lg:mx-auto flex flex-col items-start lg:items-center lg:text-center justify-center gap-[72px] lg:gap-[160px]">
                <div className="w-full flex flex-col items-start lg:items-center gap-[24px]">
                    <Typography as="div" color="#fff" size={72} sizeTablet={52} sizeMobile={40} weight={600} lineHeight={85} lineHeightTablet={64} lineHeightMobile={52} letterSpacing={-2.16} letterSpacingMobile={-1.2} noDarkMode>
                        {dict.contactHero.title}
                    </Typography>
                    <Typography color="#fff" noDarkMode size={18} className="md:w-[80%]">
                        {dict.contactHero.subtitle}
                    </Typography>
                    <Button variant="primary" className="mt-[32px]">{dict.homeHero.cta}</Button>
                </div>
                <div className="flex flex-col lg:flex-row items-start justify-between gap-[32px] w-full lg:w-[90%]">
                    <div className="flex items-center gap-[24px]">
                        <div className="bg-[#1D1D1D] dark:bg-[#393939] rounded-[12px] p-[12px]">
                            <Icons name="chats" className="w-[24px] h-[24px]" color="#fff" />
                        </div>
                        <div className="flex flex-col items-start gap-[4px]">
                            <Typography color="#070707" size={20} weight={700}>Email</Typography>
                            <Typography color="#070707" size={14} weight={400} className="underline">{dict.contactHero.email}</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </HeroBackground>
    )
}
