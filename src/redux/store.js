import { configureStore } from '@reduxjs/toolkit'
import { shopApi } from './stateSlices/productsSlice'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [shopApi.reducerPath]: shopApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
})