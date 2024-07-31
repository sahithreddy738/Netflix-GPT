import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showGptView: false,
    gptSearchResult:null,
    moviesBasedOnSearch:null
  },
  reducers: {
    toggleGptView: (state) => {
      state.showGptView = !state.showGptView;
    },
    addGptSearchResult:(state,action)=>{
      state.gptSearchResult=action.payload;
    },
    addMoviesBasedOnSearch:(state,action)=>{
       state.moviesBasedOnSearch=action.payload;
    }
  },
});

export const { toggleGptView,addGptSearchResult,addMoviesBasedOnSearch} = gptSearchSlice.actions;

export default gptSearchSlice.reducer;
