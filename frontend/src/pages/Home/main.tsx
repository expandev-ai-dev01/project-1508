import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProductList } from '@/domain/product/hooks/useProductList';
import { ProductGrid } from '@/domain/product/components/ProductGrid';
import { ProductControls } from '@/domain/product/components/ProductControls';
import { useCartStore } from '@/domain/cart/stores/cartStore';
import { CartNotification } from '@/domain/cart/components/CartNotification';

export const HomePage = () => {
  const navigate = useNavigate();
  const addItem = useCartStore((state) => state.addItem);

  const [notification, setNotification] = useState<{
    visible: boolean;
    product: { name: string; image: string; price: number } | null;
  }>({ visible: false, product: null });

  const {
    products,
    isLoading,
    page,
    pageSize,
    totalPages,
    total,
    sortBy,
    setPage,
    setPageSize,
    setSortBy,
  } = useProductList();

  const handleAddToCart = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    if (product && product.available) {
      addItem({
        productId: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
      });

      setNotification({
        visible: true,
        product: {
          name: product.name,
          image: product.image,
          price: product.price,
        },
      });
    }
  };

  const handleViewDetails = (productId: string) => {
    console.log('View details:', productId);
  };

  const handleCloseNotification = () => {
    setNotification({ visible: false, product: null });
  };

  const handleGoToCart = () => {
    setNotification({ visible: false, product: null });
    console.log('Navigate to cart');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Catálogo de Bolos</h1>
        <p className="text-lg text-gray-600">Explore nossa deliciosa seleção de bolos artesanais</p>
      </div>

      <div className="mb-6">
        <ProductControls
          total={total}
          page={page}
          pageSize={pageSize}
          totalPages={totalPages}
          sortBy={sortBy}
          onPageChange={setPage}
          onPageSizeChange={setPageSize}
          onSortChange={setSortBy}
        />
      </div>

      <ProductGrid
        products={products}
        isLoading={isLoading}
        onAddToCart={handleAddToCart}
        onViewDetails={handleViewDetails}
      />

      {totalPages > 1 && (
        <div className="mt-8">
          <ProductControls
            total={total}
            page={page}
            pageSize={pageSize}
            totalPages={totalPages}
            sortBy={sortBy}
            onPageChange={setPage}
            onPageSizeChange={setPageSize}
            onSortChange={setSortBy}
          />
        </div>
      )}

      {notification.visible && notification.product && (
        <CartNotification
          productName={notification.product.name}
          productImage={notification.product.image}
          productPrice={notification.product.price}
          isVisible={notification.visible}
          onClose={handleCloseNotification}
          onGoToCart={handleGoToCart}
        />
      )}
    </div>
  );
};

export default HomePage;
