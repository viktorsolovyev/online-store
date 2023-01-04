import { createSlice } from "@reduxjs/toolkit";
import { IBrands } from "../../types/types";
import { RootState } from "../store";

interface MainBrandsProps {
  brands: IBrands[],
}

const initialState: MainBrandsProps = {
  brands: [
    {
      id: 1,
      name: 'GIR',
    },
    {
      id: 2,
      name: 'Yield Design',
    },
    {
      id: 3,
      name: 'LetterFolk',
    },
    {
      id: 4,
      name: 'Zone Denmark',
    },
    {
      id: 5,
      name: 'Open Spaces',
    },
    {
      id: 6,
      name: 'Slash Objects',
    },
    {
      id: 7,
      name: 'Rooted',
    },
    {
      id: 8,
      name: 'Paul Arhold Glass',
    },
    {
      id: 9,
      name: 'PieceWork Puzzles',
    },
  ],
}

const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {},
})

export const getAllBrands = ((state: RootState) => state.brands.brands);
export default brandsSlice.reducer;