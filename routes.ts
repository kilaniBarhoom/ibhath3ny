/**
 * Pulic routes that are accessible to all users
 * @type {string[]}
 */

export const publicRoutes = ["/", "/search", "/community/home"];

/**
 * Auth routes that are accessible to authenticated users
 * @type {string[]}
 */

export const authRoutes = ["/error"];

/**
 * Routes with api prefix
 * @type {string[]}
 */

export const apiRoutesPrefix = "/api/auth";

/**
 * Default redirect route after login
 * @type {string}
 */

export const DEFAULT_REDIRECT = "/";
