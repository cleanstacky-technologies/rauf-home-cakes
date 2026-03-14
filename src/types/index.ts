export interface WeightOption {
  label: string;
  price: number;
}

export interface TopperOption {
  id: string;
  name: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  bestseller?: boolean;
  weights: WeightOption[];
  image?: string;
  description?: string;
  tags?: string[];            // e.g. ['contains-nuts', 'indian-fusion']
}

export interface CartItem {
  id: string;
  productId: string;
  productName: string;
  category: string;
  weight: string;
  weightPrice: number;
  topper: string;
  topperPrice: number;
  flavour: string;
  cakeMessage: string;
  specialInstructions: string;
  quantity: number;
  totalPrice: number;
}

export interface PickupSlot {
  id: string;
  label: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  occasion: string;
}
