import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";

import { usePortfolioContent } from "@/hooks/usePortfolioContent";
import LanguageSwitcher from "@/subComponents/LanguageSwitcher";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [blurNav, setBlurNav] = useState(false);
  const restoreScrollPosition = useRef(true);
  const content = usePortfolioContent();

  const closeNav = useCallback(() => {
    restoreScrollPosition.current = true;
    setNav(false);
  }, []);
  const toggleNav = useCallback(() => setNav((previous) => !previous), []);

  const handleNavigation = useCallback(() => {
    restoreScrollPosition.current = false;
    setNav(false);
  }, []);

  useEffect(() => {
    const scrollNav = () => setBlurNav(window.scrollY >= 80);

    window.addEventListener("scroll", scrollNav);

    return () => window.removeEventListener("scroll", scrollNav);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeNav();
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [closeNav]);

  useEffect(() => {
    const desktopViewport = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (desktopViewport.matches) closeNav();
    };

    desktopViewport.addEventListener("change", closeOnDesktop);

    return () => desktopViewport.removeEventListener("change", closeOnDesktop);
  }, [closeNav]);

  useEffect(() => {
    if (!nav) return;

    const scrollY = window.scrollY;
    const { overflow: previousHtmlOverflow } = document.documentElement.style;
    const {
      overflow: previousBodyOverflow,
      position: previousBodyPosition,
      top: previousBodyTop,
      width: previousBodyWidth,
    } = document.body.style;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.position = previousBodyPosition;
      document.body.style.top = previousBodyTop;
      document.body.style.width = previousBodyWidth;

      if (restoreScrollPosition.current) window.scrollTo(0, scrollY);

      restoreScrollPosition.current = true;
    };
  }, [nav]);

  const navLinks = content.navigation.links;

  return (
    <nav
      className={`fixed left-0 top-0 z-[100] h-16 w-full border-b transition ${blurNav ? "border-violet-300/20 bg-cosmic-space/85 backdrop-blur-xl" : "border-transparent"}`}
      aria-label={content.navigation.primaryLabel}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-end px-5 md:justify-between md:px-10">
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="nav-items text-base uppercase tracking-[1px] text-slate-200 md:text-xl 2xl:text-2xl"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          <div className="md:hidden">
            <LanguageSwitcher />
          </div>

          <button
            type="button"
            onClick={toggleNav}
            className="rounded-full p-2 text-slate-200 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cosmic-cyan-300 md:hidden"
            aria-label={nav ? content.navigation.closeMenu : content.navigation.openMenu}
            aria-controls="mobile-navigation"
            aria-expanded={nav}
          >
            <AiOutlineMenu size={28} />
          </button>
        </div>
      </div>

      {nav && (
        <div
          className="fixed inset-0 z-[110] bg-[#05010d]/70 backdrop-blur-sm md:hidden"
          onClick={closeNav}
        >
          <div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label={content.navigation.mobileLabel}
            className="flex h-[100dvh] w-[min(22rem,88vw)] flex-col overflow-y-auto border-r border-violet-300/20 bg-cosmic-space/95 px-5 backdrop-blur-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative flex h-20 items-center justify-end">
              <button
                type="button"
                onClick={closeNav}
                className="rounded-full border border-violet-300/20 p-2 text-slate-200 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cosmic-cyan-300"
                aria-label={content.navigation.closeMenu}
              >
                <AiOutlineClose size={24} />
              </button>

              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-cosmic-signal-400 via-violet-500/60 to-transparent"
              />
            </div>

            <ul className="mt-8 flex flex-col gap-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={handleNavigation}
                    className="block border-l-2 border-transparent rounded-r-lg px-4 py-3 text-lg uppercase tracking-[0.08em] text-slate-200 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cosmic-cyan-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div
              aria-hidden="true"
              className="mt-auto h-px w-full bg-gradient-to-r from-cosmic-signal-400 via-violet-500/60 to-transparent"
            />

            <div className="flex items-center gap-3 py-8">
              <a
                href="https://www.linkedin.com/in/matiasarias27"
                target="_blank"
                rel="noreferrer noopener"
                aria-label={content.social.linkedin}
                className="rounded-full border border-cosmic-cyan-300/30 bg-violet-950/60 p-3 text-slate-100 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cosmic-cyan-300"
              >
                <BsLinkedin size={20} />
              </a>

              <a
                href="https://github.com/matiarias"
                target="_blank"
                rel="noreferrer noopener"
                aria-label={content.social.github}
                className="rounded-full border border-cosmic-cyan-300/30 bg-violet-950/60 p-3 text-slate-100 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cosmic-cyan-300"
              >
                <BsGithub size={20} />
              </a>

              <a
                href="mailto:maticarlosarias@gmail.com"
                aria-label={content.social.email}
                className="rounded-full border border-cosmic-cyan-300/30 bg-violet-950/60 p-3 text-slate-100 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cosmic-cyan-300"
              >
                <AiOutlineMail size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
