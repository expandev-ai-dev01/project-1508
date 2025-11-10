export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  shortDescription: string;
  available: boolean;
  discountPercentage?: number;
  category?: string;
  popularity?: number;
  createdAt?: string;
}

export interface ProductListParams {
  page?: number;
  pageSize?: number;
  sortBy?:
    | 'relevancia'
    | 'preco_crescente'
    | 'preco_decrescente'
    | 'nome_az'
    | 'nome_za'
    | 'avaliacao';
  category?: string;
}

export interface ProductListResponse {
  products: Product[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
