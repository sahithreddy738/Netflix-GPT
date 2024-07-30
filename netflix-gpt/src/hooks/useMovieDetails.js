import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { API_OPTIONS, MOVIE_DETAILS_URL } from "../utils/constants";
import { addMovieDetails } from "../utils/slices/movieInfoSlice";

const useMovieDetails=(id)=>{
  const dispatch=useDispatch();
  useEffect(()=>{
     fetchMoviesDetails();
  },[])
  const fetchMoviesDetails=async() => {
     const response=await fetch(MOVIE_DETAILS_URL+id,API_OPTIONS);
     const jsonData=await response.json();
     dispatch(addMovieDetails(jsonData));
  }
}

export default useMovieDetails;