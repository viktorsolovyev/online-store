import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ICart, IProduct } from "../../types/types";

interface CartSliceProps {
  cart: ICart[],
}

function getCartStorage() {
  let storageCart: string | null = localStorage.getItem("cart");
  if (storageCart) {
    let parsedCart = JSON.parse(storageCart);
    return parsedCart;
  }
}

const initialState: CartSliceProps = {
  cart: (localStorage.getItem('cart')) ? getCartStorage() : [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<IProduct>) {
      const item = state.cart.find(cartItem => cartItem.id === action.payload.id);
      if (!item) {
        state.cart.push({...action.payload, amount: 1});
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeFromCart(state, action: PayloadAction<Number>) {
      state.cart = state.cart.filter(cartItem => cartItem.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    addAmount(state, action: PayloadAction<Number>) {
      const item = state.cart.find(cartItem => cartItem.id === action.payload);
      if (item && item.amount < item.stock) item.amount += 1;
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeAmount(state, action: PayloadAction<Number>) {
      const item = state.cart.find(cartItem => cartItem.id === action.payload);
      if (item) item.amount -= 1;
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    clearCart(state) {
      state.cart = [];
      localStorage.setItem('cart', JSON.stringify(state.cart));
    }
  },
})

export default cartSlice.reducer;
export const { addToCart, removeFromCart, addAmount, removeAmount, clearCart }  = cartSlice.actions;
export const getTotalCart = ((state: RootState) => state.cart.cart);