"use client";

import { motion } from "motion/react";
import { Users, Sparkles, ArrowRight } from "lucide-react";
import { SmileArc } from "./decor";
import Masonry from "../ui/Masonry";

const communityImages = [
  {
    id: "1",
    img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&auto=format&fit=crop&q=80",
    url: "https://www.instagram.com/happinesscoachingacademy",
    height: 520,
  },
  {
    id: "2",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80",
    url: "https://www.instagram.com/happinesscoachingacademy",
    height: 380,
  },
  {
    id: "3",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80",
    url: "https://www.instagram.com/happinesscoachingacademy",
    height: 580,
  },
  {
    id: "4",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
    url: "https://www.instagram.com/happinesscoachingacademy",
    height: 340,
  },
  {
    id: "5",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
    url: "https://www.instagram.com/happinesscoachingacademy",
    height: 540,
  },
  {
    id: "6",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80",
    url: "https://www.instagram.com/happinesscoachingacademy",
    height: 480,
  },
  {
    id: "7",
    img: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=600&auto=format&fit=crop&q=80",
    url: "https://www.instagram.com/happinesscoachingacademy",
    height: 410,
  },
  {
    id: "8",
    img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&auto=format&fit=crop&q=80",
    url: "https://www.instagram.com/happinesscoachingacademy",
    height: 390,
  },
];

export function CommunitySection() {
  return (
    <section id="community" className="relative px-4 py-24 md:py-32 overflow-hidden bg-gradient-to-b from-transparent via-[var(--cream-deep)]/20 to-transparent">
      {/* Blended Glowing Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Mustard Yellow Glow Orb */}
        <div
          className="absolute -top-[10%] right-[10%] h-[500px] w-[500px] rounded-full opacity-[0.22] blur-[110px] animate-aurora"
          style={{
            background: "radial-gradient(circle, var(--mustard) 0%, transparent 70%)",
          }}
        />
        {/* Soft Purple Glow Orb */}
        <div
          className="absolute -bottom-[10%] left-[5%] h-[550px] w-[550px] rounded-full opacity-[0.18] blur-[120px] animate-aurora-slow"
          style={{
            background: "radial-gradient(circle, var(--purple-brand) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header Elements */}
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-1.5 rounded-full border border-[var(--purple-brand)]/20 bg-[var(--purple-brand)]/5 px-4 py-1.5 text-[11px] font-bold tracking-[0.22em] text-[var(--purple-brand)] uppercase"
          >
            <Users className="h-3 w-3 text-[var(--purple-brand)] fill-[var(--purple-brand)]/15" />
            Community
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="font-display mt-6 text-balance text-4xl font-bold leading-[1.05] text-[var(--nature-black)] md:text-5xl lg:text-[62px]"
          >
            A Thriving Community<br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-[var(--purple-brand)] via-[#C040A0] to-[var(--mustard)] bg-clip-text text-transparent">
                Growing Together
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
            Real people. Real connections. Real transformation. Become a part of a supportive community that inspires, heals, and uplifts every step of your journey.
          </motion.p>
        </div>

        {/* Masonry Layout Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[400px] w-full"
        >
          <Masonry
            items={communityImages}
            ease="power3.out"
            duration={0.7}
            stagger={0.06}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.97}
            blurToFocus={true}
            colorShiftOnHover={true}
          />
        </motion.div>

        {/* Bottom Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--purple-brand)]/5 border border-[var(--purple-brand)]/15 px-7 py-3.5 text-[14px] font-bold text-[var(--purple-brand)] transition-all hover:bg-[var(--purple-brand)]/10 hover:scale-[1.02]"
          >
            <Sparkles className="h-4.5 w-4.5 text-[var(--purple-brand)] animate-pulse" />
            Join Our Vibrant Community
            <ArrowRight className="h-4 w-4 ml-1 stroke-[2.2]" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
