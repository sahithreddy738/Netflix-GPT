import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import movieReducer from "./slices/moviesSlice";
import gptReducer from "./slices/gptSearchSlice";
import configReducer from "./slices/configSlice"

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gptSearch: gptReducer,
    appConfig:configReducer
  },
});

export default appStore;
