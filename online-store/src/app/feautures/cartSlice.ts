import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IProduct } from "../../types/types";

interface CartSliceProps {
  cart: IProduct[],
}

const initialState: CartSliceProps = {
  cart: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<IProduct>) {
      const item = state.cart.find(cartItem => cartItem.id === action.payload.id);
      if (!item) {
        state.cart.push(action.payload);
      }
    },
    removeFromCart(state, action: PayloadAction<IProduct>) {
      state.cart = state.cart.filter(cartItem => cartItem.id !== action.payload.id);
    }
  },
})

export default cartSlice.reducer;
export const { addToCart, removeFromCart }  = cartSlice.actions;
export const getTotalCart = ((state: RootState) => state.cart.cart);