import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product, ProductData } from './interface';

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
