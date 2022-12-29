import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productReducer from './feautures/productsSlice';
import categoriesReducer from './feautures/categories';
import cartReducer from './feautures/cartSlice';
import modalReducer from './feautures/modalSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    categories:  categoriesReducer,
    cart: cartReducer,
    modal: modalReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
