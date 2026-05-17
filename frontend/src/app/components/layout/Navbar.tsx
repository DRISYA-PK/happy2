"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Method", href: "#what-hca-does" },
  { label: "Values", href: "#core-values" },
  { label: "Programs", href: "#programs" },
  { label: "Stories", href: "#testimonials" },
  { label: "Community", href: "#community" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      },
    );

    navLinks
      .map((link) => link.href.replace("#", ""))
      .forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`
          fixed left-0 right-0 top-0 z-50
          transition-all duration-500 ease-in-out
          ${scrolled ? "pt-3" : "pt-6"}
        `}
      >
        <motion.nav
          initial={false}
          animate={{
            backgroundColor: scrolled ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0)",
            backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
            borderColor: scrolled ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0)",
            boxShadow: scrolled ? "0 8px 30px rgba(0, 0, 0, 0.06)" : "0 0px 0px rgba(0, 0, 0, 0)",
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="
            mx-auto flex w-[92%] max-w-[1320px] items-center justify-between
            rounded-full border
            px-4 py-3 sm:px-5 xl:px-7 xl:py-4
          "
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="flex min-w-0 flex-shrink-0 items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 sm:gap-3"
            aria-label="Happiness Coaching Academy - Home"
          >
            <Image
              src="/home/logo.svg"
              alt="Happiness Coaching Academy"
              width={44}
              height={44}
              className="h-9 w-9 flex-shrink-0 object-contain transition-all duration-300 sm:h-10 sm:w-10 xl:h-11 xl:w-11"
              priority
            />
            <span className="font-display max-w-[9.5rem] text-[12px] sm:text-[14px] xl:text-base font-extrabold leading-[1.15] text-gray-950 block">
              Happiness Coaching<br />
              <span className="text-primary">Academy</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-0.5 xl:flex" role="list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.label} className="relative">
                  <Link
                    href={link.href}
                    className={`
                      relative rounded-full px-3 py-2
                      text-[14px] font-semibold
                      transition-all duration-300
                      ${
                        isActive
                          ? "bg-primary/8 text-primary"
                          : scrolled
                            ? "text-gray-700"
                            : "text-gray-800"
                      }
                      hover:bg-primary/5 hover:text-primary
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50
                    `}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-[-2px] left-0 right-0 mx-4 h-[2px] rounded-full bg-primary"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-3 xl:flex">
            <Link
              href="#programs"
              className="
                rounded-full px-5 py-3
                text-sm font-bold text-primary
                border border-primary/25 bg-white/50 backdrop-blur-md
                shadow-[0_4px_12px_rgba(128,0,128,0.08)]
                transition-all duration-300 hover:-translate-y-0.5
                hover:border-primary/40 hover:bg-primary/5
                hover:shadow-[0_8px_20px_rgba(128,0,128,0.12)]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50
              "
            >
              Explore Programs
            </Link>
            <Link
              href="#cta"
              className="
                rounded-full px-5 py-3
                text-sm font-bold text-secondary-foreground
                bg-secondary hover:bg-secondary/90
                shadow-[0_10px_25px_-5px_rgba(255,206,27,0.4)]
                transition-all duration-300 hover:-translate-y-0.5
                hover:shadow-[0_15px_35px_-5px_rgba(255,206,27,0.5)]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50
              "
            >
              Start Your Transformation
            </Link>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <Link
              href="#cta"
              className="
                rounded-full px-3.5 py-2 sm:px-4 sm:py-2.5
                text-[10px] sm:text-xs font-extrabold text-secondary-foreground
                bg-secondary hover:bg-secondary/90
                shadow-[0_6px_15px_-4px_rgba(255,206,27,0.45)]
                transition-all duration-300 hover:translate-y-[-0.5px]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50
                flex items-center justify-center shrink-0
              "
            >
              <span className="hidden sm:inline">Start Your Transformation</span>
              <span className="inline sm:hidden">Start Now</span>
            </Link>

            <button
              className="
                flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full
                text-gray-700 transition-colors duration-200
                hover:bg-primary/8 hover:text-primary
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50
                shrink-0
              "
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </motion.nav>

        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className={`
            absolute left-1/2 top-full mt-3 w-[92%] max-w-[420px] -translate-x-1/2 xl:hidden
            origin-top overflow-hidden rounded-3xl
            border border-white/60 bg-white/80 backdrop-blur-2xl
            shadow-[0_16px_48px_rgba(31,38,135,0.12)]
            transition-all duration-300 ease-out
            ${
              menuOpen
                ? "translate-y-0 scale-y-100 opacity-100"
                : "pointer-events-none -translate-y-2 scale-y-95 opacity-0"
            }
          `}
        >
          <nav className="flex flex-col gap-1 p-5">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className={`
                    rounded-2xl px-4 py-3
                    text-[15px] font-semibold
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-primary/8 text-primary shadow-sm"
                        : "text-gray-800 hover:bg-primary/5 hover:text-primary"
                    }
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50
                  `}
                  style={{ transitionDelay: menuOpen ? `${index * 30}ms` : "0ms" }}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="mt-4 flex flex-col gap-3 border-t border-gray-100 pt-4">
              <Link
                href="#programs"
                onClick={closeMenu}
                className="
                  w-full rounded-full px-6 py-3 text-center
                  text-sm font-semibold text-primary
                  border border-primary/25 bg-primary/5
                  transition-all duration-200
                  hover:border-primary/40 hover:bg-primary/12
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50
                "
              >
                Explore Programs
              </Link>
              <Link
                href="#cta"
                onClick={closeMenu}
                className="
                  w-full rounded-full px-6 py-3 text-center
                  text-sm font-semibold text-secondary-foreground
                  bg-secondary shadow-md shadow-secondary/25
                  transition-all duration-200 hover:bg-secondary/85
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50
                "
              >
                Start Your Transformation
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/10 backdrop-blur-sm xl:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}
