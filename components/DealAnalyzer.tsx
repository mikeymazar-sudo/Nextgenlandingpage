"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Sparkles, ArrowRight, DollarSign } from "lucide-react";
import {
  analyzeDeal,
  formatCurrency,
  parseCurrencyInput,
  type DealAnalysis,
} from "@/lib/dealAnalyzer";

export default function DealAnalyzer() {
  const [purchasePrice, setPurchasePrice] = useState("");
  const [arv, setArv] = useState("");
  const [repairs, setRepairs] = useState("");
  const [result, setResult] = useState<DealAnalysis | null>(null);
  const [hasAnalyzed, setHasAnalyzed] = useState(false);

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    const pp = parseCurrencyInput(purchasePrice);
    const arvVal = parseCurrencyInput(arv);
    const repairVal = parseCurrencyInput(repairs);

    if (pp > 0 && arvVal > 0) {
      setResult(analyzeDeal(pp, arvVal, repairVal));
      setHasAnalyzed(true);
    }
  };

  const handleInputChange = (
    value: string,
    setter: (v: string) => void
  ) => {
    const numeric = value.replace(/[^0-9]/g, "");
    if (numeric === "") {
      setter("");
      return;
    }
    setter(Number(numeric).toLocaleString());
  };

  return (
    <section id="analyzer" className="px-4 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-purple/10">
              <Brain className="h-6 w-6 text-brand-purple" />
            </div>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Free Deal Analyzer
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Use the 70% rule to instantly calculate your Maximum Allowable
              Offer, estimated profit, and get a deal grade. No signup required.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-purple/20 text-xs font-bold text-brand-purple">
                  1
                </div>
                <p className="text-sm text-slate-400">
                  <span className="font-medium text-white">Enter your numbers</span>{" "}
                  — purchase price, ARV, and repair estimate
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-purple/20 text-xs font-bold text-brand-purple">
                  2
                </div>
                <p className="text-sm text-slate-400">
                  <span className="font-medium text-white">
                    Get instant results
                  </span>{" "}
                  — MAO, profit, and a letter grade from A to F
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-purple/20 text-xs font-bold text-brand-purple">
                  3
                </div>
                <p className="text-sm text-slate-400">
                  <span className="font-medium text-white">Make smarter offers</span>{" "}
                  — know your numbers before you negotiate
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl border border-brand-purple/20 bg-surface-card p-6 shadow-xl shadow-brand-purple/5 sm:p-8">
              <form onSubmit={handleAnalyze} className="space-y-5">
                {/* Purchase Price */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-300">
                    Purchase Price (Asking)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                    <input
                      type="text"
                      value={purchasePrice}
                      onChange={(e) =>
                        handleInputChange(e.target.value, setPurchasePrice)
                      }
                      placeholder="150,000"
                      className="w-full rounded-xl border border-white/10 bg-surface-darker py-3 pl-9 pr-4 font-mono text-white placeholder:text-slate-600 focus:border-brand-purple/50 focus:outline-none focus:ring-2 focus:ring-brand-purple/20"
                    />
                  </div>
                </div>

                {/* ARV */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-300">
                    After Repair Value (ARV)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                    <input
                      type="text"
                      value={arv}
                      onChange={(e) =>
                        handleInputChange(e.target.value, setArv)
                      }
                      placeholder="250,000"
                      className="w-full rounded-xl border border-white/10 bg-surface-darker py-3 pl-9 pr-4 font-mono text-white placeholder:text-slate-600 focus:border-brand-purple/50 focus:outline-none focus:ring-2 focus:ring-brand-purple/20"
                    />
                  </div>
                </div>

                {/* Repairs */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-300">
                    Estimated Repairs
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                    <input
                      type="text"
                      value={repairs}
                      onChange={(e) =>
                        handleInputChange(e.target.value, setRepairs)
                      }
                      placeholder="30,000"
                      className="w-full rounded-xl border border-white/10 bg-surface-darker py-3 pl-9 pr-4 font-mono text-white placeholder:text-slate-600 focus:border-brand-purple/50 focus:outline-none focus:ring-2 focus:ring-brand-purple/20"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-purple py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-purple/90 hover:shadow-lg hover:shadow-brand-purple/25"
                >
                  <Sparkles className="h-4 w-4" />
                  Analyze Deal
                </button>
              </form>

              {/* Results */}
              <AnimatePresence>
                {hasAnalyzed && result && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 space-y-4 border-t border-white/10 pt-6">
                      {/* Grade + MAO row */}
                      <div className="flex items-center gap-4">
                        <div
                          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-2xl font-black"
                          style={{
                            backgroundColor: result.gradeColor + "20",
                            color: result.gradeColor,
                          }}
                        >
                          {result.grade}
                        </div>
                        <div>
                          <p className="text-xs font-medium text-slate-500">
                            Maximum Allowable Offer
                          </p>
                          <p className="font-mono text-2xl font-bold text-white">
                            {formatCurrency(result.mao)}
                          </p>
                        </div>
                      </div>

                      {/* Profit */}
                      <div className="flex items-center justify-between rounded-xl bg-surface-darker p-4">
                        <span className="text-sm text-slate-400">
                          Estimated Profit
                        </span>
                        <span
                          className="font-mono text-lg font-bold"
                          style={{
                            color:
                              result.profit > 0 ? "#22c55e" : "#ef4444",
                          }}
                        >
                          {formatCurrency(result.profit)}
                        </span>
                      </div>

                      {/* Verdict */}
                      <p className="text-sm text-slate-300">{result.verdict}</p>

                      {/* Upsell */}
                      <a
                        href="#waitlist"
                        className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-brand-blue/20 bg-brand-blue/5 py-3 text-sm font-medium text-brand-blue-light transition-all hover:bg-brand-blue/10"
                      >
                        Want AI analysis on every deal? Join the waitlist
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
