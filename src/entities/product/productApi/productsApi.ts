import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  returnPolicy: string;
  warrantyInformation: string;

}
export interface ProductData {
  products: Product[];
  total: number;
  limit: number;
  skip: number;
}
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }), 
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], { q: string; limit: number; skip: number }>({
      query: ({ q, limit, skip }) => `/products/search?q=${q}&limit=${limit}&skip=${skip}`,
      transformResponse: (response: ProductData) => response.products, 
    }),
    getProductById: builder.query<Product, number>({
      query: (productId) => `/products/${productId}`,  
    }),
    
    getCart: builder.query({
      query: () => '/cart',
    }),     
  }),
});

export const { 
  useGetProductsQuery, 
  useGetProductByIdQuery,
  useGetCartQuery, 
} = productsApi;