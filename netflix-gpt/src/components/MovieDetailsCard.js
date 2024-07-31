import React from "react";
import { useSelector } from "react-redux";
import { MOVIE_IMAGES_CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const MovieDetailsCard = () => {
  const { movieDetails } = useSelector((store) => store.movieInformation);
  if(!movieDetails) return <Shimmer />;
  const {
    original_title,
    genres,
    poster_path,
    runtime,
    overview,
    adult,
    release_date,
    vote_average,
  } = movieDetails;
  return (
    <div className="flex flex-row space-x-3 overflow-x-scroll hide-scrollbar">
      <div className="m-2 md:m-4 flex-shrink-0">
        <img
          alt="movie-poster"
          src={MOVIE_IMAGES_CDN_URL + poster_path}
          className="w-36 sm:w-52 md:w-[250px] h-auto"
        ></img>
      </div>
      <div className="flex flex-col items-start space-y-3 md:space-y-4 mt-2">
        <h1 className="font-bold text-xl">{original_title}</h1>
        <p className="">{overview}</p>
        <div className="flex flex-row">
          {genres.map((genre) => (
            <h1 key={genre.id}>{genre.name + ","}</h1>
          ))}
        </div>
        <h3>Rating:{vote_average.toFixed(1)}</h3>
        <h3>{release_date}</h3>
        <h3>{runtime} minutes</h3>
        <span>{adult ? "A" : ""}</span>
      </div>
    </div>
  );
};

export default MovieDetailsCard;
