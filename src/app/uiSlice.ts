import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    theme: "light",
    menuOpen: false,
    activeSection: "home",
  },
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setMenuOpen(state, action) {
      state.menuOpen = action.payload;
    },
    setActiveSection(state, action) {
      state.activeSection = action.payload;
    },
  },
});

export const { toggleTheme, setMenuOpen, setActiveSection } = uiSlice.actions;
export default uiSlice.reducer;
