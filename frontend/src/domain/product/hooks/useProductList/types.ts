import type { ProductListParams } from '../../types';

export interface UseProductListOptions {
  initialParams?: ProductListParams;
  enabled?: boolean;
}

export interface UseProductListReturn {
  products: any[];
  isLoading: boolean;
  error: Error | null;
  page: number;
  pageSize: number;
  totalPages: number;
  total: number;
  sortBy: string;
  setPage: (page: number) => void;
  setPageSize: (size: number) => void;
  setSortBy: (sort: string) => void;
  refetch: () => void;
}
