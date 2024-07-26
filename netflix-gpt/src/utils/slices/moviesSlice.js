import { createSlice } from "@reduxjs/toolkit";


const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:[],
        movieVideos:[]
    },
    reducers:{
        addNowPlayingMovies:(state,action) =>{
            state.nowPlayingMovies=action.payload
        },
        addMovieVideos:(state,action) =>{
            state.movieVideos=action.payload
        }
    }
})
export const {addNowPlayingMovies,addMovieVideos}=moviesSlice.actions;

export default moviesSlice.reducer;