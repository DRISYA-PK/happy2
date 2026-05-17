"use client";

import { motion } from "motion/react";
import { Compass, Heart, TrendingUp, Users } from "lucide-react";
import { SmileArc } from "./decor";

const values = [
  {
    title: "Self Awareness",
    desc: "Helping individuals understand emotions, thoughts, and behavioral patterns with clarity.",
    icon: Compass,
    tint: "from-[#FFCE1B]/20 to-transparent",
    borderHover: "group-hover:border-[var(--mustard)]/40",
  },
  {
    title: "Emotional Healing",
    desc: "Creating safe spaces for emotional healing, release, and transformation.",
    icon: Heart,
    tint: "from-[#DCC7E8]/35 to-transparent",
    borderHover: "group-hover:border-[var(--purple-brand)]/35",
  },
  {
    title: "Growth Mindset",
    desc: "Empowering people to build resilience, confidence, and lifelong growth habits.",
    icon: TrendingUp,
    tint: "from-[#F5E7B2]/30 to-transparent",
    borderHover: "group-hover:border-[var(--mustard)]/30",
  },
  {
    title: "Human Connection",
    desc: "Encouraging empathy, communication, listening, and meaningful relationships.",
    icon: Users,
    tint: "from-[#FCFAFF]/60 to-transparent",
    borderHover: "group-hover:border-[var(--purple-brand)]/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function CoreValuesSection() {
  return (
    <section id="core-values" className="relative px-4 py-24 md:py-32 overflow-hidden bg-gradient-to-b from-transparent via-[var(--cream-deep)]/25 to-transparent">
      {/* Immersive Blended Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Warm Yellow Glow */}
        <div
          className="absolute -top-[10%] left-[15%] h-[450px] w-[450px] rounded-full opacity-[0.25] blur-[110px] animate-aurora-slow"
          style={{
            background: "radial-gradient(circle, var(--mustard) 0%, transparent 70%)",
          }}
        />
        {/* Subtle Warm Purple Glow */}
        <div
          className="absolute -bottom-[15%] right-[10%] h-[550px] w-[550px] rounded-full opacity-[0.2] blur-[120px] animate-aurora"
          style={{
            background: "radial-gradient(circle, var(--purple-brand) 0%, transparent 75%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-[12px] font-bold uppercase tracking-[0.22em] text-[var(--purple-brand)]/80 bg-[var(--purple-brand)]/5 px-4 py-1.5 rounded-full inline-flex border border-[var(--purple-brand)]/10"
          >
            Our Core Values
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="font-display mt-6 text-balance text-4xl font-bold leading-[1.05] text-[var(--nature-black)] md:text-5xl lg:text-[62px]"
          >
            The Foundation Behind<br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-[var(--purple-brand)] via-[#C040A0] to-[var(--mustard)] bg-clip-text text-transparent">
                Every Transformation
              </span>
              <SmileArc className="absolute -bottom-2.5 left-0 h-4 w-full text-[var(--mustard)]" strokeWidth={2.6} />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="mt-8 text-[var(--nature-black)]/65 md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Happiness is not a matter of chance—it is a skill that can be consciously learned through deep emotional awareness, somatic healing, authentic communication, and intentional growth.
          </motion.p>
        </div>

        {/* Staggered Grid Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {values.map((val, index) => {
            const IconComponent = val.icon;
            return (
              <motion.article
                key={val.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.012 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={`glass-surface group relative overflow-hidden rounded-[32px] p-8 border border-white/50 hover:bg-white/60 transition-all duration-500 hover:shadow-[0_20px_50px_-20px_rgba(128,0,128,0.15)] ${val.borderHover}`}
              >
                {/* Glow Backdrop that intensifies on hover */}
                <div
                  className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br ${val.tint} opacity-40 blur-xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-90`}
                />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Floating Lucide Icon Container */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 text-[var(--purple-brand)] shadow-[0_6px_18px_-8px_rgba(128,0,128,0.3)] ring-1 ring-white/65 transition-transform duration-300 group-hover:scale-110">
                      <IconComponent className="h-5 w-5 stroke-[2]" />
                    </div>

                    <h3 className="font-display mt-8 text-2xl font-bold tracking-tight text-[var(--nature-black)] group-hover:text-[var(--purple-brand)] transition-colors duration-300">
                      {val.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-[14.5px] leading-relaxed text-[var(--nature-black)]/60">
                    {val.desc}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
