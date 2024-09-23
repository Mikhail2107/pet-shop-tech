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
    getProducts: builder.query<Product[], void>({
      query: () => '/products', 
      transformResponse: (response: ProductData) => response.products, 
    }),
    getProductById: builder.query<Product, number>({
      query: (productId) => `/products/${productId}`,  
    }),
    
    getCart: builder.query({
      query: () => '/cart',
    }),
    // addToCart: builder.mutation({
    //   query: (productId) => ({
    //     url: '/cart/add',
    //     method: 'POST',
    //     body: { productId },
    //   }),
    // }),
    // removeFromCart: builder.mutation({
    //   query: (productId) => ({
    //     url: `/cart/${productId}`,
    //     method: 'DELETE',
    //   }),
    // }),    
  }),
});

export const { 
  useGetProductsQuery, 
  useGetProductByIdQuery,
  useGetCartQuery, 
  // useAddToCartMutation, 
  // useRemoveFromCartMutation, 
} = productsApi;
