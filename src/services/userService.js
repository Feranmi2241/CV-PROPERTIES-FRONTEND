import { api } from "./api";

/**
 * User Service — endpoints for user management (used by AddNewUser page).
 */

/**
 * GET /api/admin/customers — list customers (paginated)
 */
export async function getCustomers(page = 1, limit = 10) {
  return api.get(`/api/admin/customers?page=${page}&limit=${limit}`);
}

/**
 * GET /api/admin/agents — list agents (paginated)
 */
export async function getAgents(page = 1, limit = 10) {
  return api.get(`/api/admin/agents?page=${page}&limit=${limit}`);
}

/**
 * GET /api/admin/all-users — list all users
 */
export async function getAllUsers() {
  return api.get("/api/admin/all-users");
}

/**
 * PATCH /api/admin/account/suspend — suspend/unsuspend a user account
 */
export async function toggleSuspendUser(userId) {
  return api.patch("/api/admin/account/suspend", { userId });
}

/**
 * GET /api/customer/saved-properties — get saved properties for a customer
 */
export async function getSavedProperties(page = 1, limit = 10) {
  return api.get(`/api/customer/saved-properties?page=${page}&limit=${limit}`);
}

/**
 * GET /api/customer/all-bookings — get all bookings for a customer
 */
export async function getUserBookings(page = 1, limit = 10, status = "") {
  let endpoint = `/api/customer/all-bookings?page=${page}&limit=${limit}`;
  if (status) endpoint += `&status=${status}`;
  return api.get(endpoint);
}

/**
 * GET /api/property/amenities — get all amenities
 */
export async function getAmenities() {
  return api.get("/api/property/amenities");
}

/**
 * GET /api/newsletter/subscribers — get all newsletter subscribers
 */
export async function getNewsletterSubscribers(page = 1, limit = 10) {
  return api.get(`/api/newsletter/subscribers?page=${page}&limit=${limit}`);
}