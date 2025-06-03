
// Node JS Backend Code for JWT Authentication Helpers

import * as jose from 'jose';
import { env } from '@/lib/env';
import { getItem } from '@/lib/utils/localStorage';

const JWT_SECRET_KEY = 'cosdensolutions';
const jwtSecret = new TextEncoder().encode(JWT_SECRET_KEY);

// Wait for a specified number of milliseconds
export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Retrieve a DB table from storage
export const getDatabaseTable = (entity) => getItem(env.DB_KEY)?.[entity];

// Middleware-style wrapper for auth-protected mock APIs
export const withAuth = (...data) => async (config) => {
  const token = config.headers?.Authorization?.split(' ')[1];
  const verified = token ? await verifyToken(token) : false;

  if (env.USE_AUTH && !verified) {
    return [403, { message: 'Unauthorized' }];
  }

  return typeof data[0] === 'function' ? data[0](config) : data;
};

// JWT verification logic
export const verifyToken = async (token, options = undefined) => {
  try {
    const verification = await jose.jwtVerify(token, jwtSecret);
    return options?.returnPayload ? verification.payload : true;
  } catch {
    return false;
  }
};

// Generate a refresh token with 30-day expiry
export const generateRefreshToken = async (data) => {
  return await new jose.SignJWT({ data })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('30d')
    .sign(jwtSecret);
};

// Generate an access token with 15-minute expiry
export const generateAccessToken = async (data) => {
  return await new jose.SignJWT({ data })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('15m')
    .sign(jwtSecret);
};

