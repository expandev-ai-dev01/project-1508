import { cn } from '@/core/utils';
import type { ProductCardProps } from './types';

export const ProductCard = ({ product, onAddToCart, onViewDetails }: ProductCardProps) => {
  const handleCardClick = () => {
    if (onViewDetails) {
      onViewDetails(product.id);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddToCart && product.available) {
      onAddToCart(product.id);
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <svg key={i} className="w-4 h-4" viewBox="0 0 20 20">
            <defs>
              <linearGradient id={`half-${product.id}`}>
                <stop offset="50%" stopColor="#FBBF24" />
                <stop offset="50%" stopColor="#D1D5DB" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#half-${product.id})`}
              d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
            />
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} className="w-4 h-4 fill-gray-300" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <div
      onClick={handleCardClick}
      className={cn(
        'bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden border border-gray-200',
        !product.available && 'opacity-60'
      )}
    >
      <div className="relative aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {product.discountPercentage && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-bold">
            -{product.discountPercentage}%
          </div>
        )}
        {!product.available && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Indisponível</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">
          {product.name}
        </h3>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2 min-h-[2.5rem]">
          {product.shortDescription}
        </p>

        <div className="flex items-center gap-1 mb-3">
          {renderStars(product.rating)}
          <span className="text-sm text-gray-600 ml-1">
            {product.rating.toFixed(1)} ({product.reviewCount})
          </span>
        </div>

        <div className="mb-3">
          {product.originalPrice && (
            <div className="text-sm text-gray-500 line-through">
              R$ {product.originalPrice.toFixed(2)}
            </div>
          )}
          <div className="text-2xl font-bold text-primary-600">R$ {product.price.toFixed(2)}</div>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={!product.available}
          className={cn(
            'w-full py-2 px-4 rounded-lg font-medium transition-colors',
            product.available
              ? 'bg-primary-600 text-white hover:bg-primary-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          )}
        >
          {product.available ? 'Adicionar ao Carrinho' : 'Indisponível'}
        </button>
      </div>
    </div>
  );
};
