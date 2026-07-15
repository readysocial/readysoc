export type SparkBundle = {
  id: string;
  label: string;
  sparks: number;
  price: number;
  description: string;
  featured?: "popular" | "value";
};

/** Fixed web catalog — not loaded from RevenueCat */
export const SPARK_BUNDLES: SparkBundle[] = [
  {
    id: "starter",
    label: "Starter",
    sparks: 2,
    price: 3000,
    description: "Perfect for trying out Spark features.",
  },
  {
    id: "most-popular",
    label: "Most Popular",
    sparks: 4,
    price: 6000,
    description: "Most chosen by active users this week.",
    featured: "popular",
  },
  {
    id: "best-value",
    label: "Best Value",
    sparks: 6,
    price: 9000,
    description: "Great for growing your listener connections.",
    featured: "value",
  },
  {
    id: "great-savings",
    label: "Great Savings",
    sparks: 10,
    price: 15000,
    description: "Maximum sparks for power users and creators.",
  },
  {
    id: "pro-pack",
    label: "Pro Pack",
    sparks: 20,
    price: 30000,
    description: "Scale your influence to thousands of listeners.",
  },
  {
    id: "mega-plans",
    label: "Mega Plan",
    sparks: 50,
    price: 75000,
    description: "Built for heavy session weeks and teams.",
  },
  {
    id: "unlimited",
    label: "Unlimited",
    sparks: 100,
    price: 150000,
    description: "Top of the range for power booking.",
  },
];

export function formatNaira(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

export function pricePerSpark(bundle: SparkBundle) {
  return Math.round(bundle.price / bundle.sparks);
}
