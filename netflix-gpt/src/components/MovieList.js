import React from "react";
import MovieCard from "./MovieCard";
import Shimmer from "./Shimmer";

const MovieList = ({ movieData, title }) => {
  return (
    <div className="flex mx-6 flex-col space-y-4 relative z-20 mb-6">
      <h1 className="font-medium text-2xl text-white">{title}</h1>
      <div className="flex space-x-4 overflow-x-scroll hide-scrollbar">
        {movieData.length === 0 ? (
          <Shimmer />
        ) : (
          movieData.map((movie) => (
            <MovieCard
              key={movie.id}
              moviePoster={movie.poster_path}
              movieId={movie.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MovieList;
