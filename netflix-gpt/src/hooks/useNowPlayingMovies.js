import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING_MOVIES_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/slices/moviesSlice";


const useNowPlayingMovies = () => {
  const dispatch=useDispatch();
  const nowPlayingMovies=useSelector((store)=>store.movies.nowPlayingMovies);
  useEffect(()=>{
    if(nowPlayingMovies.length>0) return;
    fetchNowPlayingMovies();
 },[])
 const fetchNowPlayingMovies=async () => {
   const response=await fetch(NOW_PLAYING_MOVIES_URL,API_OPTIONS);
   const jsonData=await response.json();
   dispatch(addNowPlayingMovies(jsonData.results));
 }  
}

export default useNowPlayingMovies;