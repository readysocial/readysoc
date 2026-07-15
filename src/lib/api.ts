import { clearToken, getToken } from "./auth";

export class ApiError extends Error {
  status: number;
  data: unknown;

  constructor(message: string, status: number, data?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

function getApiBaseUrl(): string {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!base) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL is not configured");
  }
  return base.replace(/\/$/, "");
}

function extractErrorMessage(data: unknown, fallback: string): string {
  if (!data) return fallback;
  if (typeof data === "string" && data.trim()) return data;
  if (typeof data === "object") {
    const record = data as Record<string, unknown>;
    if (typeof record.message === "string" && record.message.trim()) {
      return record.message;
    }
    if (typeof record.error === "string" && record.error.trim()) {
      return record.error;
    }
  }
  return fallback;
}

type ApiFetchOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
  auth?: boolean;
};

export async function apiFetch<T>(
  path: string,
  options: ApiFetchOptions = {},
): Promise<T> {
  const { body, auth = true, headers, ...rest } = options;
  const token = auth ? getToken() : null;

  const response = await fetch(`${getApiBaseUrl()}${path.startsWith("/") ? path : `/${path}`}`, {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  const contentType = response.headers.get("content-type") || "";
  const data = contentType.includes("application/json")
    ? await response.json().catch(() => null)
    : await response.text().catch(() => null);

  if (response.status === 401) {
    clearToken();
    if (typeof window !== "undefined") {
      const next = encodeURIComponent(
        `${window.location.pathname}${window.location.search}`,
      );
      window.location.assign(`/login?next=${next}`);
    }
    throw new ApiError("Session expired. Please log in again.", 401, data);
  }

  if (!response.ok) {
    throw new ApiError(
      extractErrorMessage(data, `Request failed (${response.status})`),
      response.status,
      data,
    );
  }

  return data as T;
}
