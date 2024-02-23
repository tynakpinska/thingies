import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      return [...state, ...action.payload.payload];
    },
    removeFromCart(state, action) {
      return [...state.filter((product) => product === action.payload.payload)];
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice;
