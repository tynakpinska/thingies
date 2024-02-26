import { createSlice } from "@reduxjs/toolkit";

const initialState = [[0, "All categories"]];

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    fetchCategories(state, action) {
      return [...state, ...action.payload.payload];
    },
  },
});

export const { fetchCategories } = categoriesSlice.actions;
export default categoriesSlice;
