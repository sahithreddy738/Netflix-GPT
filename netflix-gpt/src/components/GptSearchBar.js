import React, {  useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import languageWords from "../utils/languageConstants";
import openai from "../utils/aiConfig";
import {
  API_OPTIONS,
  MOVIE_BY_NAME1,
  MOVIE_BY_NAME2,
} from "../utils/constants";
import { addGptSearchResult, addMoviesBasedOnSearch } from "../utils/slices/gptSearchSlice";

const GptSearchBar = () => {
  const [searchDisabled,setSearchDisabled]=useState(false);
  const language = useSelector((store) => store.appConfig.language);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const fetchMovieBasedOnName = async (movie_name) => {
    const resp = await fetch(
      MOVIE_BY_NAME1 + movie_name + MOVIE_BY_NAME2,
      API_OPTIONS
    );
    const jsonData = await resp.json();
    return jsonData.results;
  };
  const handleSearchClick = async () => {
    setSearchDisabled(true);
    const gptQuery =
      "Act as a Movie Recommendation system and suggest popular,top rated movies for the query:" +
      inputRef.current.value +
      ".only give me names of 7 movies, each movie separated by comma as example given ahead.Example-kalki,bahubali,pushpa,sahoo,salaar";
    try {
      const chatCompletion = await openai.chat.completions.create({
        messages: [
          {
            role: "user",
            content: gptQuery,
          },
        ],
        model: "gpt-3.5-turbo",
      });
      const gptResult = chatCompletion.choices?.[0]?.message?.content;
      const gptRecommendedMovies = gptResult.split(",");
      const promiseArray = gptRecommendedMovies.map((movie) =>
        fetchMovieBasedOnName(movie)
      );
      const gptMovies = await Promise.all(promiseArray);
      dispatch(addMoviesBasedOnSearch(gptMovies));
      dispatch(addGptSearchResult(gptRecommendedMovies));
      setSearchDisabled(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-row space-x-2 sm:space-x-4 md:space-x-4 px-1 py-2 md:p-4  w-[100%] md:top-20 md:w-[75%]">
      <input
        className="text-black  w-[78%]  md:w-[78%] px-1 py-2 md:text-lg md:px-4 md:py-2 rounded-md "
        placeholder={languageWords[language].gptPlaceholder}
        ref={inputRef}
      ></input>
      <button
        onClick={handleSearchClick}
        disabled={searchDisabled}
        className="w-[20%] md:w-[22%] px-1 py-2 md:px-4 md:py-2 md:text-lg rounded-md bg-red-600 text-white cursor-pointer"
      >
        {languageWords[language].search}
      </button>
    </div>
  );
};

export default GptSearchBar;
