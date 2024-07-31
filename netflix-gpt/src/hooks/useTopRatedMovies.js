import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/slices/moviesSlice";


const useTopRatedMovies=()=>{
    const dispatch=useDispatch();
    const topRatedMovies=useSelector((store)=>store.movies.topRatedMovies)
    useEffect(()=>{
        if(topRatedMovies.length>0) return;
        fetchTopRatedMovies();
    },[]);
    const fetchTopRatedMovies=async() =>{
        const res=await fetch("https://api.themoviedb.org/3/movie/top_rated",API_OPTIONS);
        const jsonData=await res.json();
        dispatch(addTopRatedMovies(jsonData.results));
    }
}
export default useTopRatedMovies;