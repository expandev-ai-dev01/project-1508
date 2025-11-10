import type { Product, ProductListParams, ProductListResponse } from '../types';

const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Bolo de Chocolate Premium',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400',
    price: 89.9,
    originalPrice: 119.9,
    rating: 4.8,
    reviewCount: 127,
    shortDescription: 'Delicioso bolo de chocolate com cobertura cremosa e recheio de brigadeiro',
    available: true,
    discountPercentage: 25,
    category: 'chocolate',
    popularity: 95,
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    name: 'Bolo Red Velvet',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400',
    price: 95.0,
    rating: 4.9,
    reviewCount: 89,
    shortDescription: 'Clássico bolo red velvet com cream cheese e toque de cacau',
    available: true,
    category: 'especial',
    popularity: 88,
    createdAt: '2024-01-20',
  },
  {
    id: '3',
    name: 'Bolo de Cenoura com Chocolate',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400',
    price: 65.0,
    originalPrice: 75.0,
    rating: 4.7,
    reviewCount: 156,
    shortDescription: 'Tradicional bolo de cenoura com cobertura de chocolate',
    available: true,
    discountPercentage: 13,
    category: 'tradicional',
    popularity: 92,
    createdAt: '2024-01-10',
  },
  {
    id: '4',
    name: 'Bolo de Morango',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400',
    price: 85.0,
    rating: 4.6,
    reviewCount: 73,
    shortDescription: 'Bolo leve com morangos frescos e chantilly',
    available: true,
    category: 'frutas',
    popularity: 78,
    createdAt: '2024-01-25',
  },
  {
    id: '5',
    name: 'Bolo de Limão',
    image: 'https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?w=400',
    price: 70.0,
    rating: 4.5,
    reviewCount: 64,
    shortDescription: 'Refrescante bolo de limão com cobertura cítrica',
    available: true,
    category: 'frutas',
    popularity: 71,
    createdAt: '2024-02-01',
  },
  {
    id: '6',
    name: 'Bolo Floresta Negra',
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400',
    price: 110.0,
    originalPrice: 140.0,
    rating: 4.9,
    reviewCount: 98,
    shortDescription: 'Sofisticado bolo com cerejas, chocolate e chantilly',
    available: true,
    discountPercentage: 21,
    category: 'especial',
    popularity: 85,
    createdAt: '2024-01-18',
  },
  {
    id: '7',
    name: 'Bolo de Coco',
    image: 'https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=400',
    price: 60.0,
    rating: 4.4,
    reviewCount: 52,
    shortDescription: 'Bolo macio de coco com cobertura de coco ralado',
    available: true,
    category: 'tradicional',
    popularity: 68,
    createdAt: '2024-02-05',
  },
  {
    id: '8',
    name: 'Bolo de Nozes',
    image: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=400',
    price: 95.0,
    rating: 4.7,
    reviewCount: 81,
    shortDescription: 'Bolo artesanal com nozes e mel',
    available: false,
    category: 'especial',
    popularity: 75,
    createdAt: '2024-01-12',
  },
  {
    id: '9',
    name: 'Bolo de Banana',
    image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=400',
    price: 55.0,
    rating: 4.3,
    reviewCount: 47,
    shortDescription: 'Bolo caseiro de banana com canela',
    available: true,
    category: 'tradicional',
    popularity: 65,
    createdAt: '2024-02-08',
  },
  {
    id: '10',
    name: 'Bolo Ópera',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400',
    price: 125.0,
    originalPrice: 150.0,
    rating: 5.0,
    reviewCount: 112,
    shortDescription: 'Elegante bolo francês com camadas de café e chocolate',
    available: true,
    discountPercentage: 17,
    category: 'especial',
    popularity: 90,
    createdAt: '2024-01-22',
  },
  {
    id: '11',
    name: 'Bolo de Laranja',
    image: 'https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=400',
    price: 65.0,
    rating: 4.6,
    reviewCount: 59,
    shortDescription: 'Bolo aromático de laranja com calda cítrica',
    available: true,
    category: 'frutas',
    popularity: 72,
    createdAt: '2024-02-03',
  },
  {
    id: '12',
    name: 'Bolo de Pistache',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400',
    price: 105.0,
    rating: 4.8,
    reviewCount: 76,
    shortDescription: 'Sofisticado bolo de pistache com cobertura cremosa',
    available: true,
    category: 'especial',
    popularity: 82,
    createdAt: '2024-01-28',
  },
  {
    id: '13',
    name: 'Bolo de Fubá',
    image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=400',
    price: 50.0,
    rating: 4.5,
    reviewCount: 68,
    shortDescription: 'Tradicional bolo de fubá cremoso',
    available: true,
    category: 'tradicional',
    popularity: 70,
    createdAt: '2024-02-10',
  },
  {
    id: '14',
    name: 'Bolo Tiramisù',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400',
    price: 115.0,
    rating: 4.9,
    reviewCount: 94,
    shortDescription: 'Clássico italiano com café, mascarpone e cacau',
    available: true,
    category: 'especial',
    popularity: 87,
    createdAt: '2024-01-30',
  },
  {
    id: '15',
    name: 'Bolo de Maracujá',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400',
    price: 75.0,
    originalPrice: 85.0,
    rating: 4.7,
    reviewCount: 61,
    shortDescription: 'Bolo tropical de maracujá com mousse',
    available: true,
    discountPercentage: 12,
    category: 'frutas',
    popularity: 76,
    createdAt: '2024-02-06',
  },
];

export const productService = {
  async list(params: ProductListParams = {}): Promise<ProductListResponse> {
    await new Promise((resolve) => setTimeout(resolve, 300));

    const { page = 1, pageSize = 12, sortBy = 'relevancia' } = params;

    let sortedProducts = [...MOCK_PRODUCTS];

    switch (sortBy) {
      case 'preco_crescente':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'preco_decrescente':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'nome_az':
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'nome_za':
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'avaliacao':
        sortedProducts.sort((a, b) => b.rating - a.rating);
        break;
      case 'relevancia':
      default:
        sortedProducts.sort((a, b) => {
          const scoreA =
            (a.popularity || 0) * 0.4 + a.rating * 20 * 0.4 + (a.discountPercentage || 0) * 0.2;
          const scoreB =
            (b.popularity || 0) * 0.4 + b.rating * 20 * 0.4 + (b.discountPercentage || 0) * 0.2;
          return scoreB - scoreA;
        });
        break;
    }

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedProducts = sortedProducts.slice(startIndex, endIndex);

    return {
      products: paginatedProducts,
      total: sortedProducts.length,
      page,
      pageSize,
      totalPages: Math.ceil(sortedProducts.length / pageSize),
    };
  },

  async getById(id: string): Promise<Product | null> {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return MOCK_PRODUCTS.find((p) => p.id === id) || null;
  },
};
