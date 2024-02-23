import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    fetchCategories(state, action) {
      return action.payload.payload;
    },
  },
});

export const { fetchCategories } = categoriesSlice.actions;
export default categoriesSlice;
