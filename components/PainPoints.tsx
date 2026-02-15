"use client";

import { motion } from "framer-motion";
import {
  Search,
  Phone,
  Table,
  Calculator,
  Map,
  Building2,
  X,
  Check,
} from "lucide-react";
import { painPoints } from "@/lib/constants";

const iconMap = {
  Search,
  Phone,
  Table,
  Calculator,
  Map,
} as const;

export default function PainPoints() {
  return (
    <section className="relative px-4 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Stop Juggling{" "}
              <span className="text-brand-orange">5 Different Tools</span>
            </h2>
            <p className="mt-5 text-lg text-slate-400">
              Most wholesalers waste hours switching between a skip tracer, power
              dialer, spreadsheet CRM, deal analyzer, and comps platform. You're
              paying for five subscriptions and nothing talks to each other.
            </p>
            <div className="mt-8 flex items-center gap-3 rounded-xl border border-brand-green/20 bg-brand-green/5 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-green/20">
                <Check className="h-5 w-5 text-brand-green" />
              </div>
              <p className="text-sm font-medium text-brand-green">
                NextGen Realty replaces all 5 tools — saving you{" "}
                <span className="font-bold">$300+/month</span>
              </p>
            </div>
          </motion.div>

          {/* Right: Tool cards visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Scattered tool cards */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {painPoints.map((point, i) => {
                const Icon = iconMap[point.icon as keyof typeof iconMap];
                return (
                  <motion.div
                    key={point.tool}
                    initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                    className="relative rounded-xl border border-red-500/20 bg-surface-card p-4 opacity-60"
                  >
                    <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500">
                      <X className="h-3 w-3 text-white" />
                    </div>
                    <Icon className="h-5 w-5 text-slate-500" />
                    <p className="mt-2 text-xs font-medium text-slate-400 line-through">
                      {point.tool}
                    </p>
                    <p className="text-xs text-red-400">{point.cost}</p>
                  </motion.div>
                );
              })}

              {/* NextGen card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="rounded-xl border border-brand-blue/30 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 p-4 shadow-lg shadow-brand-blue/10"
              >
                <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-green">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <Building2 className="h-5 w-5 text-brand-blue" />
                <p className="mt-2 text-xs font-semibold text-white">
                  NextGen Realty
                </p>
                <p className="text-xs text-brand-green">All-in-one</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
