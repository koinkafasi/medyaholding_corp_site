import type { Metadata } from "next";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const dict = getDictionary(locale as Locale);
    return {
        title: `${dict.nav.about} | ${dict.site.title}`,
        description: dict.aboutHero.subtitle,
    };
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
