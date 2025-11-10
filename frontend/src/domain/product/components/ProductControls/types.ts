export interface ProductControlsProps {
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  sortBy: string;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
  onSortChange: (sort: string) => void;
}
