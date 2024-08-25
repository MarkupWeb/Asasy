import { configureStore } from '@reduxjs/toolkit'
import categories from "./features/categories/categoriesSlice";
import products from "./features/products/productsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { categories, products },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']