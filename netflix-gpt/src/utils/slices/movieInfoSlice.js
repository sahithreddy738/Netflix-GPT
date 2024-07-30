import { createSlice } from "@reduxjs/toolkit";


const movieInfoSlice=createSlice({
    name:'movieInformation',
    initialState:{
        movieDetails:null,
        movieCast:null,
        showMovieInfo:false,
    },
    reducers:{
        addMovieDetails:(state,action)=>{
            state.movieDetails=action.payload
        },
        addMovieCast:(state,action) =>{
            state.movieCast=action.payload
        },
        toggleMovieInfo:(state)=>{
           state.showMovieInfo=!state.showMovieInfo
        }
    }
})

export const {addMovieDetails,addMovieCast,toggleMovieInfo}=movieInfoSlice.actions;

export default movieInfoSlice.reducer;