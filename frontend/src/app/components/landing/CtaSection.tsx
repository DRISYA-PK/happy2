import { motion } from "motion/react";
import { GlowOrb, OrbitalLines, SmileArc } from "./decor";

export function CtaSection() {
  return (
    <section id="programs" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="glass-surface relative overflow-hidden rounded-[40px] px-6 py-16 text-center md:px-16 md:py-24"
        >
          <GlowOrb className="-left-20 -top-24" color="#FFCE1B" size={420} opacity={0.55} />
          <GlowOrb className="-bottom-24 -right-20" color="#800080" size={460} opacity={0.35} />
          <OrbitalLines className="inset-0 opacity-60" />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-[var(--purple-brand)]/80">
              Begin the journey
            </p>
            <h2 className="font-display mt-4 text-balance text-4xl font-bold leading-[1.05] text-[var(--nature-black)] md:text-6xl lg:text-[68px]">
              Start your <span className="text-[var(--purple-brand)]">happiness</span>{" "}
              transformation journey.
            </h2>
            <SmileArc className="mx-auto mt-6 h-6 w-32 text-[var(--mustard)]" strokeWidth={3} />
            <p className="mx-auto mt-7 max-w-xl text-balance text-[var(--nature-black)]/65 md:text-lg">
              A guided, science-led path back to the calm, joyful, deeply alive
              version of you. Step in when you are ready, we will meet you there.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--purple-brand)] px-7 py-4 text-sm font-medium text-white shadow-[0_22px_50px_-14px_rgba(128,0,128,0.55)] transition-all hover:translate-y-[-1px]"
              >
                Explore Programs
                <span className="transition-transform group-hover:translate-x-1">-&gt;</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--nature-black)] px-7 py-4 text-sm font-medium text-white shadow-[0_18px_40px_-14px_rgba(17,24,16,0.5)] transition-all hover:bg-[var(--nature-black)]/90"
              >
                Book a Discovery Call
              </a>
            </div>

            <p className="mt-6 text-[12px] text-[var(--nature-black)]/45">
              No pressure. No noise. Just a real conversation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
