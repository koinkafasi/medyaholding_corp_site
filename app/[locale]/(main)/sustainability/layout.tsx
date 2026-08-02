import type { Metadata } from "next";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const dict = getDictionary(locale as Locale);
    return {
        title: `${dict.nav.sustainability} | ${dict.site.title}`,
        description: dict.sustainabilityHero.subtitle,
    };
}

export default function SustainabilityLayout({ children }: { children: React.ReactNode }) {
    return children;
}
