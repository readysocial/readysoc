import Link from "next/link";
import AuthPageShell from "../../components/auth/AuthPageShell";
import FormField from "../../components/auth/FormField";
import OrDivider from "../../components/auth/OrDivider";
import { PRIMARY } from "../../components/auth/constants";
import { GoogleIcon, MailIcon } from "../../components/auth/icons";
import PasswordField from "../../components/PasswordField";

export default function LoginPage() {
  return (
    <AuthPageShell
      title="Welcome back!"
      subtitle="Enter your details to Login"
    >
      <form className="mt-10 flex w-full flex-col gap-5">
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

        <button
          type="submit"
          className="mt-1 h-12 w-full rounded-xl text-base font-semibold text-white transition-colors hover:opacity-95"
          style={{ backgroundColor: PRIMARY }}
        >
          Log in
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
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-[#f6535b] underline underline-offset-2"
          >
            Sign up
          </Link>
        </p>
      </form>
    </AuthPageShell>
  );
}
