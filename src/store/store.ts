import { configureStore } from "@reduxjs/toolkit"
import { cartSlice } from "./cart-slice"


const configureStore({
      reducer: {
        cart: cartSlice.reducer
      }
})

