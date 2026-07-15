import Link from "next/link";
import { SparkBoltIcon } from "./SparkIcon";

type SparkBundleHeaderProps = {
  balance?: number;
};

export default function SparkBundleHeader({
  balance = 0,
}: SparkBundleHeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-black/5 bg-white/75 px-4 py-3.5 backdrop-blur-md sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold text-[#0E121B] transition-colors hover:text-[#f6535b]"
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Spark Bundle
        </Link>

        <div className="flex items-center gap-2 rounded-full bg-[#eaf6fc] px-3 py-1.5 text-xs font-semibold text-[#1e6a8e] sm:text-sm">
          <span className="text-[#38bdf8]">
            <SparkBoltIcon className="h-4 w-4" />
          </span>
          <span>
            Balance: <span className="tabular-nums">{balance}</span>
          </span>
        </div>
      </div>
    </header>
  );
}
