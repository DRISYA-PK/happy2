import { motion } from "motion/react";
import Image from "next/image";

const t1 = "/testimonial-1.svg";
const t2 = "/testimonial-2.svg";
const t3 = "/testimonial-3.svg";

const stories = [
  {
    img: t1,
    name: "Amelia Hart",
    role: "Creative Director, London",
    quote:
      "For the first time in years, I feel at home in my own mind. The coaching gave me language for emotions I'd buried, and tools to actually live differently.",
  },
  {
    img: t2,
    name: "Daniel Okafor",
    role: "Entrepreneur, Lisbon",
    quote:
      "I came in chasing performance. I left with peace. This isn't another productivity hack, it's a quiet, profound rewiring of how I show up.",
  },
  {
    img: t3,
    name: "Sofia Marin",
    role: "Therapist, Barcelona",
    quote:
      "Elegant, grounded, deeply human. I recommend the Academy to clients who are ready to stop surviving and start truly living.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-[var(--purple-brand)]/80">
              Success Stories
            </p>
            <h2 className="font-display mt-3 text-balance text-4xl font-bold leading-[1.05] text-[var(--nature-black)] md:text-5xl lg:text-[56px]">
              Real stories. <span className="italic text-[var(--purple-brand)]">Real</span>{" "}
              transformation.
            </h2>
          </div>
          <p className="max-w-sm text-[var(--nature-black)]/60">
            Quiet shifts, lasting change. A few of the lives our community has
            gently rewritten.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => (
            <motion.figure
              key={story.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.1,
              }}
              whileHover={{ y: -4 }}
              className={`glass-surface relative flex flex-col gap-6 rounded-3xl p-7 ${
                index === 1 ? "lg:translate-y-10" : ""
              }`}
            >
              <span
                aria-hidden
                className="font-display absolute right-7 top-4 text-6xl leading-none text-[var(--purple-brand)]/15"
              >
                &quot;
              </span>
              <blockquote className="text-[15.5px] leading-relaxed text-[var(--nature-black)]/80">
                {story.quote}
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-4 border-t border-[var(--purple-brand)]/10 pt-5">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-white/70">
                  <Image
                    src={story.img}
                    alt={story.name}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-[var(--nature-black)]">
                    {story.name}
                  </p>
                  <p className="text-[12px] text-[var(--nature-black)]/55">
                    {story.role}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
