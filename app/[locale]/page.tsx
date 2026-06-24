import { useTranslations } from "next-intl";
import { Bot, Code2 } from "lucide-react";
import { ArkaansIcon } from "@/components/icons/ArkaansIcon";
import { ArkaansLogo } from "@/components/icons/ArkaansLogo";
import { DiscordIcon } from "@/components/icons/DiscordIcon";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { HubCard } from "@/components/HubCard";
import { LangSwitcher } from "@/components/LangSwitcher";

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="relative flex h-dvh flex-col overflow-x-hidden overflow-y-auto sm:overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/5 blur-[100px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex shrink-0 items-center justify-between px-6 py-4">
        <ArkaansIcon size={24} className="opacity-50" />
        <LangSwitcher />
      </header>

      {/* Main */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center gap-8 px-6 pb-16">
        {/* Logo */}
        <ArkaansLogo
          size={180}
          className="drop-shadow-[0_0_32px_rgba(233,78,27,0.25)]"
        />

        {/* Tagline */}
        <p className="text-sm text-white/50 sm:text-base">{t("hero.tagline")}</p>

        {/* Cards */}
        <div className="grid w-full max-w-lg grid-cols-1 gap-2.5 sm:grid-cols-2">
          <HubCard
            href="https://copilot.arkaans.com"
            icon={<Bot size={18} strokeWidth={1.5} />}
            title={t("links.copilot.title")}
            description={t("links.copilot.description")}
          />
          <HubCard
            href="https://joe.arkaans.com"
            icon={<Code2 size={18} strokeWidth={1.5} />}
            title={t("links.portfolio.title")}
            description={t("links.portfolio.description")}
          />
          <HubCard
            href="https://discord.gg/BgRwHfK"
            icon={<DiscordIcon size={18} />}
            title={t("links.discord.title")}
            description={t("links.discord.description")}
          />
          <HubCard
            href="https://github.com/Boutzi"
            icon={<GithubIcon size={18} />}
            title={t("links.github.title")}
            description={t("links.github.description")}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 flex shrink-0 flex-col items-center gap-2 px-6 py-4">
        <div className="flex items-center gap-4">
          <a
            href="mailto:contact@arkaans.com"
            className="text-xs text-white/20 transition-colors hover:text-white/40"
          >
            contact@arkaans.com
          </a>
          <span className="text-white/10">·</span>
          <a
            href="https://arkaans.myspreadshop.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/20 transition-colors hover:text-white/40"
          >
            {t("footer.shop")} ↗
          </a>
        </div>
        <span className="text-xs text-white/20">
          Arkaans © 2014–{new Date().getFullYear()}
        </span>
      </footer>
    </div>
  );
}
