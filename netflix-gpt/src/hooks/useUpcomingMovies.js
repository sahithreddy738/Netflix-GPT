import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/slices/moviesSlice";


const useUpcomingMovies=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        fetchUpcomingMovies();
    },[]);
    const fetchUpcomingMovies=async() =>{
        const res=await fetch("https://api.themoviedb.org/3/movie/upcoming",API_OPTIONS);
        const jsonData=await res.json();
        dispatch(addUpcomingMovies(jsonData.results));
    }
}
export default useUpcomingMovies;