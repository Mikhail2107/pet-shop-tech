import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {Product, ProductData } from './interface'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/products' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => '',
      transformResponse: (response: ProductData) => response.products, // Извлечение массива products из ответа
    }),
    getProductById: builder.query<Product, number>({
      query: (productId) => `/${productId}`, // URL с ID продукта
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
