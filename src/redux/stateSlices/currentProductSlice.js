import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const currentProductSlice = createSlice({
  name: "currentProduct",
  initialState,
  reducers: {
    setCurrentProduct(state, action) {
      return action.payload;
    },
  },
});

export const { setCurrentProduct } = currentProductSlice.actions;
export default currentProductSlice;
