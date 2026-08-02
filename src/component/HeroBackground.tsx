import Image from "next/image";
import HeroTower from "@/src/assets/images/generated/hero-tower.png";

interface Props {
    children?: React.ReactNode
    component?: React.ReactNode
    /** Optional background video (opt-in per hero); falls back to the static image if omitted. */
    videoSrc?: string
}
export default function HeroBackground(props: Props) {
    const { children, component, videoSrc } = props
    return (
        <div className="relative overflow-hidden">
            <div className="absolute inset-0 w-full h-full -z-20 bg-[#050810]">
                {videoSrc ? (
                    <video
                        src={videoSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-70"
                    />
                ) : (
                    <Image
                        src={HeroTower}
                        alt=""
                        fill
                        priority
                        className="object-cover opacity-70"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-[#050810]/40 via-[#050810]/70 to-[#050810]" />
            </div>
            <div className="px-[20px] pb-[48px] pt-[118px] md:px-[72px] md:pb-[80px] lg:pt-[192px]">
                {children}
            </div>
            {component}
        </div>
    )
}
