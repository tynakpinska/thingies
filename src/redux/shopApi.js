import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { fetchProducts } from "./stateSlices/productsSlice";
import { fetchCategories } from "./stateSlices/categoriesSlice";

// Define a service using a base URL and expected endpoints
export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co/api/v1" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
      onQueryStarted: async (query, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled;
        for (let i = 0; i <= 20; i++) {
          const { id, title, price, description, category } = data[i];
          async function fetchData() {
            const response = await fetch(
              "https://source.unsplash.com/random/300x300"
            );
            let imageUrl = response.url;
            let newProduct = {
              id,
              name: title,
              price,
              description,
              category,
              image: imageUrl,
            };
            dispatch(
              fetchProducts({
                type: "products/fetchProducts",
                payload: newProduct,
              })
            );
          }
          fetchData();
        }
      },
    }),
    getCategories: builder.query({
      query: () => "categories",
      onQueryStarted: async (query, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled;

        let filteredData = [];
        data.forEach((category) => {
          if (!filteredData.find((el) => el[1] === category.name)) {
            filteredData.push([category.id, category.name]);
          }
        });

        dispatch(
          fetchCategories({
            type: "categories/fetchCategories",
            payload: filteredData,
          })
        );
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery, useGetCategoriesQuery } = shopApi;
