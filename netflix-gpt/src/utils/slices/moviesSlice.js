import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    movieVideos: [],
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieVideos: (state, action) => {
      state.movieVideos = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addMovieVideos,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
