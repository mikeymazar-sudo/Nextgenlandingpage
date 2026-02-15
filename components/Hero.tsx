"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      {/* Floating gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[15%] top-[20%] h-72 w-72 rounded-full bg-brand-blue/15 blur-[100px]"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[10%] top-[30%] h-96 w-96 rounded-full bg-brand-purple/10 blur-[120px]"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] left-[40%] h-64 w-64 rounded-full bg-brand-orange/8 blur-[100px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-1.5 text-sm font-medium text-brand-blue-light">
            <Sparkles className="h-3.5 w-3.5" />
            Coming Soon — Join the Waitlist
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          The Only CRM Built
          <br />
          <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange bg-clip-text text-transparent">
            for Wholesalers
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl"
        >
          Replace your skip tracer, dialer, CRM, deal analyzer, and comps tool
          — all in one platform.{" "}
          <span className="font-semibold text-brand-green">
            Pay only for what you use.
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#waitlist"
            className="group flex items-center gap-2 rounded-full bg-brand-blue px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-blue/25 transition-all hover:bg-brand-blue-dark hover:shadow-xl hover:shadow-brand-blue/30"
          >
            Join the Waitlist
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#analyzer"
            className="flex items-center gap-2 rounded-full border border-white/10 px-8 py-3.5 text-base font-semibold text-slate-300 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white"
          >
            <Sparkles className="h-4 w-4 text-brand-purple" />
            Try Free Deal Analyzer
          </a>
        </motion.div>

        {/* Trust signal */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-sm text-slate-600"
        >
          No credit card required. No monthly fees. Ever.
        </motion.p>
      </div>
    </section>
  );
}
