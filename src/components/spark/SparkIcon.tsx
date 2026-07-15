export function SparkBoltIcon({
  className = "h-6 w-6",
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 2 4 14h7l-1 8 10-14h-7l0-6z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SparkIconBox() {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#ffe8dc] to-[#ffd4c4] text-[#f6535b]">
      <SparkBoltIcon className="h-7 w-7" />
    </div>
  );
}
