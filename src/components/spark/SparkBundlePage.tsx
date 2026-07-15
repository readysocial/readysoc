"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { formatNaira, SPARK_BUNDLES } from "../../lib/spark-bundles";
import { apiFetch, ApiError } from "../../lib/api";
import { getToken } from "../../lib/auth";
import SparkBundleCard from "./SparkBundleCard";
import SparkBundleHeader from "./SparkBundleHeader";
import WhyUseSpark from "./WhyUseSpark";

type SparksResponse = {
  message?: string;
  data: { sparks: number };
};

type PaymentInitResponse = {
  message: string;
  data: {
    authorizationUrl: string;
  };
};

export default function SparkBundlePage() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string | null>("most-popular");
  const [balance, setBalance] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPaying, setIsPaying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selected = useMemo(
    () => SPARK_BUNDLES.find((bundle) => bundle.id === selectedId) ?? null,
    [selectedId],
  );

  const loadBalance = useCallback(async () => {
    setError(null);
    setIsLoading(true);

    try {
      if (!getToken()) {
        router.replace("/login?next=/spark-bundle");
        return;
      }

      const sparksResult = await apiFetch<SparksResponse>("/users/sparks");
      setBalance(sparksResult.data?.sparks ?? 0);
    } catch (err) {
      if (err instanceof ApiError && err.status === 401) {
        return;
      }
      const message =
        err instanceof Error
          ? err.message
          : "Unable to load your spark balance. Please try again.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  useEffect(() => {
    loadBalance();
  }, [loadBalance]);

  const handlePay = async () => {
    if (!selected || isPaying) return;

    setError(null);
    setIsPaying(true);

    try {
      const result = await apiFetch<PaymentInitResponse>("/payments", {
        method: "POST",
        body: {
          amount: selected.price,
          description: `Top-up ${selected.sparks} Sparks`,
          metadata: {
            client: "web",
            bundleId: selected.id,
            sparksAmount: selected.sparks,
          },
        },
      });

      const authorizationUrl = result.data?.authorizationUrl;
      if (!authorizationUrl) {
        throw new Error("Payment initialized but no checkout URL was returned.");
      }

      window.location.assign(authorizationUrl);
    } catch (err) {
      if (err instanceof ApiError && err.status === 401) {
        return;
      }
      const message =
        err instanceof Error
          ? err.message
          : "Unable to start payment. Please try again.";
      setError(message);
      setIsPaying(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fffaf8]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(246,83,91,0.12),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(56,189,248,0.1),_transparent_45%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(14,18,27,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,18,27,0.03)_1px,transparent_1px)] [background-size:28px_28px]"
      />

      <div className="relative">
        <SparkBundleHeader balance={balance ?? 0} />

        <div className="mx-auto max-w-6xl px-4 pb-28 pt-8 sm:px-6 sm:pb-32 sm:pt-10">
          <div className="max-w-2xl animate-[sparkFadeUp_500ms_ease-out]">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#f6535b]">
              Ready Social
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#0E121B] sm:text-4xl">
              Choose your Spark bundle
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-[#5A5758] sm:text-base">
              Pick a pack and continue to Paystack. Higher bundles unlock more
              sessions for less per spark.
            </p>
          </div>

          {error ? (
            <p className="mt-6 rounded-xl border border-red-100 bg-red-50 px-3 py-2 text-sm text-red-600">
              {error}
            </p>
          ) : null}

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {SPARK_BUNDLES.map((bundle, index) => (
              <SparkBundleCard
                key={bundle.id}
                bundle={bundle}
                index={index}
                selected={selectedId === bundle.id}
                onSelect={() => setSelectedId(bundle.id)}
              />
            ))}
          </div>

          <div className="mt-14">
            <WhyUseSpark />
          </div>
        </div>

        <div className="fixed inset-x-0 bottom-0 z-30 border-t border-black/8 bg-white/90 px-4 py-3 backdrop-blur-md sm:px-6">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-h-[2.5rem]">
              {selected ? (
                <p className="text-sm text-[#5A5758]">
                  <span className="font-semibold text-[#0E121B]">
                    {selected.label}
                  </span>
                  {" · "}
                  {selected.sparks} Sparks for{" "}
                  <span className="font-semibold text-[#0E121B]">
                    {formatNaira(selected.price)}
                  </span>
                </p>
              ) : (
                <p className="text-sm text-[#99A0AE]">Select a bundle to continue</p>
              )}
              {isLoading ? (
                <p className="text-xs text-[#99A0AE]">Refreshing balance…</p>
              ) : null}
            </div>

            <button
              type="button"
              disabled={!selected || isPaying || isLoading}
              onClick={handlePay}
              className="h-12 w-full rounded-xl bg-[#f6535b] px-6 text-base font-semibold text-white transition-all hover:bg-[#e54a52] hover:shadow-[0_12px_24px_-12px_rgba(246,83,91,0.8)] disabled:cursor-not-allowed disabled:bg-[#f6535b] disabled:opacity-50 sm:w-auto sm:min-w-[240px]"
            >
              {isPaying ? "Redirecting to Paystack..." : "Proceed To Make Payment"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
