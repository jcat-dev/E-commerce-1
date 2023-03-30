import { createSlice, createEntityAdapter } from "@reduxjs/toolkit"
import { Product } from "@/types/product"
import { RootState } from "src/appRedux/store"

const shoppingCartAdapter = createEntityAdapter<Product>()

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: shoppingCartAdapter.getInitialState(),
  reducers: {
    addProduct: shoppingCartAdapter.addOne,
    removeProduct: shoppingCartAdapter.removeOne,
    updateProduct: shoppingCartAdapter.updateOne
  }
})

export const {
  addProduct,
  removeProduct,
  updateProduct
} = shoppingCartSlice.actions

export default shoppingCartSlice.reducer

export const {
  selectById: getProductById,
  selectIds: getProductsIds,
  selectTotal: getProductsLength,
  selectAll: getProducts
} = shoppingCartAdapter.getSelectors<RootState>((state) => state.productsReducer)