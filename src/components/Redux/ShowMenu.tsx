import { createSlice } from "@reduxjs/toolkit";

export interface MenuState {
  menuState: boolean;
}

const initialState: MenuState = {
  menuState: false,
};

export const MenuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.menuState = !state.menuState;
    },
  },
});

export const { toggleMenu } = MenuSlice.actions;

export default MenuSlice.reducer;
