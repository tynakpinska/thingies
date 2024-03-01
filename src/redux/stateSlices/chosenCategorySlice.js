import { createSlice } from "@reduxjs/toolkit";

const initialState = "All categories";

const chosenCategorySlice = createSlice({
  name: "chosenCategory",
  initialState,
  reducers: {
    setCategory(state, action) {
      return action.payload.payload;
    },
  },
});

export const { setCategory } = chosenCategorySlice.actions;
export default chosenCategorySlice;