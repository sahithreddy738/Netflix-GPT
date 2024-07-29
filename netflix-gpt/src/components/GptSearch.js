import React from "react";
import GptSearchBar from "./GptSearchBar";
import { NETFLIX_BACKGROUND_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div>
        <img
          src={NETFLIX_BACKGROUND_IMAGE}
          alt="netflix-backgroung-img"
          className="brightness-50 absolute -z-10"
        ></img>
      </div>
      <GptSearchBar />
    </div>
  );
};

export default GptSearch;
