"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { X, Check, Zap } from "lucide-react";
import { competitorPains, nextgenBenefits } from "@/lib/constants";

function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
}: {
  target: number;
  prefix?: string;
  suffix?: string;
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
      animate(count, target, { duration: 2, ease: "easeOut" });
    }
  }, [inView, target, count]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${v.toLocaleString()}${suffix}`;
      }
    });
    return unsubscribe;
  }, [rounded, prefix, suffix]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="px-4 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Pay for Results.{" "}
            <span className="bg-gradient-to-r from-brand-green to-brand-blue bg-clip-text text-transparent">
              Not Subscriptions.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Why pay $200+/month when you&apos;re between deals? With NextGen,
            you only pay when you use it.
          </p>
        </motion.div>

        {/* Comparison cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {/* Competitor card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/5 bg-surface-card p-8"
          >
            <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
              The Old Way
            </p>
            <div className="mt-4">
              <span className="text-4xl font-extrabold text-slate-500 line-through decoration-red-500/50">
                $200–500+
              </span>
              <span className="ml-2 text-lg text-slate-600">/month</span>
            </div>
            <p className="mt-2 text-sm text-slate-500">
              Traditional wholesaling CRMs
            </p>
            <ul className="mt-8 space-y-3">
              {competitorPains.map((pain) => (
                <li key={pain} className="flex items-start gap-3">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  <span className="text-sm text-slate-400">{pain}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* NextGen card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative rounded-2xl border-2 border-brand-blue/30 bg-gradient-to-b from-brand-blue/5 to-surface-card p-8 shadow-xl shadow-brand-blue/5"
          >
            {/* Badge */}
            <div className="absolute -top-3 right-6 rounded-full bg-brand-blue px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Best Value
            </div>

            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-brand-blue" />
              <p className="text-sm font-medium uppercase tracking-wider text-brand-blue">
                NextGen Realty
              </p>
            </div>
            <div className="mt-4">
              <span className="text-5xl font-extrabold text-white">$0</span>
              <span className="ml-2 text-lg text-slate-400">/month</span>
            </div>
            <p className="mt-2 text-sm text-brand-green font-medium">
              Only pay for what you use
            </p>
            <ul className="mt-8 space-y-3">
              {nextgenBenefits.map((benefit) => (
                <li key={benefit.text} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  <span
                    className={`text-sm ${
                      benefit.bold
                        ? "font-semibold text-white"
                        : "text-slate-300"
                    }`}
                  >
                    {benefit.text}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#waitlist"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-blue-dark hover:shadow-lg hover:shadow-brand-blue/25"
            >
              Lock in Founding Member Rates
            </a>
          </motion.div>
        </div>

        {/* Savings callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-2xl font-bold text-white sm:text-3xl">
            Wholesalers save an average of{" "}
            <span className="font-mono text-brand-green">
              $<AnimatedCounter target={2400} suffix="+" />
            </span>{" "}
            per year
          </p>
        </motion.div>
      </div>
    </section>
  );
}
