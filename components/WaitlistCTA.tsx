"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Mail } from "lucide-react";

export default function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes("@")) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="waitlist"
      className="relative overflow-hidden px-4 py-20 md:py-32"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-surface-darker to-brand-purple/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-blue/10 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Transform Your
            <br />
            Wholesaling Business?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-slate-400">
            Join hundreds of wholesalers on the waitlist. Be first to get access
            and lock in founding member pricing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10"
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col gap-3 sm:flex-row sm:gap-0"
              >
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full rounded-xl border border-white/10 bg-surface-card py-4 pl-11 pr-4 text-white placeholder:text-slate-500 focus:border-brand-blue/50 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 sm:rounded-r-none sm:border-r-0"
                  />
                </div>
                <button
                  type="submit"
                  className="group flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-brand-blue-dark sm:rounded-l-none"
                >
                  Join the Waitlist
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/20">
                  <Check className="h-8 w-8 text-brand-green" />
                </div>
                <div>
                  <p className="text-xl font-bold text-white">
                    You&apos;re on the list!
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    We&apos;ll email you when NextGen Realty is ready to launch.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {!submitted && (
            <p className="mt-4 text-xs text-slate-600">
              No spam. No credit card. Unsubscribe anytime. We respect your
              inbox.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
