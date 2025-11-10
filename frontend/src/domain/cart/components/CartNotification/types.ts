export interface CartNotificationProps {
  productName: string;
  productImage: string;
  productPrice: number;
  isVisible: boolean;
  onClose: () => void;
  onGoToCart: () => void;
}
