import React from "react";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";

const MovieVideos = () => {
  const movieVideos = useSelector((store) => store.movies?.movieVideos);
  if (!movieVideos) return <Shimmer />;
  return (
    <>
      <div className="w-full overflow-x-scroll hide-scrollbar  ">
        <h1 className="font-bold text-2xl mb-1 md:mb-4">Movie Related Videos</h1>
        {movieVideos &&
          movieVideos.map((video) => (
            <div className=" flex flex-row md:space-x-10 mb-6  items-start md:border-none" key={video.key}>
              <div className="flex-shrink-0">
                {video.key ? (
                  <iframe
                    className="w-[75%] md:w-full rounded-md"
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                ) : (
                  <div className="bg-gray-500"></div>
                )}
              </div>
              <div className="flex flex-col space-y-3 -ml-10 md:-ml-0  md:space-y-4">
                <h1 className="font-bold text-base md:text-lg">{video.name}</h1>
                <h1 className="text-lg">{video.type}</h1>
                <h1 className="text-lg hidden md:block">{video.published_at}</h1>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default MovieVideos;
