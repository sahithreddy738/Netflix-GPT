import React from "react";
import { MOVIE_IMAGES_CDN_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleMovieInfo } from "../utils/slices/movieInfoSlice";


const MovieCard = ({ moviePoster,movieId }) => {
 const navigate=useNavigate();
 const dispatch=useDispatch(); 
 const handleMovieClick=() =>{
    dispatch(toggleMovieInfo());
    navigate("/movie-info/"+movieId);
  }
  return (
    <div className="w-44 md:w-48 flex-shrink-0 cursor-pointer" onClick={handleMovieClick}>
      <img src={MOVIE_IMAGES_CDN_URL + moviePoster} alt="movie-poster" className="rounded-md"></img>
    </div>
  );
};

export default MovieCard;
