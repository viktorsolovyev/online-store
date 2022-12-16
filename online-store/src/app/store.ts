import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productReducer from './feautures/productsSlice';
import categoriesReducer from './feautures/categories';

export const store = configureStore({
  reducer: {
    products: productReducer,
    categories:  categoriesReducer,
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
