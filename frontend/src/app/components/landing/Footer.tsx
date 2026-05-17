import { BrandMark } from "./decor";

export function Footer() {
  return (
    <footer id="contact" className="relative px-4 pb-12 pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="glass-surface flex flex-col items-start justify-between gap-8 rounded-3xl px-8 py-10 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <BrandMark className="h-10 w-10" />
            <div>
              <p className="font-display text-base font-bold tracking-tight text-[var(--nature-black)]">
                The Happiness Coaching Academy
              </p>
              <p className="text-[12px] text-[var(--nature-black)]/55">
                Happiness is a skill you can learn.
              </p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-[var(--nature-black)]/65">
            <a href="#features" className="hover:text-[var(--purple-brand)]">
              Features
            </a>
            <a href="#about" className="hover:text-[var(--purple-brand)]">
              About
            </a>
            <a href="#programs" className="hover:text-[var(--purple-brand)]">
              Programs
            </a>
            <a href="#testimonials" className="hover:text-[var(--purple-brand)]">
              Stories
            </a>
            <a href="#resources" className="hover:text-[var(--purple-brand)]">
              Resources
            </a>
          </nav>
        </div>
        <p className="mt-8 text-center text-[12px] text-[var(--nature-black)]/45">
          (c) {new Date().getFullYear()} The Happiness Coaching Academy. Crafted with warmth.
        </p>
      </div>
    </footer>
  );
}
