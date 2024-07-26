import React from "react";
import useMovieVideos from "../hooks/useMovieVideos";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useMovieVideos(movieId);
  const movieVideos = useSelector((store) => store.movies?.movieVideos);
  if (!movieVideos.length) return;
  let trailer = movieVideos.filter(
    (movie) => movie.name === "Official Trailer"
  );
  trailer = trailer.length === 0 ? trailer.push(movieVideos[0]) : trailer;
  return (
    <div className="h-full">
      <iframe
        className="w-full h-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailer[0].key}?loop=1&autoplay=1&mute=1&playlist=${trailer[0].key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" 
      ></iframe>
    </div>
  );
};

export default VideoBackground;
