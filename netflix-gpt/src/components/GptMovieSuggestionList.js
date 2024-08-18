import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Shimmer from "./Shimmer";

const GptMovieSuggestionList = () => {
  const { gptSearchResult, moviesBasedOnSearch } = useSelector(
    (store) => store.gptSearch
  );
  if (gptSearchResult?.length === 0 || moviesBasedOnSearch?.length === 0)
    return <Shimmer/>;
  return (
    <div className="">
      {gptSearchResult &&
        moviesBasedOnSearch &&
        gptSearchResult.map((movie, ind) => (
          <MovieList
            title={movie}
            movieData={moviesBasedOnSearch[ind]}
            className="mb-2"
          />
        ))}
    </div>
  );
};

export default GptMovieSuggestionList;
