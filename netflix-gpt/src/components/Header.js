import React from "react";
import {
  LANGUAGE_OPTIONS,
  NETFLIX_LOGO,
  SIGNOUT_ICON,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {  signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { toggleGptView } from "../utils/slices/gptSearchSlice";
import { setLanguage } from "../utils/slices/configSlice";
import languageWords from "../utils/languageConstants";
import useAuthStateChange from "../hooks/useAuthStateChange";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptView = useSelector((store) => store.gptSearch.showGptView);
  useAuthStateChange();
  const language=useSelector((store)=>store.appConfig.language);
  const handleSignout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign Out Error", error);
    }
  };
  const handleGptToggle = () => {
    dispatch(toggleGptView());
  };
  const handleLanguageChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };
  return (
    <>
      {user ? (
        <div className="flex justify-between w-full absolute z-10 flex-col space-y-2 top-3 md:top-0 md:flex-row">
          <div className="w-full mx-auto  md:mx-4 md:w-44 md:bg-none">
            <img src={NETFLIX_LOGO} alt="netflix-logo" className="w-44 mx-auto md:mx-0"></img>
          </div>

          <div className="flex flex-row space-x-4 mx-4 items-center justify-between">
            {showGptView ? (
              <select
                className="px-4 py-2 rounded-md bg-red-500 text-black font-medium border-none"
                onChange={handleLanguageChange}
              >
                {LANGUAGE_OPTIONS.map((lang) => (
                  <option
                    key={lang.value}
                    value={lang.value}
                    className="bg-gray-500 mb-2"
                  >
                    {lang.name}
                  </option>
                ))}
              </select>
            ) : (
              <></>
            )}
            <button
              className="bg-red-600 text-black px-4 py-2  rounded-lg font-bold cursor-pointer"
              onClick={handleGptToggle}
            >
              {showGptView ? languageWords[language].homePage : "GPT Search"}
            </button>
            <div className="mx-0 md:mx-2 hidden md:block">
              <img
                src={user?.userPhoto}
                alt="user-icon"
                className="w-12"
              ></img>
            </div>
            <div className="mx-2 bg-transparent">
              <img
                src={SIGNOUT_ICON}
                alt="signout-icon"
                className="w-8 cursor-pointer bg-opacity-50"
                onClick={handleSignout}
              ></img>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed z-10 w-44 left-[110px] sm:left-28 md:w-52 md:left-[100px]">
          <img src={NETFLIX_LOGO} alt="netflix-logo"></img>
        </div>
      )}
    </>
  );
};

export default Header;
