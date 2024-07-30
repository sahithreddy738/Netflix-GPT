import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import useMovieCast from "../hooks/useMovieCast";
import useMovieVideos from "../hooks/useMovieVideos";
import {  LEFT_ARROW_ICON, MOVIE_IMAGES_CDN_URL, NETFLIX_BACKGROUND_IMAGE } from "../utils/constants";
import { useSelector } from "react-redux";
import MovieDetailsCard from "./MovieDetailsCard";
import MovieCast from "./MovieCast";
import MovieVideos from "./MovieVideos";


const MovieInfoPage = () => {
  const { movieId } = useParams();
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user);
  useEffect(()=>{
    if(!user) navigate("/");
    window.scrollTo(0, 0);
  },[]);
  useMovieDetails(movieId);
  useMovieCast(movieId);
  useMovieVideos(movieId);
  // const {movieDetails}=useSelector((store)=>store.movieInformation);
  // if(!movieDetails) return;
  // const {backdrop_path}=movieDetails;
  return (
    <div className="relative min-h-screen">
      <img
        src={NETFLIX_BACKGROUND_IMAGE}
        alt="netflix-background-img"
        className="fixed w-full h-full object-cover"
      />
      <div className="fixed top-4 left-4 w-16 cursor-pointer" onClick={()=>navigate(-1)}>
        <img src={LEFT_ARROW_ICON} alt="left-arrow" className="bg-cover" />
      </div>
      <div className="relative z-10 bg-black bg-opacity-65 mx-auto top-16 p-6 w-[70%] text-white flex flex-col space-y-4">
        <MovieDetailsCard />
        <MovieCast />
        <MovieVideos />
      </div>
    </div>
  );
};

export default MovieInfoPage;

