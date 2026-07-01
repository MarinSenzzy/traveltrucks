import { useQuery } from '@tanstack/react-query';
import { getAvailableFilters } from '@/lib/api';

export const useAvailableFilters = () => {
  return useQuery({
    queryKey: ['availableFilters'],
    queryFn: getAvailableFilters,
    staleTime: Infinity,
  });
};
