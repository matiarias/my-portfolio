import { usePortfolioContent } from "@/hooks/usePortfolioContent";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const content = usePortfolioContent();

  return (
    <footer className="border-t border-violet-300/20 px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <span className="font-medium text-cosmic-cyan-300">Matias Carlos Arias / {content.footer.role}</span>
        <span>© {year}</span>
      </div>
    </footer>
  );
};

export default Footer;
