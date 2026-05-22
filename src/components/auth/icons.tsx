import { PEACH } from "./constants";

export function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 shrink-0 text-gray-400"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path d="M4 6.75h16v10.5H4z" />
      <path d="m5 8 7 6 7-6" />
    </svg>
  );
}

export function UserIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 shrink-0 text-gray-400"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M5 20c0-3.866 3.134-7 7-7s7 3.134 7 7" />
    </svg>
  );
}

export function SpyIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-9 w-9 text-white"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 64 64"
    >
      <path
        d="M18 24h28l-3.8-10.6a2 2 0 0 0-2.5-1.2l-5.5 1.8-4.3-3.4a2 2 0 0 0-2.6 0l-4.3 3.4-5.5-1.8a2 2 0 0 0-2.5 1.2z"
        fill="currentColor"
        stroke="none"
      />
      <circle cx="23" cy="39" r="8.5" />
      <circle cx="41" cy="39" r="8.5" />
      <path d="M31.5 39h1" />
      <path d="M16 39h-5" />
      <path d="M53 39h-5" />
    </svg>
  );
}

export function GoogleIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5 shrink-0" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

export function PeachBlob({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{ backgroundColor: PEACH }}
    />
  );
}
