export interface DealAnalysis {
  mao: number;
  profit: number;
  grade: "A" | "B" | "C" | "D" | "F";
  gradeColor: string;
  verdict: string;
  isGoodDeal: boolean;
}

export function analyzeDeal(
  purchasePrice: number,
  arv: number,
  repairCost: number
): DealAnalysis {
  const mao = arv * 0.7 - repairCost;
  const profit = arv - purchasePrice - repairCost;
  const profitMargin = arv > 0 ? (profit / arv) * 100 : 0;
  const maoSpread = mao - purchasePrice;

  let grade: DealAnalysis["grade"];
  let gradeColor: string;
  let verdict: string;

  if (purchasePrice <= mao * 0.85 && profitMargin >= 25) {
    grade = "A";
    gradeColor = "#22c55e";
    verdict = `Home run! You're $${Math.abs(Math.round(maoSpread)).toLocaleString()} below MAO with ${profitMargin.toFixed(0)}% margins.`;
  } else if (purchasePrice <= mao && profitMargin >= 15) {
    grade = "B";
    gradeColor = "#84cc16";
    verdict = `Solid deal. At or below MAO with healthy ${profitMargin.toFixed(0)}% profit margins.`;
  } else if (purchasePrice <= mao * 1.05 && profitMargin >= 10) {
    grade = "C";
    gradeColor = "#f59e0b";
    verdict = `Tight margins. Negotiate harder or double-check your repair numbers.`;
  } else if (purchasePrice <= mao * 1.15 && profitMargin > 0) {
    grade = "D";
    gradeColor = "#f97316";
    verdict = `Risky. Asking price is $${Math.abs(Math.round(maoSpread)).toLocaleString()} over MAO. Proceed with caution.`;
  } else {
    grade = "F";
    gradeColor = "#ef4444";
    verdict = `Walk away. No profitable margin at this price point.`;
  }

  return {
    mao: Math.round(mao),
    profit: Math.round(profit),
    grade,
    gradeColor,
    verdict,
    isGoodDeal: purchasePrice <= mao,
  };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function parseCurrencyInput(value: string): number {
  return Number(value.replace(/[^0-9.-]/g, "")) || 0;
}
