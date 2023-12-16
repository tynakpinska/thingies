import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co/api/v1" }),
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => "products",
    }),
    getRandomProduct: builder.query({
      query: productNumber => `products/${productNumber}`,
    }),
    getCategories: builder.query({
        query: () => "categories",
      }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery, useGetRandomProductQuery, useGetCategoriesQuery } = shopApi;
