import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import useMovieCast from "../hooks/useMovieCast";
import useMovieVideos from "../hooks/useMovieVideos";
import { LEFT_ARROW_ICON, NETFLIX_BACKGROUND_IMAGE } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import MovieDetailsCard from "./MovieDetailsCard";
import MovieCast from "./MovieCast";
import MovieVideos from "./MovieVideos";
import { addMovieCast, addMovieDetails } from "../utils/slices/movieInfoSlice";
import Shimmer from "./Shimmer";

const MovieInfoPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const { movieCast, movieDetails } = useSelector(
    (store) => store.movieInformation
  );
  useEffect(() => {
    if (!user) navigate("/");
    window.scrollTo(0, 0);
  }, [navigate, user]);
  useMovieDetails(movieId);
  useMovieCast(movieId);
  useMovieVideos(movieId);
  const handleLeftArrowClick = () => {
    navigate(-1);
    dispatch(addMovieDetails(null));
    dispatch(addMovieCast(null));
  };
  return (
    <div className="relative min-h-screen">
      <img
        src={NETFLIX_BACKGROUND_IMAGE}
        alt="netflix-background-img"
        className="fixed w-full h-full object-cover"
      />
      <div
        className="fixed top-4 left-4 w-14 md:w-16  cursor-pointer"
        onClick={handleLeftArrowClick}
      >
        <img src={LEFT_ARROW_ICON} alt="left-arrow" className="bg-cover" />
      </div>
      <div className="text-white rounded-md flex flex-col space-y-4 relative  bg-black bg-opacity-65 mx-auto w-[90%] top-24  p-5  md:top-16 md:px-6 md:pt-6  md:w-[75%] ">
        {!movieCast || !movieDetails ? (
          <Shimmer />
        ) : (
          <>
            <MovieDetailsCard />
            <MovieCast />
            <MovieVideos />
          </>
        )}
      </div>
    </div>
  );
};

export default MovieInfoPage;
