import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ICart, IProduct } from "../../types/types";

interface CartSliceProps {
  cart: ICart[],
}

const initialState: CartSliceProps = {
  cart: [
    {
      id: 1,
      categoryId: 6,
      image: 'https://cdn.sanity.io/images/nmk5oubi/production/4f6d518d83cef246be3516cfc00b09161d15014e-1620x1680.jpg?w=1440&h=1493&auto=format&q=85',
      gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/4f6d518d83cef246be3516cfc00b09161d15014e-1620x1680.jpg?w=1440&h=1493&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/8f9d98b352918e8eef3f3a620a3ba987a11dad50-1680x1620.jpg?w=1440&h=1389&auto=format&q=85'],
      title: '5-Piece Ultimate Tool Set',
      brand: 'GIR',
      price: 64.75,
      sale: 8,
      raiting: 4.9,
      stock: 125,
      description: 'The Mediterranean Set is inspired by coastal hues, earthy tones, and fresh, bright flavors best enjoyed together.',
      amount: 1
    },
    {
      id: 2,
      categoryId: 6,
      image: 'https://cdn.sanity.io/images/nmk5oubi/production/492642c99605c45988c8ce0950bd49fb4c707214-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',
      gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/492642c99605c45988c8ce0950bd49fb4c707214-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/500fd173ddf4ce3da4a688b0714565c117607b34-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/75b2a5af9de8897eb2e48ce4da24145bb4505d1a-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/aa2b51cc129f52dfccbc4d0b78c3be2552e43aa9-1680x1620.jpg?w=1440&h=1389&auto=format&q=85'],
      title: '850 ml Glass French Press',
      brand: 'Yield Design',
      price: 85,
      sale: 0,
      raiting: 5.0,
      stock: 4,
      amount: 1,
      description: 'The Yield French Press is made using premium borosilicate glass that is most commonly associated with laboratory glassware and high-end kitchenware. It provides a delicate appearance and superior durability.'
    },
  ],
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
    },
    removeFromCart(state, action: PayloadAction<IProduct>) {
      state.cart = state.cart.filter(cartItem => cartItem.id !== action.payload.id);
    }
  },
})

export default cartSlice.reducer;
export const { addToCart, removeFromCart }  = cartSlice.actions;
export const getTotalCart = ((state: RootState) => state.cart.cart);