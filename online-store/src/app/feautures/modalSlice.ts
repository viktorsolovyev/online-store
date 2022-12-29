import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  modal: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal(state, action: PayloadAction<boolean>) {
      state.modal = action.payload;
    }
  }
})

export default modalSlice.reducer;
export const isCartOpen = ((state: RootState) => state.modal.modal);
export const { toggleModal } = modalSlice.actions;