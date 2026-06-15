import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { adminLogin as apiAdminLogin, getMe } from "../services/authService";

/**
 * AuthContext
 *
 * Provides authentication state across the app.
 * Persists admin session in localStorage ("cv_admin") and auto-restores on mount.
 */
const AuthContext = createContext(null);

const STORAGE_KEY = "cv_admin";

function loadStoredAdmin() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      // Basic sanity check
      if (parsed && parsed.token) return parsed;
    }
  } catch {
    // corrupted data — remove it
    localStorage.removeItem(STORAGE_KEY);
  }
  return null;
}

export function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(loadStoredAdmin);
  const [loading, setLoading] = useState(true);

  /**
   * On mount, verify the stored token is still valid by calling /api/auth/me.
   * If the call fails, clear the session.
   */
  useEffect(() => {
    const stored = loadStoredAdmin();
    if (stored && stored.token) {
      getMe()
        .then((user) => {
          setAdmin({ ...stored, user });
        })
        .catch(() => {
          // Token invalid/expired — clear
          localStorage.removeItem(STORAGE_KEY);
          setAdmin(null);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  /**
   * Admin login — calls POST /api/auth/admin/login, stores token + user.
   */
  const login = useCallback(async (email, password) => {
    const data = await apiAdminLogin(email, password);
    const session = {
      token: data.token,
      user: data.user,
      // Legacy fields kept for backward compat with existing layout/sidebar props
      name: data.user?.firstName
        ? `${data.user.firstName} ${data.user.lastName || ""}`.trim()
        : data.user?.email || "Admin",
      role: data.user?.role === "admin" ? "Super Admin" : data.user?.role || "Admin",
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    setAdmin(session);
    return session;
  }, []);

  /**
   * Logout — clear stored session.
   */
  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setAdmin(null);
  }, []);

  const value = {
    admin,
    login,
    logout,
    loading,
    isAuthenticated: !!admin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
