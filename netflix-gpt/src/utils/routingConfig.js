import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Browse from "../components/Browse";
import MovieInfoPage from "../components/MovieInfoPage";
import CustomError from "../components/CustomError";

export const appRouter=createBrowserRouter([
    {
       path:"/",
       element:<Login/>
    },
    {
       path:"/login",
       element:<Login/>
    },
    {
       path:"/browse",
       element:<Browse />,
       errorElement:<CustomError/>
    },
    {
      path:"/movie-info/:movieId",
      element:<MovieInfoPage/>,
      ErrorBoundary:CustomError
    }
 ])