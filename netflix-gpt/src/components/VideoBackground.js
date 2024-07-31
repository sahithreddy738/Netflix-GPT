import React from "react";
import useMovieVideos from "../hooks/useMovieVideos";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";

const VideoBackground = ({ movieId }) => {
  useMovieVideos(movieId);
  const movieVideos = useSelector((store) => store.movies?.movieVideos);
  if (!movieVideos.length) return <Shimmer/>;
  let trailer = movieVideos.filter(
    (movie) => movie.name === "Official Trailer"
  );
  trailer = trailer.length === 0 ? trailer.push(movieVideos[0]) : trailer;
  return (
    <div className="-mt-36 md:-mt-0 md:h-screen">
      <iframe
        className="aspect-video w-full h-screen"
        src={`https://www.youtube.com/embed/${trailer[0]?.key}?loop=1&autoplay=1&mute=1&playlist=${trailer[0]?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

      ></iframe>
    </div>
  );
};

export default VideoBackground;
