import { api } from "./api";

/**
 * Auth Service — handles all authentication endpoints from the Swagger spec.
 */

/**
 * POST /api/auth/admin/login
 * @param {string} email
 * @param {string} password
 * @returns {Promise<{ token: string, user: object }>}
 */
export async function adminLogin(email, password) {
  return api.post("/api/auth/admin/login", { email, password });
}

/**
 * POST /api/auth/login — regular user login (not used for admin, but available)
 */
export async function login(email, password) {
  return api.post("/api/auth/login", { email, password });
}

/**
 * POST /api/auth/register — register a new user (used by AddNewUser)
 */
export async function registerUser(userData) {
  return api.post("/api/auth/register", userData);
}

/**
 * POST /api/auth/admin/register — register a new admin
 * Uses multipart/form-data for avatar upload.
 */
export async function registerAdmin(formData) {
  return api.upload("/api/auth/admin/register", formData);
}

/**
 * GET /api/auth/me — get currently logged-in user details
 * @returns {Promise<object>} User object
 */
export async function getMe() {
  return api.get("/api/auth/me");
}

/**
 * POST /api/auth/upload-avatar — upload user avatar
 * @param {FormData} formData - with "avatar" field
 */
export async function uploadAvatar(formData) {
  return api.upload("/api/auth/upload-avatar", formData);
}

/**
 * POST /api/auth/verify-email
 */
export async function verifyEmail(email, code) {
  return api.post("/api/auth/verify-email", { email, code });
}

/**
 * POST /api/auth/resend-verification
 */
export async function resendVerification(email) {
  return api.post("/api/auth/resend-verification", { email });
}

/**
 * POST /api/auth/forgot-password
 */
export async function forgotPassword(email) {
  return api.post("/api/auth/forgot-password", { email });
}

/**
 * POST /api/auth/verify-forgot-password
 */
export async function verifyForgotPassword(email, code) {
  return api.post("/api/auth/verify-forgot-password", { email, code });
}

/**
 * POST /api/auth/reset-password
 */
export async function resetPassword(newPassword) {
  return api.post("/api/auth/reset-password", { newPassword });
}