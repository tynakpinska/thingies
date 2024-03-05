import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts(state, action) {
      return [...state, ...action.payload];
    },
  },
});

export const { fetchProducts } = productsSlice.actions;
export default productsSlice;
