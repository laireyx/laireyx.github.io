import { QueryClient } from '@tanstack/react-query';

export default new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: Infinity,
      // Stale-while-revalidate trick
      initialDataUpdatedAt: 1,
      staleTime: 60 * 1000,

      refetchOnWindowFocus: false,
    },
  },
});
