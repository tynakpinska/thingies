import { createSlice } from "@reduxjs/toolkit";

const initialState = "Shop";

const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    setRoute(state, action) {
      return action.payload;
    },
  },
});

export const { setRoute } = routeSlice.actions;
export default routeSlice;
