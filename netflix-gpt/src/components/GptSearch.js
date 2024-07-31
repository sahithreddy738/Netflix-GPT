import React from "react";
import GptSearchBar from "./GptSearchBar";
import { NETFLIX_BACKGROUND_IMAGE } from "../utils/constants";
import GptMovieSuggestionList from "./GptMovieSuggestionList";


const GptSearch = () => {
  return (
    <div>
      <div>
        <img
          src={NETFLIX_BACKGROUND_IMAGE}
          alt="netflix-backgroung-img"
          className="fixed -z-10 brightness-50 h-screen w-full object-cover md:w-full md:h-full"
        ></img>
      </div>
      <div className="text-white rounded-md flex flex-col space-y-4 relative  bg-black bg-opacity-65 mx-auto w-[90%] top-44  p-2  md:top-24 md:px-6 md:pt-6  md:w-[75%] ">
        <GptSearchBar />
        <GptMovieSuggestionList />
      </div>
    </div>
  );
};

export default GptSearch;
