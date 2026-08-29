'use client';
import { QueryClient } from '@tanstack/react-query';

// Create a new QueryClient per request in SSR to avoid sharing state between requests
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
        // Disable automatic background refetching during SSR
        staleTime: 60 * 1000,
      },
    },
  });
}

let browserQueryClient = null;

export function getQueryClient() {
  if (typeof window === 'undefined') {
    // Server: always make a new query client
    return makeQueryClient();
  }
  // Browser: make a new query client if we don't already have one
  if (!browserQueryClient) browserQueryClient = makeQueryClient();
  return browserQueryClient;
}

// Keep backward compat
export const queryClientInstance = getQueryClient();
