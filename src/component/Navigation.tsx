"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import clsx from "clsx";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

export default function Navigation() {
  const pathname = usePathname();
  const dict = getDictionary(useLocale() as Locale);

  const navItems = [
    { name: dict.nav.home, path: "/" },
    { name: dict.nav.about, path: "/about" },
    { name: dict.nav.sectors, path: "/sectors" },
    { name: dict.nav.portfolio, path: "/portofolio" },
    { name: dict.nav.services, path: "/services" },
    { name: dict.nav.pricing, path: "/pricing" },
    { name: dict.nav.careers, path: "/careers" },
  ];

  return (
    <nav className="space-x-[32px] hidden lg:flex">
      {navItems.map((item, index) => {
        const isActive = pathname === item.path;

        return (
          <Link
            key={index}
            href={item.path}
            className="group relative block h-[24px] w-max shrink-0 overflow-hidden cursor-pointer text-[16px] whitespace-nowrap"
          >
            {/* Invisible bold clone reserves the (wider) max-content width so
                the box never has to shrink-to-fit around the lighter-weight
                visible span, which is what caused the subpixel clipping. */}
            <span aria-hidden="true" className="invisible block font-bold">
              {item.name}
            </span>
            <span
              className={clsx(
                "absolute inset-0 block transition-transform duration-300 ease-out group-hover:-translate-y-full",
                isActive ? "font-bold text-white" : "font-normal text-[#8D8D8D]"
              )}
            >
              {item.name}
            </span>
            <span
              aria-hidden="true"
              className="absolute inset-0 block translate-y-full font-bold text-white transition-transform duration-300 ease-out group-hover:translate-y-0"
            >
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
