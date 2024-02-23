import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts(state, action) {
      return action.payload.payload;
    },
    filterProductsByName(state, action) {
      state = action.payload;
    },
  },
});

export const { fetchProducts, filterProductsByName } =
  productsSlice.actions;
export default productsSlice;
