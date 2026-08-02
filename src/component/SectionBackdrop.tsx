const PALETTE = ["#1146F2", "#873AE3"] as const;

interface Props {
    index: number;
}

export default function SectionBackdrop({ index }: Props) {
    const color = PALETTE[index % PALETTE.length];
    const flip = index % 2 === 1;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <div
                className={`absolute ${flip ? "right-[-10%] top-[-15%]" : "left-[-10%] bottom-[-15%]"} w-[640px] h-[640px] rounded-full blur-[130px] opacity-[0.18] dark:opacity-[0.24]`}
                style={{ backgroundColor: color }}
            />
            <span
                className={`font-display absolute ${flip ? "left-[8px] md:left-[40px]" : "right-[8px] md:right-[40px]"} bottom-[60px] md:bottom-[90px] text-[160px] md:text-[240px] font-medium leading-none text-[#070707] dark:text-white opacity-[0.14] dark:opacity-[0.16] select-none`}
            >
                {String(index + 1).padStart(2, "0")}
            </span>
        </div>
    );
}
