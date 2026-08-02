"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import Button from "./Button";

import Logo from "@/src/assets/images/Logo.svg";
import XLogo from "@/src/assets/images/XLogo.svg";
import InstagramLogo from "@/src/assets/images/InstagramLogo.svg";
import LinkedinLogo from "@/src/assets/images/LinkedinLogo.svg";
import IcCopyRight from "@/src/assets/icons/copyRight.svg";
import Icons from "./Icons";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

export default function Footer() {
  const dict = getDictionary(useLocale() as Locale);

  return (
    <div className="relative overflow-hidden bg-[#070707]">
      {/* Background Blur Elements */}
      <div className="absolute w-full z-0">
        <div className="absolute right-[-90%] mt-[-15%] md:mt-[20%] lg:mt-[-3%] md:right-[-15%] bg-[#873AE3] blur-[45px] lg:blur-[96px] w-[570.659px] lg:w-[1242px] h-[120.38px] lg:h-[262px] rounded-[570.659px] lg:rounded-[1242px] rotate-[170.318deg]" />
        <div className="absolute left-[-50%] md:left-[-10%] lg:left-10 mt-[-15%] lg:mt-[-3%] bg-[#1146F2] blur-[45px] md:blur-[96px] w-[678.357px] md:w-[1475px] h-[141.516px] md:h-[308px] rounded-[678.357px] md:rounded-[1475px] rotate-[170.318deg]" />
        <div className="ml-[-20%] mt-[-33%] md:mt-[-40%] lg:mt-[-17%] bg-[#fff] dark:bg-[#070707] blur-[35px] md:blur-[74px] w-[1589.28px] md:w-[3459px] h-[202.956px] md:h-[448px] rounded-[1589.28px] md:rounded-[448px] rotate-[177.318deg]" />
      </div>

      {/* Main Footer Content */}
      <div className="relative px-[16px] pb-[32px] pt-[120px] md:pt-[240px] md:px-[72px] md:pb-[72px] lg:pt-[450px] z-10">
        {/* CTA Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between w-full md:pr-[80px] gap-[32px]">
          <div className="flex flex-col gap-[16px] w-full lg:w-[60%]">
            <div className="text-[#fff] text-[32px] md:text-[40px] font-semibold leading-[41px] md:leading-[48px]">
              {dict.footer.ctaTitle}
            </div>
            <div className="text-[#fff] text-[14px]">
              {dict.footer.ctaSubtitle}
            </div>
          </div>
          <Link href="/contact">
            <Button variant="secondary">{dict.pricingSection.getStarted}</Button>
          </Link>
        </div>

        {/* Footer Links */}
        <div className="mt-[64px] md:mt-[107px] flex flex-col lg:flex-row items-start justify-between gap-[48px]">
          {/* Brand Section */}
          <div className="flex flex-col gap-[24px] w-[70%] lg:w-[20%]">
            <Logo className="w-full h-auto" />
            <div className="font-medium text-white leading-[24px]">
              {dict.footer.tagline}
            </div>
            <div className="flex items-center gap-[15px]">
              <div className="bg-[#1D1D1D] rounded-full p-[10px]">
                <XLogo className="w-full h-auto" />
              </div>
              <div className="bg-[#1D1D1D] rounded-full p-[10px]">
                <InstagramLogo className="w-full h-auto" />
              </div>
              <div className="bg-[#1D1D1D] rounded-full p-[10px]">
                <LinkedinLogo className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-start justify-between w-full lg:w-[35%] md:gap-[100px]">
            <div>
              <div className="text-[#8D8D8D] mb-[24px]">{dict.footer.mainMenuTitle}</div>
              <div className="flex flex-col items-start gap-[16px] text-white">
                <Link href="/about" className="cursor-pointer">{dict.nav.about}</Link>
                <Link href="/portofolio" className="cursor-pointer">{dict.nav.portfolio}</Link>
                <Link href="/services" className="cursor-pointer">{dict.nav.services}</Link>
                <Link href="/pricing" className="cursor-pointer">{dict.nav.pricing}</Link>
              </div>
            </div>

            <div>
              <div className="text-[#8D8D8D] mb-[24px]">{dict.footer.companyTitle}</div>
              <div className="flex flex-col items-start gap-[16px] text-white">
                <div className="cursor-pointer">{dict.footer.careers}</div>
                <div className="cursor-pointer">{dict.footer.faqLabel}</div>
                <Link href="/contact" className="cursor-pointer">{dict.footer.contactUs}</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-[24px] mt-[80px] md:mt-[120px]">
          <div className="flex items-center gap-[8px]">
            <IcCopyRight className="w-5" />
            <div className="text-white font-medium">
              {dict.footer.copyright}
            </div>
          </div>
          <Link href="/contact" className="flex justify-between items-center gap-[8px] text-white cursor-pointer">
            {dict.footer.contactUs} <Icons name="arrowRight" className="w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
