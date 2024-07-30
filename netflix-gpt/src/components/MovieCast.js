import React from "react";
import { useSelector } from "react-redux";
import { MOVIE_IMAGES_CDN_URL, USER_NOT_FOUND_ICON } from "../utils/constants";
import Shimmer from "./Shimmer";

const MovieCast = () => {
  const { movieCast } = useSelector((store) => store.movieInformation);
  if (!movieCast) return <Shimmer/>;
  const { cast } = movieCast;
  const filteredCast =
    cast.length > 0 &&
    cast.filter((character) => character.known_for_department === "Acting");
  return (
    <div className="overflow-x-scroll hide-scrollbar">
      <h1 className="text-2xl font-bold mb-2">Cast</h1>
      <div className="flex flex-row space-x-4">
        {filteredCast &&
          filteredCast.map((character) => (
            <>
              <div
                className="flex flex-col w-32 flex-shrink-0"
                key={character.id}
              >
                <img
                  src={
                    character.profile_path
                      ? MOVIE_IMAGES_CDN_URL + character.profile_path
                      : USER_NOT_FOUND_ICON
                  }
                  alt="character-image"
                  className="rounded-md"
                ></img>

                <div className="mt-2 flex flex-col space-y-1">
                  <h1 className="font-bold">{character.name}</h1>
                  <h2>{character.character}</h2>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default MovieCast;
