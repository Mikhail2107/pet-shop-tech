import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// import {Product, ProductData} from '../model/product.ts';

export const dummyApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/products'
  }),
  endpoints: builder => ({
    searchProducts: builder.query<ProductData, {
      query: string,
      limit: number,
      skip: number
    }>({
      query: params => ({
        url: '/products', // Исправленный URL
        params: {
          q: params.query,
          limit: params.limit,
          skip: params.skip
        }
      })
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => ({
        url: `/products/${id}`, // Исправленный URL
      })
    })
  })
});

export const {
  useSearchProductsQuery, 
  useGetProductByIdQuery 
} = dummyApi;
