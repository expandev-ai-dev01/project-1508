import { useEffect } from 'react';
import { cn } from '@/core/utils';
import type { CartNotificationProps } from './types';

export const CartNotification = ({
  productName,
  productImage,
  productPrice,
  isVisible,
  onClose,
  onGoToCart,
}: CartNotificationProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in-right">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm">
        <div className="flex items-start gap-3">
          <img src={productImage} alt={productName} className="w-16 h-16 object-cover rounded" />
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-semibold text-sm text-gray-900 line-clamp-2">{productName}</h4>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600 ml-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <p className="text-sm text-primary-600 font-bold mb-3">R$ {productPrice.toFixed(2)}</p>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-sm text-gray-600">Adicionado ao carrinho</span>
            </div>
          </div>
        </div>
        <button
          onClick={onGoToCart}
          className="w-full mt-3 py-2 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
        >
          Ver Carrinho
        </button>
      </div>
    </div>
  );
};
