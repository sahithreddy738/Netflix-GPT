import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieVideos } from "../utils/slices/moviesSlice";
import { API_OPTIONS, MOVIE_VIDEOS_URL1, MOVIE_VIDEOS_URL2 } from "../utils/constants";

const useMovieVideos=(id) =>{
    const dispatch=useDispatch();
    useEffect(()=>{
        fetchMovieVideos();
    },[id])
    const fetchMovieVideos=async () =>{
        const response=await fetch(MOVIE_VIDEOS_URL1+id+MOVIE_VIDEOS_URL2,API_OPTIONS);
        const jsonData=await response.json();
        dispatch(addMovieVideos(jsonData.results));
    } 
}
export default useMovieVideos;