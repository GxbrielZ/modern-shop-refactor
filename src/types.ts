export interface Product {
  sku: number;
  name: string;
  image: string;
  thumbnailImage: string;
  regularPrice: number;
  salePrice: number;
  onSale: boolean;
  percentSavings: string;
  shortDescription: string | null;
  longDescription: string | null;
  customerReviewAverage: number | null;
  color: string | null;
}

export interface ProductsResponse {
  from: number;
  to: number;
  total: number;
  totalPages: number;
  products: Product[];
}

export interface CartItem extends Product {
  quantity: number;
}