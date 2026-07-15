"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AuthPageShell from "./AuthPageShell";
import FormField from "./FormField";
import OrDivider from "./OrDivider";
import { PRIMARY } from "./constants";
import { GoogleIcon, MailIcon, UserIcon } from "./icons";
import PasswordField from "../PasswordField";
import { apiFetch, ApiError } from "../../lib/api";
import { setToken } from "../../lib/auth";

type SignupResponse = {
  message: string;
  accessToken: string;
};

function safeNextPath(next: string | null): string {
  if (!next || !next.startsWith("/") || next.startsWith("//")) {
    return "/spark-bundle";
  }
  return next;
}

function buildAnonymousName(fullName: string, email: string): string {
  const base =
    fullName
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "")
      .slice(0, 18) ||
    email
      .split("@")[0]
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .slice(0, 18) ||
    "user";

  const suffix = Math.random().toString(36).slice(2, 6);
  return `${base}_${suffix}`;
}

export default function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = useMemo(
    () => safeNextPath(searchParams.get("next")),
    [searchParams],
  );

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const fullName = String(formData.get("fullName") || "").trim();
    const email = String(formData.get("email") || "")
      .trim()
      .toLowerCase();
    const password = String(formData.get("password") || "");

    const nameParts = fullName.split(/\s+/).filter(Boolean);
    const firstName = nameParts[0] || "User";
    const lastName = nameParts.slice(1).join(" ") || "Ready";

    try {
      const result = await apiFetch<SignupResponse>("/users", {
        method: "POST",
        auth: false,
        body: {
          email,
          password,
          firstName,
          lastName,
          anonymousName: buildAnonymousName(fullName, email),
        },
      });

      if (!result.accessToken) {
        throw new Error("Signup succeeded but no access token was returned.");
      }

      setToken(result.accessToken);
      router.replace(nextPath);
    } catch (err) {
      const message =
        err instanceof ApiError
          ? err.message
          : err instanceof Error
            ? err.message
            : "Unable to sign up. Please try again.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthPageShell
      title="Set Up Your Profile"
      subtitle="Enter your details to register"
    >
      <form
        className="mt-10 flex w-full flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <FormField
          label="Full name"
          id="fullName"
          name="fullName"
          placeholder="Enter nickname"
          autoComplete="name"
          icon={<UserIcon />}
        />

        <FormField
          label="Email address"
          id="email"
          name="email"
          type="email"
          placeholder="Enter email address"
          autoComplete="email"
          icon={<MailIcon />}
        />

        <PasswordField autoComplete="new-password" />

        <label className="flex cursor-pointer items-start gap-2.5 text-sm text-gray-600">
          <input
            type="checkbox"
            name="terms"
            required
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 accent-[#f6535b]"
          />
          <span>
            I agree to Ready Social{" "}
            <Link
              href="/terms"
              className="font-medium text-[#f6535b] hover:underline"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="font-medium text-[#f6535b] hover:underline"
            >
              Privacy Policy
            </Link>
          </span>
        </label>

        {error ? (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isLoading}
          className="h-12 w-full rounded-xl text-base font-semibold text-white transition-colors hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
          style={{ backgroundColor: PRIMARY }}
        >
          {isLoading ? "Signing up..." : "Sign Up"}
        </button>

        <OrDivider />

        <button
          type="button"
          disabled
          className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white text-sm font-medium text-black opacity-60"
        >
          <GoogleIcon />
          Log in with Google
        </button>

        <p className="pt-2 text-center text-sm text-black">
          I have an account?{" "}
          <Link
            href={`/login?next=${encodeURIComponent(nextPath)}`}
            className="font-semibold text-[#f6535b] underline underline-offset-2"
          >
            Log In
          </Link>
        </p>
      </form>
    </AuthPageShell>
  );
}
