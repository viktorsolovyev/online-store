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
      categoryName: 'Home',
    },
    {
      id: 2,
      categoryName: 'Kitchen',
    },
    {
      id: 3,
      categoryName: 'Work',
    },
    {
      id: 4,
      categoryName: 'Travel',
    },
    {
      id: 5,
      categoryName: 'Tech',
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