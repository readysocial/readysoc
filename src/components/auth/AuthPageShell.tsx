import type { ReactNode } from "react";
import { PRIMARY } from "./constants";
import { PeachBlob, SpyIcon } from "./icons";

type AuthPageShellProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export default function AuthPageShell({
  title,
  subtitle,
  children,
}: AuthPageShellProps) {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-white px-5 py-10 sm:px-6">
      <PeachBlob className="-left-32 -top-32 h-64 w-64 sm:h-80 sm:w-80" />
      <PeachBlob className="-right-32 -bottom-32 h-72 w-72 sm:h-96 sm:w-96" />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-md flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center text-center">
          <div
            className="flex h-[72px] w-[72px] items-center justify-center rounded-full"
            style={{ backgroundColor: PRIMARY }}
          >
            <SpyIcon />
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-base text-black/80">{subtitle}</p>
        </div>

        {children}
      </div>
    </main>
  );
}
