'use client';
import { useState } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { getQueryClient } from '@/lib/query-client';
import { LanguageProvider } from '@/lib/LanguageContext';
import PageComments from '@/components/shared/PageComments';

export default function Providers({ children }) {
  // Use useState to ensure QueryClient is stable across renders
  const [queryClient] = useState(() => getQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        {children}
        <PageComments />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
