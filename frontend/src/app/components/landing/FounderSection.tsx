import { motion } from "motion/react";

const founderCards = [
  {
    title: "Why HCA started",
    body: "HCA was born from a deep desire to help people break free from emotional struggles and live a life of purpose, clarity, and joy.",
  },
  {
    title: "Mission",
    body: "To empower individuals with science-based tools, mindset coaching, and emotional healing to create meaningful transformation.",
  },
  {
    title: "Vision",
    body: "A world where everyone lives with emotional freedom, inner confidence, and a deep sense of purpose.",
  },
];

export function FounderSection() {
  return (
    <section id="about" className="relative px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-32"
          >
            <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-[var(--purple-brand)]/80">
              About Founder
            </p>
            <h2 className="font-display mt-4 text-balance text-4xl font-bold leading-[1.05] text-[var(--nature-black)] md:text-5xl lg:text-[64px]">
              The Story Behind{" "}
              <span className="text-[var(--purple-brand)]">Happiness Coach Academy</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--nature-black)]/65 md:text-lg">
              Why HCA exists, and the impact we&apos;re here to create for a more
              empowered and emotionally free world.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-[var(--purple-brand)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_-14px_rgba(128,0,128,0.55)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_48px_-12px_rgba(128,0,128,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--purple-brand)]/50"
            >
              Read Founder Story
            </a>
          </motion.div>

          <div className="grid gap-4">
            {founderCards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.07,
                }}
                className="glass-surface group relative overflow-hidden rounded-[28px] p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8"
              >
                <div
                  aria-hidden
                  className={`absolute -right-20 -top-24 h-56 w-56 rounded-full blur-3xl ${
                    index === 1 ? "bg-[var(--purple-soft)]/65" : "bg-[var(--mustard)]/35"
                  }`}
                />
                <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start">
                  <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl bg-white/70 text-sm font-black text-[var(--purple-brand)] shadow-[0_10px_24px_-18px_rgba(128,0,128,0.6)] ring-1 ring-white/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold leading-tight text-[var(--nature-black)]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-[var(--nature-black)]/62 md:text-base">
                      {card.body}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
