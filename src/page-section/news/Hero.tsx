"use client";
import { useLocale } from "next-intl";
import Typography from "@/src/component/Typography";
import HeroBackground from "@/src/component/HeroBackground";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

export default function Hero() {
    const dict = getDictionary(useLocale() as Locale);
    return (
        <HeroBackground>
            <div className="flex flex-col lg:flex-row justify-between items-start self-stretch gap-[8px]">
                <div className="w-full lg:w-[70%]">
                    <Typography as="div" color="#fff" size={72} sizeTablet={52} sizeMobile={40} weight={600} lineHeight={85} lineHeightTablet={64} lineHeightMobile={52} letterSpacing={-2.16} letterSpacingMobile={-1.2} noDarkMode>
                        {dict.newsHero.title}
                    </Typography>
                    <Typography noDarkMode color="#fff" size={18} className="mt-[24px] w-full lg:w-[60%]">
                        {dict.newsHero.subtitle}
                    </Typography>
                </div>
            </div>
        </HeroBackground>
    )
}
