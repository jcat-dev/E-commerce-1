import { configureStore } from '@reduxjs/toolkit'
import shoppingCartSlice from 'src/features/shoppingCart/shoppingCartSlice'

export const store = configureStore({
  reducer: {
    productsReducer: shoppingCartSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


 