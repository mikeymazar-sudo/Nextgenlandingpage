"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Brain,
  Phone,
  UserSearch,
  MessageSquare,
  MapPin,
} from "lucide-react";
import { features } from "@/lib/constants";

const iconMap = {
  LayoutDashboard,
  Brain,
  Phone,
  UserSearch,
  MessageSquare,
  MapPin,
} as const;

const colorMap = {
  blue: {
    bg: "bg-brand-blue/10",
    text: "text-brand-blue",
    border: "hover:border-brand-blue/30",
    shadow: "hover:shadow-brand-blue/5",
  },
  purple: {
    bg: "bg-brand-purple/10",
    text: "text-brand-purple",
    border: "hover:border-brand-purple/30",
    shadow: "hover:shadow-brand-purple/5",
  },
  orange: {
    bg: "bg-brand-orange/10",
    text: "text-brand-orange",
    border: "hover:border-brand-orange/30",
    shadow: "hover:shadow-brand-orange/5",
  },
  green: {
    bg: "bg-brand-green/10",
    text: "text-brand-green",
    border: "hover:border-brand-green/30",
    shadow: "hover:shadow-brand-green/5",
  },
};

export default function Features() {
  return (
    <section id="features" className="px-4 py-20 md:py-32">
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
            Everything You Need.{" "}
            <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
              Nothing You Don&apos;t.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Six powerful tools, one platform, zero monthly fees. Built
            specifically for how wholesalers actually work.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            const colors = colorMap[feature.color];
            return (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.08 * i }}
                className={`group rounded-2xl border border-white/5 bg-surface-card p-6 transition-all duration-300 hover:shadow-lg ${colors.border} ${colors.shadow}`}
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${colors.bg}`}
                >
                  <Icon className={`h-5 w-5 ${colors.text}`} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
