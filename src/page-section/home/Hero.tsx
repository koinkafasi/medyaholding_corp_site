"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import HeroBackground from "@/src/component/HeroBackground";
import Typography from "@/src/component/Typography";
import Button from "@/src/component/Button";
import Icons from "@/src/component/Icons";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

interface HeroProps {
  onScrollToTestimonials?: () => void;
}

export default function Hero({ onScrollToTestimonials }: HeroProps) {
  const dict = getDictionary(useLocale() as Locale);

  return (
    <HeroBackground>
      <div className="flex flex-col lg:flex-row justify-between items-start self-stretch gap-[8px]">
        {/* Text Section */}
        <div className="w-full lg:w-[75%]">
          <Typography
            as="div"
            color="#fff"
            size={72}
            sizeTablet={52}
            sizeMobile={40}
            weight={600}
            lineHeight={85}
            lineHeightTablet={64}
            lineHeightMobile={52}
            letterSpacing={-2.16}
            letterSpacingMobile={-1.2}
            noDarkMode
          >
            {dict.homeHero.title.map((line, i) => (
              <span key={i}>
                {line}
                {i < dict.homeHero.title.length - 1 && <br />}
              </span>
            ))}
          </Typography>

          <Typography
            color="#fff"
            noDarkMode
            size={18}
            className="mt-[24px] lg:w-[60%]"
          >
            {dict.homeHero.subtitle}
          </Typography>

          <Link href="/contact">
            <Button variant="primary" className="mt-[32px]">
              {dict.homeHero.cta}
            </Button>
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-stretch lg:items-end self-stretch mt-[48px] lg:mt-[22px]">
        {/* Scroll Down */}
        <div
          className="flex justify-between items-center gap-[8px] text-[#070707] dark:text-white cursor-pointer"
          onClick={onScrollToTestimonials}
        >
          {dict.homeHero.scrollDown} <Icons name="arrowDown" className="w-5" />
        </div>

        {/* Link to Portfolio */}
        <Link href="/portofolio">
          <div className="flex justify-between items-center gap-[8px] text-[#070707] text-[14px] dark:text-[#fff] cursor-pointer">
            {dict.homeHero.seeWork} <Icons name="arrowUpRight" className="w-5" />
          </div>
        </Link>
      </div>
    </HeroBackground>
  );
}
