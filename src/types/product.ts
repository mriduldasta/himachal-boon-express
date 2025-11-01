export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  weight: string;
  stock: number;
  isNew?: boolean;
  isPopular?: boolean;
  benefits?: string[];
  source?: string;
  usage?: string;
  storage?: string;
}

export interface CartItem extends Product {
  quantity: number;
}
