import { configureStore } from "@reduxjs/toolkit";
import { shopApi } from "./shopApi";
import routeSlice from "./stateSlices/routeSlice";
import productsSlice from "./stateSlices/productsSlice";
import categoriesSlice from "./stateSlices/categoriesSlice";
import chosenCategorySlice from "./stateSlices/chosenCategorySlice";
import cartSlice from "./stateSlices/cartSlice";
import favouritesSlice from "./stateSlices/favouritesSlice";
import currentProductSlice from "./stateSlices/currentProductSlice";

import routeReducer from "./stateSlices/routeSlice";
import productsReducer from "./stateSlices/productsSlice";
import categoriesReducer from "./stateSlices/categoriesSlice";
import cartReducer from "./stateSlices/cartSlice";
import favouritesReducer from "./stateSlices/favouritesSlice";
import currentProductReducer from "./stateSlices/currentProductSlice";

export const store = configureStore(
  {
    reducer: {
      // Add the generated reducer as a specific top-level slice
      [shopApi.reducerPath]: shopApi.reducer,
      [routeSlice.name]: routeSlice.reducer,
      [productsSlice.name]: productsSlice.reducer,
      [categoriesSlice.name]: categoriesSlice.reducer,
      [chosenCategorySlice.name]: chosenCategorySlice.reducer,
      [cartSlice.name]: cartSlice.reducer,
      [favouritesSlice.name]: favouritesSlice.reducer,
      [currentProductSlice.name]: currentProductSlice.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(shopApi.middleware),
  },
  {
    route: routeReducer,
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    favourites: favouritesReducer,
    currentProduct: currentProductReducer,
  }
);

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
