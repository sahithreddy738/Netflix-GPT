import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Shimmer from "./Shimmer";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return <Shimmer />;
  return (
    <div className="bg-black">
      <div className="-mt-48 flex flex-col">
        <MovieList
          title={"Now Playing"}
          movieData={movies.nowPlayingMovies}
        ></MovieList>
        <MovieList
          title={"Upcoming"}
          movieData={movies.upcomingMovies}
        ></MovieList>
        <MovieList
          title={"Top Rated"}
          movieData={movies.topRatedMovies}
        ></MovieList>
        <MovieList
          title={"Popular"}
          movieData={movies.popularMovies}
        ></MovieList>
      </div>
    </div>
  );
};

export default SecondaryContainer;
