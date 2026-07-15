import type { Metadata } from "next";
import SparkBundlePage from "../../components/spark/SparkBundlePage";

export const metadata: Metadata = {
  title: "Spark Bundle | Ready Social",
  description: "Choose a Spark bundle to connect with listeners anytime.",
};

export default function Page() {
  return <SparkBundlePage />;
}
