/**
 * API Service Layer — CV Properties Admin
 *
 * Single integration point for all backend API calls.
 * Injects JWT token from localStorage automatically.
 */

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

/**
 * Get stored JWT token from localStorage.
 */
function getToken() {
  try {
    const stored = localStorage.getItem("cv_admin");
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed.token || null;
    }
  } catch {
    // ignore
  }
  return null;
}

/**
 * Core request function.
 * @param {"GET"|"POST"|"PUT"|"PATCH"|"DELETE"} method
 * @param {string} endpoint - e.g. "/api/auth/login"
 * @param {object|null} body - JSON body (not used for GET/DELETE)
 * @param {object} headers - Extra headers
 * @param {boolean} isFormData - If true, do not set Content-Type (browser sets multipart boundary)
 */
async function request(method, endpoint, body = null, headers = {}, isFormData = false) {
  const token = getToken();

  const config = {
    method,
    headers: {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
  };

  if (body) {
    config.body = isFormData ? body : JSON.stringify(body);
  }

  let response;
  try {
    response = await fetch(`${BASE_URL}${endpoint}`, config);
  } catch (networkError) {
    throw new Error(`Network error: ${networkError.message}`);
  }

  // Handle 401 — clear expired session
  if (response.status === 401) {
    localStorage.removeItem("cv_admin");
    // Only redirect if not already on login page
    if (window.location.pathname !== "/") {
      window.location.href = "/";
    }
    throw new Error("Session expired. Please log in again.");
  }

  // Try to parse JSON response
  let data;
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    try {
      data = await response.json();
    } catch {
      data = null;
    }
  } else {
    data = await response.text().catch(() => null);
  }

  if (!response.ok) {
    const message =
      data?.message || data?.error || response.statusText || "Request failed";
    throw new Error(message);
  }

  return data;
}

export const api = {
  get: (endpoint, headers) => request("GET", endpoint, null, headers),
  post: (endpoint, body, headers) => request("POST", endpoint, body, headers),
  put: (endpoint, body, headers) => request("PUT", endpoint, body, headers),
  patch: (endpoint, body, headers) => request("PATCH", endpoint, body, headers),
  delete: (endpoint, headers) => request("DELETE", endpoint, null, headers),
  /** Upload files via multipart/form-data. Attaches JWT automatically. */
  upload: (endpoint, formData, headers) => request("POST", endpoint, formData, headers, true),
};

// ─── Service modules ─────────────────────────────────────────────────────────

export * from "./authService";
export * from "./adminService";
export * from "./userService";
