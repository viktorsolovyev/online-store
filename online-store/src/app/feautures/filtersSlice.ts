import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilter } from "../../types/types";
import { RootState } from "../store";

const filtersSlice = createSlice({
  name: "filters",
  initialState: Array<IFilter>,
  reducers: {
    addFilter(state, action: PayloadAction<IFilter>) {
      const existingItem = state.find((item) => action.payload.name === item.name);
      if (existingItem) {
        if (existingItem.type === "slider") {          
          existingItem.minValue = action.payload.minValue;
          existingItem.maxValue = action.payload.maxValue;
        }
        if (
          existingItem.type === "list" &&
          existingItem.values &&
          action.payload.values
        ) {
          existingItem.values = Array.from(new Set([ ...existingItem.values, ...action.payload.values]));
        }
      } else {
        state.push(action.payload);
      }
    },
    removeFilter(state, action: PayloadAction<IFilter>) {
      const existingItem = state.find((item) => action.payload.name === item.name);
      if (existingItem) {
        if (existingItem.type === "slider") {
          state.splice(state.indexOf(existingItem), 1);
        }
        if (
          existingItem.type === "list" &&
          existingItem.values &&
          action.payload.values
        ) {
          existingItem.values = existingItem.values.filter((item) => !action.payload.values?.includes(item));
          if (existingItem.values.length === 0) {
            state.splice(state.indexOf(existingItem), 1);
          }
        }
      }
    },
  },
});

export const getAllFilters = ((state: RootState) => state.filters);
export const availableFilters = [{name: "category", type: "list"}, {name: "brand", type: "list"}, {name: "price", type: "slider"}];
export const filtersActions = filtersSlice.actions;
export default filtersSlice.reducer;
