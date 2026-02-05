import rawData from "../data/products.json";
import type { Product, ProductsResponse } from "../types";

const data = rawData as unknown as ProductsResponse;

export const fetchProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.products);
    }, 500);
  });
};
