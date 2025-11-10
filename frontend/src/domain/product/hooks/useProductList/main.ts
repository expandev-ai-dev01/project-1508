import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { productService } from '../../services/productService';
import type { UseProductListOptions, UseProductListReturn } from './types';
import type { ProductListParams } from '../../types';

export const useProductList = (options: UseProductListOptions = {}): UseProductListReturn => {
  const { initialParams = {}, enabled = true } = options;

  const [page, setPage] = useState(initialParams.page || 1);
  const [pageSize, setPageSize] = useState(initialParams.pageSize || 12);
  const [sortBy, setSortBy] = useState<ProductListParams['sortBy']>(
    initialParams.sortBy || 'relevancia'
  );

  const queryKey = ['products', { page, pageSize, sortBy }];

  const { data, isLoading, error, refetch } = useQuery({
    queryKey,
    queryFn: () => productService.list({ page, pageSize, sortBy }),
    enabled,
    staleTime: 2 * 60 * 1000,
  });

  const handleSetPage = (newPage: number) => {
    setPage(newPage);
  };

  const handleSetPageSize = (size: number) => {
    setPageSize(size);
    setPage(1);
  };

  const handleSetSortBy = (sort: string) => {
    setSortBy(sort as ProductListParams['sortBy']);
    setPage(1);
  };

  return {
    products: data?.products || [],
    isLoading,
    error: error as Error | null,
    page,
    pageSize,
    totalPages: data?.totalPages || 0,
    total: data?.total || 0,
    sortBy: sortBy || 'relevancia',
    setPage: handleSetPage,
    setPageSize: handleSetPageSize,
    setSortBy: handleSetSortBy,
    refetch,
  };
};
