import { api } from "./api";

/**
 * Admin Service — endpoints for the admin dashboard and management.
 */

/**
 * GET /api/admin/customers — get all customers (paginated)
 */
export async function getCustomers(page = 1, limit = 10) {
  return api.get(`/api/admin/customers?page=${page}&limit=${limit}`);
}

/**
 * GET /api/admin/agents — get all agents (paginated)
 */
export async function getAgents(page = 1, limit = 10) {
  return api.get(`/api/admin/agents?page=${page}&limit=${limit}`);
}

/**
 * GET /api/admin/all-users — get all users (no pagination params in spec)
 */
export async function getAllUsers() {
  return api.get("/api/admin/all-users");
}

/**
 * PATCH /api/admin/approve-property — approve or reject a property
 */
export async function approveProperty(propertyId, status) {
  return api.patch("/api/admin/approve-property", { propertyId, status });
}

/**
 * PATCH /api/admin/account/suspend — suspend or unsuspend a user
 */
export async function suspendUser(userId) {
  return api.patch("/api/admin/account/suspend", { userId });
}

/**
 * GET /api/agent/dashboard — get agent dashboard metrics
 * (Admin may use this for aggregated view)
 */
export async function getAgentDashboard() {
  return api.get("/api/agent/dashboard");
}

/**
 * GET /api/agent/listings — get agent listings (paginated, optional status filter)
 */
export async function getAgentListings(page = 1, limit = 10, status = "") {
  let endpoint = `/api/agent/listings?page=${page}&limit=${limit}`;
  if (status) endpoint += `&status=${status}`;
  return api.get(endpoint);
}

/**
 * GET /api/agent/earnings — get agent earnings (optional date filter)
 */
export async function getAgentEarnings(startDate = "", endDate = "") {
  let endpoint = "/api/agent/earnings";
  if (startDate) endpoint += `?startDate=${startDate}`;
  if (endDate) endpoint += `${startDate ? "&" : "?"}endDate=${endDate}`;
  return api.get(endpoint);
}

/**
 * GET /api/property/all — get all properties (paginated, searchable)
 */
export async function getProperties(page = 1, limit = 10, search = "", category = "") {
  let endpoint = `/api/property/all?page=${page}&limit=${limit}`;
  if (search) endpoint += `&search=${encodeURIComponent(search)}`;
  if (category) endpoint += `&category=${encodeURIComponent(category)}`;
  return api.get(endpoint);
}

/**
 * GET /api/property/spotlight — get spotlight properties
 */
export async function getSpotlightProperties() {
  return api.get("/api/property/spotlight");
}

/**
 * GET /api/property/top-categories — get top property categories
 */
export async function getTopCategories() {
  return api.get("/api/property/top-categories");
}

/**
 * GET /api/property/recommended — get recommended properties (auth required)
 */
export async function getRecommendedProperties() {
  return api.get("/api/property/recommended");
}

/**
 * GET /api/payment/history — get payment history (paginated)
 */
export async function getPaymentHistory(page = 1, limit = 10) {
  return api.get(`/api/payment/history?page=${page}&limit=${limit}`);
}

/**
 * GET /api/payment/rates — get currency exchange rates
 */
export async function getExchangeRates() {
  return api.get("/api/payment/rates");
}

/**
 * GET /api/notifications — get user notifications (paginated, optional read filter)
 */
export async function getNotifications(page = 1, limit = 10, read = "") {
  let endpoint = `/api/notifications?page=${page}&limit=${limit}`;
  if (read !== "") endpoint += `&read=${read}`;
  return api.get(endpoint);
}

/**
 * GET /api/newsletter/stats — get newsletter statistics
 */
export async function getNewsletterStats() {
  return api.get("/api/newsletter/stats");
}

/**
 * GET /api/contact/all — get all contact messages (paginated, admin only)
 */
export async function getContactMessages(page = 1, limit = 10) {
  return api.get(`/api/contact/all?page=${page}&limit=${limit}`);
}