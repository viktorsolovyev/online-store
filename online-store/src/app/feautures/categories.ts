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
      categoryName: 'Bathroom',
    },
    {
      id: 2,
      categoryName: 'Bedroom',
    },
    {
      id: 3,
      categoryName: 'Entryway',
    },
    {
      id: 4,
      categoryName: 'Home Office',
    },
    {
      id: 5,
      categoryName: 'Kids Room',
    },
    {
      id: 6,
      categoryName: 'Kitchen & Dining',
    },
    {
      id: 7,
      categoryName: 'Living Room',
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