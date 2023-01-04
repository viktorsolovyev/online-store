import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
// import { getAllProducts } from "./productsSlice";

interface MainPricesProps {
  prices: number[],
}

function getPrices() {
  
  // const totalProducts = getAllProducts;

  return [ 50, 100, 150, 200 ];
}

// const prices = getPrices();
const initialState: MainPricesProps = {
  prices: getPrices(),
}

const pricesSlice = createSlice({
  name: 'prices',
  initialState,
  reducers: {},
})

export const getAllPrices = ((state: RootState) => state.prices.prices);
export default pricesSlice.reducer;