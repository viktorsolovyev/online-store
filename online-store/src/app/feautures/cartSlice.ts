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
      price: 64,
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
    {
      id: 3,
      categoryId: 1,
      image: 'https://cdn.sanity.io/images/nmk5oubi/production/5c71d4c4298efd51af7485f76c07b166e3959178-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',
      gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/5c71d4c4298efd51af7485f76c07b166e3959178-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/591d56edbbbad0657c253620cc1a5f7e875b47e8-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/a120ea718949278036675b878ebf1a8c1e5ed589-1640x1620.jpg?w=1440&h=1422&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/9262c6fb59f0c04e7f348b799e4e090fb96a4498-1680x1620.jpg?w=1440&h=1389&auto=format&q=85'],
      title: 'Tile Sets',
      brand: 'LetterFolk',
      price: 12,
      sale: 0,
      raiting: 5,
      stock: 23,
      amount: 1,
      description: 'Each set includes 75 silicone hexagon tiles that are interchangeable with any Letterfolk Tile Mat and stored in a dishwasher-safe mesh cotton drawstring bag.'
  },
  {
      id: 4,
      categoryId: 1,
      image: 'https://cdn.sanity.io/images/nmk5oubi/production/76858bb280dc9a1df9a0efec425b485ea8b01286-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',
      gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/76858bb280dc9a1df9a0efec425b485ea8b01286-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/0a83d793f92558354912d61aac1d6772fa50138e-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/8095064749d888d9b5ef8c75a9ba8e29ca17155a-1680x1620.jpg?w=1440&h=1389&auto=format&q=85'],
      title: 'Toilet Brush',
      brand: 'Zone Denmark',
      price: 90,
      sale: 15,
      raiting: 3.4,
      stock: 12,
      amount: 1,
      description: 'The UME bathroom series is a soft, gentle and pleasant acquaintance.'
  },
  {
      id: 5,
      categoryId: 2,
      image: 'https://cdn.sanity.io/images/nmk5oubi/production/b4d383de743dfc68bd7084996ab19a3449daf772-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',
      gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/b4d383de743dfc68bd7084996ab19a3449daf772-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/e98181947ef6399b7f06eecf46fcf249ac80a6a2-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/2d014fec514706164f6b81084eca30f0c20c4837-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/3b25b6ace4fd5bc09dbcb774c51b0b46c60ded14-1680x1620.jpg?w=1440&h=1389&auto=format&q=85'],
      title: 'Medium Storage Bins',
      brand: 'Open Spaces',
      price: 62,
      sale: 0,
      raiting: 4.6,
      stock: 42,
      amount: 1,
      description: 'Tidy up any room with multi-purpose storage for the shelf, the pantry, and more'
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
    removeFromCart(state, action: PayloadAction<Number>) {
      state.cart = state.cart.filter(cartItem => cartItem.id !== action.payload);
    },
    addAmount(state, action: PayloadAction<Number>) {
      const item = state.cart.find(cartItem => cartItem.id === action.payload);
      if (item) item.amount += 1;
    },
    removeAmount(state, action: PayloadAction<Number>) {
      const item = state.cart.find(cartItem => cartItem.id === action.payload);
      if (item) item.amount -= 1;
    },
    clearCart(state) {
      state.cart = [];
    }
  },
})

export default cartSlice.reducer;
export const { addToCart, removeFromCart, addAmount, removeAmount, clearCart }  = cartSlice.actions;
export const getTotalCart = ((state: RootState) => state.cart.cart);