import React from "react";
import GptSearchBar from "./GptSearchBar";
import { NETFLIX_BACKGROUND_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <div >
      <div>
        <img
          src={NETFLIX_BACKGROUND_IMAGE}
          alt="netflix-backgroung-img"
          className="absolute -z-10 brightness-50 h-screen w-full object-cover md:w-full md:h-full"
        ></img>
      </div>
      <GptSearchBar />
    </div>
  );
};

export default GptSearch;
