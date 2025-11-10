import { cn } from '@/core/utils';
import type { ProductControlsProps } from './types';

const SORT_OPTIONS = [
  { value: 'relevancia', label: 'Relevância' },
  { value: 'preco_crescente', label: 'Menor Preço' },
  { value: 'preco_decrescente', label: 'Maior Preço' },
  { value: 'nome_az', label: 'Nome (A-Z)' },
  { value: 'nome_za', label: 'Nome (Z-A)' },
  { value: 'avaliacao', label: 'Melhor Avaliação' },
];

const PAGE_SIZE_OPTIONS = [12, 24, 36, 48];

export const ProductControls = ({
  total,
  page,
  pageSize,
  totalPages,
  sortBy,
  onPageChange,
  onPageSizeChange,
  onSortChange,
}: ProductControlsProps) => {
  const startItem = (page - 1) * pageSize + 1;
  const endItem = Math.min(page * pageSize, total);

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="text-sm text-gray-600">
          Mostrando {startItem}-{endItem} de {total} produtos
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-sm text-gray-700 whitespace-nowrap">
              Ordenar por:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="pageSize" className="text-sm text-gray-700 whitespace-nowrap">
              Itens por página:
            </label>
            <select
              id="pageSize"
              value={pageSize}
              onChange={(e) => onPageSizeChange(Number(e.target.value))}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {PAGE_SIZE_OPTIONS.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-2">
        <button
          onClick={() => onPageChange(1)}
          disabled={page === 1}
          className={cn(
            'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
            page === 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
          )}
        >
          Primeira
        </button>

        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className={cn(
            'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
            page === 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
          )}
        >
          Anterior
        </button>

        <div className="flex items-center gap-1">
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (page <= 3) {
              pageNum = i + 1;
            } else if (page >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = page - 2 + i;
            }

            return (
              <button
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                className={cn(
                  'w-10 h-10 rounded-lg text-sm font-medium transition-colors',
                  page === pageNum
                    ? 'bg-primary-600 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                )}
              >
                {pageNum}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          className={cn(
            'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
            page === totalPages
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
          )}
        >
          Próxima
        </button>

        <button
          onClick={() => onPageChange(totalPages)}
          disabled={page === totalPages}
          className={cn(
            'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
            page === totalPages
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
          )}
        >
          Última
        </button>
      </div>
    </div>
  );
};
