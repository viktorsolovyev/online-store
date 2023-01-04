import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productReducer from './feautures/productsSlice';
import categoriesReducer from './feautures/categories';
import cartReducer from './feautures/cartSlice';
import modalReducer from './feautures/modalSlice';
import filtersReducer from './feautures/filtersSlice';
import brandsReducer from './feautures/brandsSlice';
import pricesReducer from './feautures/pricesSlice';
import searchReducer from './feautures/searchSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    categories:  categoriesReducer,
    brands:  brandsReducer,
    prices:  pricesReducer,
    cart: cartReducer,
    modal: modalReducer,
    filters: filtersReducer,
    search: searchReducer,
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
