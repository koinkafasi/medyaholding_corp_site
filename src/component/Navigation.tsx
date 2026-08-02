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
    { name: dict.nav.portfolio, path: "/portofolio" },
    { name: dict.nav.services, path: "/services" },
    { name: dict.nav.pricing, path: "/pricing" },
  ];

  return (
    <nav className="space-x-[40px] hidden lg:flex">
      {navItems.map((item, index) => {
        const isActive = pathname === item.path;

        return (
          <Link
            key={index}
            href={item.path}
            className={clsx(
              "cursor-pointer text-[16px] hover:text-white hover:font-bold transition-colors duration-200",
              isActive
                ? "font-bold text-white"
                : "font-regular text-[#8D8D8D]"
            )}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
