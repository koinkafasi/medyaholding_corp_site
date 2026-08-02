"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import HeroBackground from "@/src/component/HeroBackground";
import CornerRibbon from "@/src/component/CornerRibbon";
import Typography from "@/src/component/Typography";
import Button from "@/src/component/Button";
import Tag from "@/src/component/Tag";
import Icons from "@/src/component/Icons";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

interface HeroProps {
  onScrollToTestimonials?: () => void;
}

export default function Hero({ onScrollToTestimonials }: HeroProps) {
  const dict = getDictionary(useLocale() as Locale);

  return (
    <HeroBackground component={<CornerRibbon />} videoSrc="/videos/hero-bg.mp4">
      <div className="flex flex-col lg:flex-row justify-between items-start self-stretch gap-[8px]">
        {/* Text Section */}
        <div className="w-full lg:w-[75%]">
          <Tag color="#fff" className="mb-[24px] border-white/30">
            {dict.homeHero.badge}
          </Tag>

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

          <div className="flex flex-wrap items-center gap-[16px] mt-[32px]">
            <Link href="/contact">
              <Button variant="primary">
                {dict.homeHero.cta}
              </Button>
            </Link>
            <Link href="/portofolio">
              <Button variant="secondary">
                {dict.homeHero.seeWork}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-start items-stretch self-stretch mt-[48px] lg:mt-[22px]">
        {/* Scroll Down */}
        <div
          className="flex justify-between items-center gap-[8px] text-[#070707] dark:text-white cursor-pointer"
          onClick={onScrollToTestimonials}
        >
          {dict.homeHero.scrollDown} <Icons name="arrowDown" className="w-5" />
        </div>
      </div>
    </HeroBackground>
  );
}
