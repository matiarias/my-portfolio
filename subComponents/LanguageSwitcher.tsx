import { useRouter } from "next/router";

import { usePortfolioContent } from "@/hooks/usePortfolioContent";
import type { PortfolioLocale } from "@/types";

const LanguageSwitcher = () => {
  const router = useRouter();
  const content = usePortfolioContent();
  const activeLocale: PortfolioLocale = router.locale === "es" ? "es" : "en";

  const changeLanguage = (locale: PortfolioLocale) => {
    if (locale === activeLocale) return;

    void router.push(router.pathname, router.asPath, {
      locale,
      scroll: false,
    });
  };

  return (
    <div
      role="group"
      aria-label={content.navigation.changeLanguage}
      className="inline-flex overflow-hidden rounded-full border border-violet-300/25 bg-violet-950/60 p-1 text-xs font-bold tracking-[0.12em]"
    >
      {(["en", "es"] as PortfolioLocale[]).map((locale) => {
        const isActive = locale === activeLocale;

        return (
          <button
            key={locale}
            type="button"
            onClick={() => changeLanguage(locale)}
            aria-pressed={isActive}
            className={`rounded-full px-3 py-1.5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cosmic-cyan-300 ${isActive ? "bg-cosmic-signal-300 text-cosmic-space" : "text-slate-300 hover:bg-cosmic-cyan-300/10 hover:text-cosmic-cyan-200"}`}
          >
            {locale.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
