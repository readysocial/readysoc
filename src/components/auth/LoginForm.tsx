"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AuthPageShell from "./AuthPageShell";
import FormField from "./FormField";
import OrDivider from "./OrDivider";
import { PRIMARY } from "./constants";
import { GoogleIcon, MailIcon } from "./icons";
import PasswordField from "../PasswordField";
import { apiFetch, ApiError } from "../../lib/api";
import { setToken } from "../../lib/auth";

type AuthResponse = {
  accessToken: string;
};

function safeNextPath(next: string | null): string {
  if (!next || !next.startsWith("/") || next.startsWith("//")) {
    return "/spark-bundle";
  }
  return next;
}

export default function LoginForm() {
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
    const email = String(formData.get("email") || "")
      .trim()
      .toLowerCase();
    const password = String(formData.get("password") || "");
    const rememberMe = formData.get("rememberMe") === "on";

    try {
      const result = await apiFetch<AuthResponse>("/users/auth", {
        method: "POST",
        auth: false,
        body: { email, password, rememberMe },
      });

      if (!result.accessToken) {
        throw new Error("Login succeeded but no access token was returned.");
      }

      setToken(result.accessToken);
      router.replace(nextPath);
    } catch (err) {
      const message =
        err instanceof ApiError
          ? err.message
          : err instanceof Error
            ? err.message
            : "Unable to log in. Please try again.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthPageShell
      title="Welcome back!"
      subtitle="Enter your details to Login"
    >
      <form
        className="mt-10 flex w-full flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <FormField
          label="Email address"
          id="email"
          name="email"
          type="email"
          placeholder="Enter email address"
          autoComplete="email"
          icon={<MailIcon />}
        />

        <PasswordField />

        <div className="flex items-center justify-between text-sm">
          <label className="inline-flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              name="rememberMe"
              defaultChecked
              className="h-4 w-4 rounded border-gray-300 accent-[#f6535b]"
            />
            <span className="text-black">Remember me</span>
          </label>

          <Link
            href="/contact"
            className="font-medium text-[#f6535b] hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        {error ? (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isLoading}
          className="mt-1 h-12 w-full rounded-xl text-base font-semibold text-white transition-colors hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
          style={{ backgroundColor: PRIMARY }}
        >
          {isLoading ? "Logging in..." : "Log in"}
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
          Don&apos;t have an account?{" "}
          <Link
            href={`/signup?next=${encodeURIComponent(nextPath)}`}
            className="font-semibold text-[#f6535b] underline underline-offset-2"
          >
            Sign up
          </Link>
        </p>
      </form>
    </AuthPageShell>
  );
}
