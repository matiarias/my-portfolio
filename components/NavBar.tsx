import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";

import OvniNavBar from "@/subComponents/OvniNavBar";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [blurNav, setBlurNav] = useState(false);
  const restoreScrollPosition = useRef(true);

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

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed left-0 top-0 z-[100] h-16 w-full border-b transition ${blurNav ? "border-violet-300/20 bg-[#100022]/85 backdrop-blur-xl" : "border-transparent"}`}
      aria-label="Primary navigation"
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-5 md:px-10">
        <div className="h-14 w-14">
          <OvniNavBar />
        </div>

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

        <button
          type="button"
          onClick={toggleNav}
          className="rounded-full p-2 text-slate-200 transition hover:bg-sky-300/10 hover:text-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 md:hidden"
          aria-label={nav ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          aria-expanded={nav}
        >
          <AiOutlineMenu size={28} />
        </button>
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
            aria-label="Mobile navigation"
            className="flex h-[100dvh] w-[min(22rem,88vw)] flex-col overflow-y-auto border-r border-violet-300/20 bg-[#100022]/95 px-5 backdrop-blur-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex h-20 items-center justify-between border-b border-violet-300/15">
              <div className="h-14 w-14">
                <OvniNavBar />
              </div>

              <button
                type="button"
                onClick={closeNav}
                className="rounded-full border border-violet-300/20 p-2 text-slate-200 transition hover:border-sky-300/60 hover:bg-sky-300/10 hover:text-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                aria-label="Close navigation menu"
              >
                <AiOutlineClose size={24} />
              </button>
            </div>

            <ul className="mt-8 flex flex-col gap-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={handleNavigation}
                    className="block rounded-lg px-4 py-3 text-lg uppercase tracking-[0.08em] text-slate-200 transition hover:bg-sky-300/10 hover:text-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex items-center gap-3 border-t border-violet-300/15 py-8">
              <a
                href="https://www.linkedin.com/in/matiasarias27"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Visit Matias Arias's LinkedIn profile"
                className="rounded-full border border-sky-300/30 bg-violet-950/60 p-3 text-slate-100 transition hover:-translate-y-0.5 hover:border-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              >
                <BsLinkedin size={20} />
              </a>

              <a
                href="https://github.com/matiarias"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Visit Matias Arias's GitHub profile"
                className="rounded-full border border-sky-300/30 bg-violet-950/60 p-3 text-slate-100 transition hover:-translate-y-0.5 hover:border-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              >
                <BsGithub size={20} />
              </a>

              <a
                href="mailto:maticarlosarias@gmail.com"
                aria-label="Email Matias Arias"
                className="rounded-full border border-sky-300/30 bg-violet-950/60 p-3 text-slate-100 transition hover:-translate-y-0.5 hover:border-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
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
