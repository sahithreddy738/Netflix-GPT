import React from "react";
import { MOVIE_IMAGES_CDN_URL } from "../utils/constants";

const MovieCard = ({ moviePoster }) => {
  return (
    <div className="w-48 flex-shrink-0">
      <img src={MOVIE_IMAGES_CDN_URL + moviePoster} alt="movie-poster" className="rounded-md"></img>
    </div>
  );
};

export default MovieCard;
