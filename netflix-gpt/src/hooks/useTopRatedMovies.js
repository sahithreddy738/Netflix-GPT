import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/slices/moviesSlice";


const useTopRatedMovies=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        fetchTopRatedMovies();
    },[]);
    const fetchTopRatedMovies=async() =>{
        const res=await fetch("https://api.themoviedb.org/3/movie/top_rated",API_OPTIONS);
        const jsonData=await res.json();
        dispatch(addTopRatedMovies(jsonData.results));
    }
}
export default useTopRatedMovies;