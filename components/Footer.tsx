import { Building2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface-darker">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                NextGen Realty
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-slate-500">
              The only CRM built for real estate wholesalers. AI-powered deal
              analysis, built-in dialer, and pay-as-you-go pricing.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-sm font-semibold text-white">Product</h4>
            <ul className="mt-3 space-y-2">
              {["Features", "Pricing", "Deal Analyzer"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-slate-500 transition-colors hover:text-slate-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-3 space-y-2">
              {["About", "Contact", "Blog"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-slate-500">
                    {item} <span className="text-slate-600">(Coming soon)</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} NextGen Realty. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
