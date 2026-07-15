import type { SparkBundle } from "../../lib/spark-bundles";
import { formatNaira, pricePerSpark } from "../../lib/spark-bundles";
import { SparkBoltIcon } from "./SparkIcon";

type SparkBundleCardProps = {
  bundle: SparkBundle;
  selected: boolean;
  onSelect: () => void;
  index?: number;
};

export default function SparkBundleCard({
  bundle,
  selected,
  onSelect,
  index = 0,
}: SparkBundleCardProps) {
  const featuredLabel =
    bundle.featured === "popular"
      ? "Popular"
      : bundle.featured === "value"
        ? "Best value"
        : null;

  return (
    <button
      type="button"
      onClick={onSelect}
      style={{ animationDelay: `${index * 45}ms` }}
      className={`spark-card group relative flex h-full w-full flex-col rounded-[1.35rem] border p-5 text-left transition-all duration-300 ease-out sm:p-6 ${
        selected
          ? "border-[#f6535b] bg-white shadow-[0_18px_40px_-24px_rgba(246,83,91,0.55)] ring-2 ring-[#f6535b]/25"
          : "border-black/8 bg-white/80 shadow-[0_10px_30px_-22px_rgba(15,23,42,0.35)] hover:-translate-y-1 hover:border-[#f6535b]/35 hover:bg-white hover:shadow-[0_18px_36px_-24px_rgba(15,23,42,0.4)]"
      }`}
      aria-pressed={selected}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide ${
            featuredLabel
              ? "bg-[#f6535b] text-white"
              : "bg-[#fff1e8] text-[#b45309]"
          }`}
        >
          {featuredLabel || bundle.label}
        </span>

        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors ${
            selected
              ? "border-[#f6535b] bg-[#f6535b] text-white"
              : "border-black/15 bg-white text-transparent group-hover:border-[#f6535b]/40"
          }`}
          aria-hidden="true"
        >
          <svg className="h-3.5 w-3.5" viewBox="0 0 12 12" fill="none">
            <path
              d="M2.5 6.2 4.8 8.5 9.5 3.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105 ${
            selected
              ? "bg-gradient-to-br from-[#ffb4b8] to-[#f6535b] text-white"
              : "bg-gradient-to-br from-[#ffe8dc] to-[#ffd0c0] text-[#f6535b]"
          }`}
        >
          <SparkBoltIcon className="h-6 w-6" />
        </div>
        <div>
          <p className="text-2xl font-bold tracking-tight text-[#0E121B]">
            {bundle.sparks}
            <span className="ml-1 text-base font-semibold text-[#5A5758]">
              Spark{bundle.sparks !== 1 ? "s" : ""}
            </span>
          </p>
          <p className="mt-0.5 text-xs font-medium text-[#99A0AE]">
            {formatNaira(pricePerSpark(bundle))} / spark
          </p>
        </div>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-[#5A5758]">
        {bundle.description}
      </p>

      <div className="mt-5 flex items-end justify-between gap-3 border-t border-black/5 pt-4">
        <p className="text-[1.65rem] font-bold tracking-tight text-[#0E121B]">
          {formatNaira(bundle.price)}
        </p>
        <span
          className={`text-xs font-semibold transition-colors ${
            selected ? "text-[#f6535b]" : "text-[#99A0AE] group-hover:text-[#f6535b]"
          }`}
        >
          {selected ? "Selected" : "Select"}
        </span>
      </div>
    </button>
  );
}
