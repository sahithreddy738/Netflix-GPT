import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movieData,title }) => {
    return (
    <div className="flex mx-6 flex-col space-y-4 relative z-20">
      <h1 className="font-medium text-2xl text-white">{title}</h1>
      <div className="flex space-x-4 overflow-x-scroll hide-scrollbar">
        {movieData.map((movie) => (
          <MovieCard key={movie.id} moviePoster={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
