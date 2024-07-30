import React from "react";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";

const MovieVideos = () => {
  const movieVideos = useSelector((store) => store.movies?.movieVideos);
  if (!movieVideos) return <Shimmer />;
  return (
    <>
      <div>
        <h1 className="font-bold text-2xl mb-4">Movie Related Videos</h1>
        {
            movieVideos && movieVideos.map((video)=>(
                <div className=" flex flex-row space-x-10 mb-6" key={video.key}>
                <div className="flex-shrink-0">
                  {video.key?<iframe
                    className="w-full rounded-md"
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                  ></iframe>:<div className="bg-gray-500"></div>} 
                </div>
                <div className="flex flex-col space-y-4">
                  <h1 className="font-semibold text-lg">{video.name}</h1>
                  <h1 className="text-lg">{video.type}</h1>
                  <h1 className="text-lg">{video.published_at}</h1>
                </div>
              </div>
            ))
        }
      </div>
    </>
  );
};

export default MovieVideos;
