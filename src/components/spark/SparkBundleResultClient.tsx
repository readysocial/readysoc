"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { apiFetch, ApiError, getUserFacingMessage } from "../../lib/api";
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

  const [status, setStatus] = useState<
    "loading" | "success" | "pending" | "failed"
  >("loading");
  const [failedTitle, setFailedTitle] = useState("Payment incomplete");
  const [message, setMessage] = useState("Verifying your payment...");
  const [balance, setBalance] = useState<number | null>(null);
  const [sparksAdded, setSparksAdded] = useState<number | null>(null);
  // Bumped by "Check again" to re-run verification.
  const [checkCount, setCheckCount] = useState(0);

  const showFailure = (title: string, text: string) => {
    setFailedTitle(title);
    setMessage(text);
    setStatus("failed");
  };

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      setStatus("loading");
      setMessage("Verifying your payment...");

      if (!getToken()) {
        const next = encodeURIComponent(
          `/spark-bundle/result?reference=${encodeURIComponent(reference)}`,
        );
        router.replace(`/login?next=${next}`);
        return;
      }

      if (!reference) {
        showFailure("Payment incomplete", "Missing payment reference.");
        return;
      }

      try {
        const result = await apiFetch<VerifyResponse>(
          `/payments/verify/${encodeURIComponent(reference)}`,
        );

        if (cancelled) return;

        // Decide from the payment status only; the message text is not a
        // reliable success signal.
        const paymentStatus =
          result.data?.payment?.status || result.data?.status || "";

        if (paymentStatus === "completed" || paymentStatus === "successful") {
          setStatus("success");
          setMessage("Your Sparks have been added to your wallet.");
          setSparksAdded(result.data?.payment?.metadata?.sparksAmount ?? null);
        } else if (paymentStatus === "pending") {
          setStatus("pending");
          setMessage(
            "We're still confirming your payment with the bank. This usually takes under a minute. If you were charged, your Sparks will be added automatically.",
          );
        } else if (paymentStatus === "cancelled") {
          showFailure(
            "Payment cancelled",
            "The payment was cancelled, so no Sparks were added. You can start a new one any time.",
          );
        } else if (paymentStatus === "failed") {
          showFailure(
            "Payment failed",
            "The payment didn't go through, so no Sparks were added. You can try again with the same or a different card.",
          );
        } else {
          showFailure(
            "Payment incomplete",
            "We couldn't confirm this payment. If you were charged, contact support with the reference below.",
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
        if (err instanceof ApiError && err.status === 404) {
          showFailure(
            "Payment not found",
            "We couldn't find this payment on your account. Make sure you're signed in with the account you paid from.",
          );
          return;
        }
        showFailure(
          "Payment incomplete",
          getUserFacingMessage(
            err,
            "Payment verification failed. Please try again.",
          ),
        );
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [reference, router, checkCount]);

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

          {status === "pending" ? (
            <>
              <div className="mb-5 h-12 w-12 animate-spin rounded-full border-4 border-[#1e6a8e]/20 border-t-[#1e6a8e]" />
              <h1 className="text-3xl font-bold tracking-tight text-[#0E121B]">
                Payment processing
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-[#5A5758]">
                {message}
              </p>
              <button
                type="button"
                onClick={() => setCheckCount((n) => n + 1)}
                className="mt-6 inline-flex h-11 items-center justify-center rounded-xl border border-[#1e6a8e] px-5 text-sm font-semibold text-[#1e6a8e] transition-colors hover:bg-[#eaf6fc]"
              >
                Check again
              </button>
            </>
          ) : null}

          {status === "failed" ? (
            <>
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#fee2e2] text-[#f6535b]">
                <span className="text-3xl font-bold">!</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-[#0E121B]">
                {failedTitle}
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
