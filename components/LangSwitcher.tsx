"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { FranceIcon } from "./icons/FranceIcon";
import { UnitedKingdomIcon } from "./icons/UnitedKingdomIcon";

export const LangSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggle = () => {
    const next = locale === "fr" ? "en" : "fr";
    router.replace(pathname, { locale: next });
  };

  return (
    <button
      onClick={toggle}
      aria-label="Switch language"
      className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-white/50 transition-all hover:border-white/20 hover:text-white/80"
    >
      {locale === "fr" ? (
        <>
          <UnitedKingdomIcon size={14} />
          EN
        </>
      ) : (
        <>
          <FranceIcon size={14} />
          FR
        </>
      )}
    </button>
  );
};
