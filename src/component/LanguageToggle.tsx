"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import clsx from "clsx";

export default function LanguageToggle({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const setLocale = (nextLocale: (typeof routing.locales)[number]) => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className={clsx("flex items-center gap-2 text-[13px] uppercase tracking-wide", className)}>
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-current={locale === l}
          className={clsx(
            "px-1 transition-opacity",
            locale === l ? "opacity-100 font-bold text-white" : "opacity-50 text-[#8D8D8D] hover:opacity-80"
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
