import { motion } from "motion/react";
import { BrandMark } from "./decor";

const links = [
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export function GlassNavbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <nav className="glass-pill flex w-full max-w-6xl items-center gap-6 rounded-full px-4 py-2.5 md:px-6">
        <a href="#" className="flex items-center gap-2.5 pl-1">
          <BrandMark className="h-9 w-9" />
          <span className="font-display text-sm font-bold tracking-tight text-[var(--nature-black)] md:text-[15px]">
            Happiness <span className="text-[var(--purple-brand)]">Academy</span>
          </span>
        </a>

        <ul className="mx-auto hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[13.5px] font-medium text-[var(--nature-black)]/70 transition-colors hover:text-[var(--purple-brand)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <a
            href="#programs"
            className="hidden rounded-full px-4 py-2 text-[13px] font-medium text-[var(--purple-brand)] transition-colors hover:bg-white/60 md:inline-flex"
          >
            Explore Programs
          </a>
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-1.5 rounded-full bg-[var(--nature-black)] px-4 py-2 text-[13px] font-medium text-white shadow-[0_8px_24px_-8px_rgba(17,24,16,0.5)] transition-all hover:bg-[var(--purple-brand)] hover:shadow-[0_10px_30px_-8px_rgba(128,0,128,0.5)]"
          >
            Start Your Transformation
            <span className="transition-transform group-hover:translate-x-0.5">-&gt;</span>
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
