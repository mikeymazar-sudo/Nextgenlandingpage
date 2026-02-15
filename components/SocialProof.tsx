"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Crown, Zap, MessageCircle } from "lucide-react";
import { earlyAccessPerks, techBadges } from "@/lib/constants";

const iconMap = { Crown, Zap, MessageCircle } as const;

function AnimatedStat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [inView, value, count]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = `${v}${suffix}`;
      }
    });
    return unsubscribe;
  }, [rounded, suffix]);

  return (
    <div className="text-center">
      <p className="font-mono text-4xl font-extrabold text-white sm:text-5xl">
        <span ref={ref}>
          0{suffix}
        </span>
      </p>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="px-4 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Built by Wholesalers.{" "}
            <span className="text-brand-orange">For Wholesalers.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
            We&apos;re active wholesalers who got tired of duct-taping five
            tools together. So we built the platform we wished existed.
          </p>
        </motion.div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
        >
          {techBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-400"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid grid-cols-3 gap-8 rounded-2xl border border-white/5 bg-surface-card p-8 sm:p-12"
        >
          <AnimatedStat value={50} suffix="+" label="Features at launch" />
          <AnimatedStat value={5} suffix="" label="Tools replaced" />
          <AnimatedStat value={0} suffix="" label="Monthly fee" />
        </motion.div>

        {/* Early access perks */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {earlyAccessPerks.map((perk, i) => {
            const Icon = iconMap[perk.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="rounded-2xl border border-white/5 bg-surface-card p-6 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10">
                  <Icon className="h-6 w-6 text-brand-orange" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">
                  {perk.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  {perk.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
