import { Suspense } from "react";
import SignupForm from "../../components/auth/SignupForm";

export default function SignupPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-white text-sm text-gray-500">
          Loading...
        </div>
      }
    >
      <SignupForm />
    </Suspense>
  );
}
