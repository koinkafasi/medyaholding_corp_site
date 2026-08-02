"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import clsx from "clsx";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";
import LanguageToggle from "./LanguageToggle";

interface MobileNavigationProps {
  open: boolean;
  handleOpen: () => void;
}

export default function MobileNavigation({ open = false, handleOpen }: MobileNavigationProps) {
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
    { name: dict.nav.sustainability, path: "/sustainability" },
    { name: dict.nav.investors, path: "/investors" },
    { name: dict.nav.news, path: "/news" },
    { name: dict.nav.contact, path: "/contact" },
  ];

  return (
    <div
      className={clsx(
        "fixed top-[10dvh] right-0 w-full h-[90dvh] bg-[#070707] p-[20px] md:px-[72px] text-white z-20 transition-transform duration-500 lg:hidden",
        open ? "translate-x-0" : "translate-x-full"
      )}
    >
      {open && (
        <>
          <div className="w-[1453.467px] h-[1367px] rounded-[1453.467px] bg-[#873AE3] blur-[150px] z-1 absolute left-[-100%] md:left-0 top-[95%]" />
          <div className="w-[1537.615px] h-[1444px] rounded-[1537.615px] bg-[#1146F2] blur-[180px] z-1 absolute left-[-290%] md:left-[-90%] top-[95%]" />
        </>
      )}

      <nav className="space-y-[40px] flex flex-col z-10">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              onClick={handleOpen}
              className={clsx(
                "cursor-pointer transition-all",
                isActive ? "text-[18px] font-bold text-white" : "text-[16px] font-normal text-[#8D8D8D]",
                "hover:text-white hover:font-bold"
              )}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="relative z-10 mt-[40px]">
        <LanguageToggle />
      </div>
    </div>
  );
}
