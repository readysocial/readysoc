"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { apiFetch, ApiError } from "../../lib/api";
import { getToken } from "../../lib/auth";
import SparkBundleHeader from "./SparkBundleHeader";
import ConfettiBurst from "./ConfettiBurst";
import { SparkBoltIcon } from "./SparkIcon";

type VerifyResponse = {
  message: string;
  data?: {
    payment?: {
      status: string;
      amount?: number;
      metadata?: { sparksAmount?: number };
    };
    status?: string;
    message?: string;
  };
};

type SparksResponse = {
  data: { sparks: number };
};

export default function SparkBundleResultClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const reference = useMemo(() => {
    const value =
      searchParams.get("reference")?.trim() ||
      searchParams.get("trxref")?.trim() ||
      "";
    return value;
  }, [searchParams]);

  const [status, setStatus] = useState<"loading" | "success" | "failed">(
    "loading",
  );
  const [message, setMessage] = useState("Verifying your payment...");
  const [balance, setBalance] = useState<number | null>(null);
  const [sparksAdded, setSparksAdded] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      if (!getToken()) {
        const next = encodeURIComponent(
          `/spark-bundle/result?reference=${encodeURIComponent(reference)}`,
        );
        router.replace(`/login?next=${next}`);
        return;
      }

      if (!reference) {
        setStatus("failed");
        setMessage("Missing payment reference.");
        return;
      }

      try {
        const result = await apiFetch<VerifyResponse>(
          `/payments/verify/${encodeURIComponent(reference)}`,
        );

        if (cancelled) return;

        const paymentStatus =
          result.data?.payment?.status || result.data?.status || "";
        const isSuccess =
          paymentStatus === "completed" ||
          paymentStatus === "successful" ||
          /success/i.test(result.message || "");

        if (isSuccess) {
          setStatus("success");
          setMessage("Your Sparks have been added to your wallet.");
          setSparksAdded(result.data?.payment?.metadata?.sparksAmount ?? null);
        } else if (paymentStatus === "pending") {
          setStatus("failed");
          setMessage(
            "Payment is still processing. Refresh this page in a moment.",
          );
        } else {
          setStatus("failed");
          setMessage(
            result.data?.message ||
              result.message ||
              "Payment could not be verified.",
          );
        }

        try {
          const sparks = await apiFetch<SparksResponse>("/users/sparks");
          if (!cancelled) {
            setBalance(sparks.data?.sparks ?? 0);
          }
        } catch {
          // balance refresh is best-effort after verify
        }
      } catch (err) {
        if (cancelled) return;
        if (err instanceof ApiError && err.status === 401) return;
        setStatus("failed");
        setMessage(
          err instanceof Error
            ? err.message
            : "Payment verification failed. Please try again.",
        );
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [reference, router]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fffaf8]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(246,83,91,0.14),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(56,189,248,0.12),_transparent_45%)]"
      />

      <ConfettiBurst active={status === "success"} />

      <div className="relative">
        <SparkBundleHeader balance={balance ?? 0} />

        <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-16 text-center sm:py-20">
          {status === "loading" ? (
            <>
              <div className="mb-5 h-12 w-12 animate-spin rounded-full border-4 border-[#f6535b]/20 border-t-[#f6535b]" />
              <h1 className="text-3xl font-bold tracking-tight text-[#0E121B]">
                Verifying payment
              </h1>
              <p className="mt-3 text-sm text-[#5A5758]">{message}</p>
            </>
          ) : null}

          {status === "success" ? (
            <>
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#ffb4b8] to-[#f6535b] text-white shadow-[0_18px_40px_-20px_rgba(246,83,91,0.8)]">
                <SparkBoltIcon className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-[#0E121B]">
                Payment successful
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-[#5A5758]">
                {message}
              </p>
              {sparksAdded != null ? (
                <p className="mt-5 rounded-full bg-[#eaf6fc] px-4 py-2 text-sm font-semibold text-[#1e6a8e]">
                  +{sparksAdded} Spark{sparksAdded === 1 ? "" : "s"} added
                </p>
              ) : null}
              {balance != null ? (
                <p className="mt-3 text-sm text-[#5A5758]">
                  New balance:{" "}
                  <span className="font-semibold text-[#0E121B]">{balance}</span>
                </p>
              ) : null}
            </>
          ) : null}

          {status === "failed" ? (
            <>
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#fee2e2] text-[#f6535b]">
                <span className="text-3xl font-bold">!</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-[#0E121B]">
                Payment incomplete
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-[#5A5758]">
                {message}
              </p>
            </>
          ) : null}

          {reference ? (
            <p className="mt-6 max-w-full truncate text-xs text-[#99A0AE]">
              Ref: {reference}
            </p>
          ) : null}

          <Link
            href="/spark-bundle"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-[#f6535b] px-6 text-base font-semibold text-white transition-colors hover:bg-[#e54a52]"
          >
            Back to Spark Bundles
          </Link>
        </div>
      </div>
    </div>
  );
}
