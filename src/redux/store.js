import { configureStore } from "@reduxjs/toolkit";
import { shopApi } from "./shopApi";
import productsSlice from "./stateSlices/productsSlice";
import categoriesSlice from "./stateSlices/categoriesSlice";

import productsReducer from "./stateSlices/productsSlice";
import categoriesReducer from "./stateSlices/categoriesSlice";

export const store = configureStore(
  {
    reducer: {
      // Add the generated reducer as a specific top-level slice
      [shopApi.reducerPath]: shopApi.reducer,
      [productsSlice.name]: productsSlice.reducer,
      [categoriesSlice.name]: categoriesSlice.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(shopApi.middleware),
  },
  {
    products: productsReducer,
    categories: categoriesReducer,
  }
);

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
