import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isLoaderOpen: false,
  },
  reducers: {
    toogleLoader: (state) => {
      state.isLoaderOpen = !state.isLoaderOpen;
    },
  },
});

export const { toogleLoader } = appSlice.actions;
export default appSlice.reducer;