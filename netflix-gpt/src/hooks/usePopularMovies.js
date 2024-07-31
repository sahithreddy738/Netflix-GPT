import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/slices/moviesSlice";

const usePopularMovies=()=>{
    const dispatch=useDispatch();
    const popularMovies=useSelector((store)=>store.movies.popularMovies);
    useEffect(()=>{
        if(popularMovies.length>0) return;
        fetchPopularMovies();
    },[]);
    const fetchPopularMovies=async() =>{
        const res=await fetch("https://api.themoviedb.org/3/movie/popular",API_OPTIONS);
        const jsonData=await res.json();
        dispatch(addPopularMovies(jsonData.results));
    }
}
export default usePopularMovies;