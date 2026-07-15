const AUTH_TOKEN_KEY = "authToken";

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    return token?.trim() ? token : null;
  } catch {
    return null;
  }
}

export function setToken(token: string): void {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
}

export function clearToken(): void {
  localStorage.removeItem(AUTH_TOKEN_KEY);
}

export function isAuthenticated(): boolean {
  return !!getToken();
}
