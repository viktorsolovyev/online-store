import { createSlice } from "@reduxjs/toolkit";
import { ICategories } from "../../types/types";
import { RootState } from "../store";

interface MainCategoriesProps {
  categories: ICategories[],
}

const initialState: MainCategoriesProps = {
  categories: [
    {
      id: 1,
      name: 'Bathroom',
    },
    {
      id: 2,
      name: 'Bedroom',
    },
    {
      id: 3,
      name: 'Entryway',
    },
    {
      id: 4,
      name: 'Home Office',
    },
    {
      id: 5,
      name: 'Kids Room',
    },
    {
      id: 6,
      name: 'Kitchen & Dining',
    },
    {
      id: 7,
      name: 'Living Room',
    },
  ],
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
})

export const getAllCategories = ((state: RootState) => state.categories.categories);
export default categoriesSlice.reducer;