"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#programs" },
  { label: "Success Stories", href: "#testimonials" },
  { label: "Resources", href: "#gallery" },
  { label: "Workshops", href: "#workshops" },
];

export  function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Scroll Spy Logic
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Detect when section is in upper/middle of viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sectionIds = navLinks.map(link => link.href.replace("#", ""));
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
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
            mx-auto flex items-center justify-between
            max-w-[1200px] w-[92%]
            rounded-full
            px-5 py-3 lg:px-8 lg:py-4
            border
          "
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-md"
            aria-label="Happiness Coaching Academy – Home"
          >
            <Image
              src="/home/Logo.png"
              alt="Happiness Coaching Academy"
              width={220}
              height={50}
              className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <ul
            className="hidden lg:flex items-center gap-1"
            role="list"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.label} className="relative">
                  <Link
                    href={link.href}
                    className={`
                      relative px-4 py-2 rounded-full
                      text-[15px] font-semibold
                      transition-all duration-300
                      ${isActive 
                        ? "text-primary bg-primary/8" 
                        : scrolled ? "text-gray-700" : "text-gray-800"
                      }
                      hover:text-primary hover:bg-primary/5
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50
                    `}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-primary mx-4 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="#programs"
              className="
                px-6 py-3 rounded-full
                text-sm font-bold text-primary
                border border-primary/25 bg-white/50 backdrop-blur-md
                hover:bg-primary/5 hover:border-primary/40
                shadow-[0_4px_12px_rgba(128,0,128,0.08)]
                hover:shadow-[0_8px_20px_rgba(128,0,128,0.12)]
                transition-all duration-300 hover:-translate-y-0.5
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50
              "
            >
              Explore Programs
            </Link>
            <Link
              href="#transform"
              className="
                px-6 py-3 rounded-full
                text-sm font-bold text-secondary-foreground
                bg-secondary hover:bg-secondary/90
                shadow-[0_10px_25px_-5px_rgba(255,206,27,0.4)]
                hover:shadow-[0_15px_35px_-5px_rgba(255,206,27,0.5)]
                transition-all duration-300 hover:-translate-y-0.5
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50
              "
            >
              Start Your Transformation
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="
              lg:hidden flex items-center justify-center
              w-10 h-10 rounded-full
              text-gray-700 hover:text-primary hover:bg-primary/8
              transition-colors duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50
            "
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen
              ? <X className="h-5 w-5" aria-hidden="true" />
              : <Menu className="h-5 w-5" aria-hidden="true" />
            }
          </button>
        </motion.nav>

        {/* Mobile Dropdown Menu */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className={`
            lg:hidden
            absolute top-full left-1/2 -translate-x-1/2
            w-[92%] max-w-[420px] mt-3
            rounded-3xl overflow-hidden
            bg-white/80 backdrop-blur-2xl
            border border-white/60
            shadow-[0_16px_48px_rgba(31,38,135,0.12)]
            transition-all duration-300 ease-out origin-top
            ${menuOpen
              ? "opacity-100 scale-y-100 translate-y-0"
              : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
            }
          `}
        >
          <nav className="flex flex-col p-5 gap-1">
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className={`
                    px-4 py-3 rounded-2xl
                    text-[15px] font-semibold
                    transition-all duration-200
                    ${isActive 
                      ? "text-primary bg-primary/8 shadow-sm" 
                      : "text-gray-800 hover:bg-primary/5 hover:text-primary"
                    }
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50
                  `}
                  style={{ transitionDelay: menuOpen ? `${i * 30}ms` : "0ms" }}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
              <Link
                href="#programs"
                onClick={closeMenu}
                className="
                  w-full text-center py-3 px-6 rounded-full
                  text-sm font-semibold text-primary
                  border border-primary/25 bg-primary/5
                  hover:bg-primary/12 hover:border-primary/40
                  transition-all duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50
                "
              >
                Explore Programs
              </Link>
              <Link
                href="#transform"
                onClick={closeMenu}
                className="
                  w-full text-center py-3 px-6 rounded-full
                  text-sm font-semibold text-secondary-foreground
                  bg-secondary hover:bg-secondary/85
                  shadow-md shadow-secondary/25
                  transition-all duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50
                "
              >
                Start Your Transformation
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Backdrop */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/10 backdrop-blur-sm"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}