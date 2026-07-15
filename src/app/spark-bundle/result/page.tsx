import { Suspense } from "react";
import SparkBundleResultClient from "../../../components/spark/SparkBundleResultClient";

export const metadata = {
  title: "Payment Result | Ready Social",
  description: "Verify your Spark purchase payment.",
};

export default function SparkBundleResultPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-white text-sm text-gray-500">
          Verifying payment...
        </div>
      }
    >
      <SparkBundleResultClient />
    </Suspense>
  );
}
