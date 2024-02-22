import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: []};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts(state, action) {
      state.products = action.payload;
    },
    filterProductsByCategory(state, action) {
        console.log(state, action)
      state.products = state.products.filter(
        (product) => product.category.name === action.payload
      );
    },
    filterProductsByName(state, action) {
      state.products = action.payload;
    },
  },
});

export const { fetchProducts, filterProductsByCategory, filterProductsByName } =
  productsSlice.actions;
export default productsSlice.reducer;
