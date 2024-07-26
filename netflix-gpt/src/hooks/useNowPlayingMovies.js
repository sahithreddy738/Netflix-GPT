import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING_MOVIES_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/slices/moviesSlice";


const useNowPlayingMovies = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    fetchNowPlayingMovies();
 },[])
 const fetchNowPlayingMovies=async () => {
   const response=await fetch(NOW_PLAYING_MOVIES_URL,API_OPTIONS);
   const jsonData=await response.json();
   dispatch(addNowPlayingMovies(jsonData.results));
 }  
}

export default useNowPlayingMovies;