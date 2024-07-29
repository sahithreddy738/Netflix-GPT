import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showGptView: false,
  },
  reducers: {
    toggleGptView: (state) => {
      state.showGptView = !state.showGptView;
    },
  },
});

export const { toggleGptView } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;
