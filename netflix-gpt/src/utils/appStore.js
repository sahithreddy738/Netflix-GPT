import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import movieReducer from "./slices/moviesSlice";
import gptReducer from "./slices/gptSearchSlice";
import configReducer from "./slices/configSlice";
import movieInfoReducer from "./slices/movieInfoSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gptSearch: gptReducer,
    appConfig:configReducer,
    movieInformation:movieInfoReducer
  },
});

export default appStore;
