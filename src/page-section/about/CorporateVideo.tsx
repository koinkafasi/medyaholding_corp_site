"use client"

import { useState } from "react";
import { useLocale } from "next-intl";
import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

export default function CorporateVideo() {
    const dict = getDictionary(useLocale() as Locale);
    const [playing, setPlaying] = useState(false);

    return (
        <div className="bg-white dark:bg-[#070707] w-full px-[16px] md:px-[72px] py-[48px] md:py-[80px]">
            <Tag>
                <Typography size={14} weight={500}>{dict.corporateVideo.label}</Typography>
            </Tag>
            <div className="flex flex-col lg:flex-row justify-between items-start w-full mt-[24px] gap-[24px]">
                <div className="text-[32px] md:text-[48px] font-bold leading-[41.6px] md:leading-[56px] text-[#070707] dark:text-[#fff] w-full lg:w-[50%]">
                    {dict.corporateVideo.title}
                </div>
                <div className="flex gap-[10px] w-full lg:w-[40%]">
                    <Typography size={16} weight={500} lineHeight={24}>
                        {dict.corporateVideo.subtitle}
                    </Typography>
                </div>
            </div>

            <div className="relative mt-[64px] w-full aspect-video rounded-[12px] overflow-hidden bg-[#EEE] dark:bg-[#1D1D1D] border border-[#EEE] dark:border-[#1D1D1D]">
                {playing ? (
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        src="/videos/corporate.mp4"
                        poster="/videos/corporate-poster.jpg"
                        controls
                        autoPlay
                        playsInline
                    />
                ) : (
                    <button
                        type="button"
                        onClick={() => setPlaying(true)}
                        aria-label={dict.corporateVideo.title}
                        className="group absolute inset-0 w-full h-full"
                        style={{
                            backgroundImage: "url(/videos/corporate-poster.jpg)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <span className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40" />
                        <span className="relative z-10 flex items-center justify-center w-[72px] h-[72px] md:w-[88px] md:h-[88px] rounded-full bg-white/90 group-hover:bg-white transition-colors mx-auto my-auto">
                            <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-9 md:h-9 fill-[#070707] translate-x-[2px]">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </span>
                    </button>
                )}
            </div>
        </div>
    )
}
