export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const NETFLIX_BACKGROUND_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_medium.jpg";
export const NETFLIX_USER_ICON =
  "https://preview.redd.it/sgfxdosc4qo81.png?width=338&format=png&auto=webp&s=68081fe5673ff6ac567a531ae01a786ca80695f6";
export const SIGNOUT_ICON =
  "https://png.pngtree.com/background/20240302/original/pngtree-arrow-right-flat-red-color-icon-black-background-east-point-photo-picture-image_7920466.jpg";
export const NETFLIX_PLAY_ICON =
  "https://miro.medium.com/v2/da:true/resize:fit:768/1*IDJ4x4E-bOypnEZdA5TGHQ.gif";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+process.env.REACT_APP_TMDB_KEY,
  },
};
export const NOW_PLAYING_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const POPULAR_MOVIES_URL = "https://api.themoviedb.org/3/movie/popular";
export const TOPRATED_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/top_rated";
export const UPCOMING_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/upcoming";

export const MOVIE_VIDEOS_URL1 = "https://api.themoviedb.org/3/movie/";
export const MOVIE_VIDEOS_URL2 = "/videos?language=en-US";
export const MOVIE_IMAGES_CDN_URL = "https://image.tmdb.org/t/p/w500/";
export const LANGUAGE_OPTIONS = [
  { name: "English", value: "en" },
  { name: "Hindi", value: "hindi" },
  {name:"Telugu",value:"telugu"}
];
