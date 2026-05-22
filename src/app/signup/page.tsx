import Link from "next/link";
import AuthPageShell from "../../components/auth/AuthPageShell";
import FormField from "../../components/auth/FormField";
import OrDivider from "../../components/auth/OrDivider";
import { PRIMARY } from "../../components/auth/constants";
import { GoogleIcon, MailIcon, UserIcon } from "../../components/auth/icons";
import PasswordField from "../../components/PasswordField";

export default function SignupPage() {
  return (
    <AuthPageShell
      title="Set Up Your Profile"
      subtitle="Enter your details to register"
    >
      <form className="mt-10 flex w-full flex-col gap-5">
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

        <button
          type="submit"
          className="h-12 w-full rounded-xl text-base font-semibold text-white transition-colors hover:opacity-95"
          style={{ backgroundColor: PRIMARY }}
        >
          Sign Up
        </button>

        <OrDivider />

        <button
          type="button"
          className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white text-sm font-medium text-black transition-colors hover:bg-gray-50"
        >
          <GoogleIcon />
          Log in with Google
        </button>

        <p className="pt-2 text-center text-sm text-black">
          I have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-[#f6535b] underline underline-offset-2"
          >
            Log In
          </Link>
        </p>
      </form>
    </AuthPageShell>
  );
}
