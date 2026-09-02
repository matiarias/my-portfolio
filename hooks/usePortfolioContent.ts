import { useRouter } from "next/router";

import { portfolioContent } from "@/data/portfolioContent";
import type { PortfolioLocale } from "@/types";

export const usePortfolioContent = () => {
  const { locale } = useRouter();
  const activeLocale: PortfolioLocale = locale === "es" ? "es" : "en";

  return portfolioContent[activeLocale];
};
