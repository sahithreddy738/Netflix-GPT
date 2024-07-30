import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { API_OPTIONS, MOVIE_CAST_URL1, MOVIE_CAST_URL2 } from "../utils/constants";
import { addMovieCast } from "../utils/slices/movieInfoSlice";


const useMovieCast=(id)=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        fetchMovieCastDetails()
    },[])
    const fetchMovieCastDetails=async () =>{
        const res=await fetch(MOVIE_CAST_URL1+id+MOVIE_CAST_URL2,API_OPTIONS);
        const json=await res.json();
        dispatch(addMovieCast(json));
    }
}

export default useMovieCast;