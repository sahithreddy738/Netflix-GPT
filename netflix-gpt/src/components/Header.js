import React, { useEffect } from "react";
import {
  LANGUAGE_OPTIONS,
  NETFLIX_LOGO,
  SIGNOUT_ICON,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { toggleGptView } from "../utils/slices/gptSearchSlice";
import { setLanguage } from "../utils/slices/configSlice";
import languageWords from "../utils/languageConstants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGptView = useSelector((store) => store.gptSearch.showGptView);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { displayName, uid, email, photoURL } = currentUser;
        dispatch(
          addUser({
            userName: displayName,
            userId: uid,
            userEmail: email,
            userPhoto: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
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
        <div className="flex justify-between w-full absolute z-10">
          <div className="mx-4">
            <img src={NETFLIX_LOGO} alt="netflix-logo" className="w-44"></img>
          </div>

          <div className="flex flex-row space-x-4 items-center bg-transparent ">
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
              className="bg-red-600 text-black px-4 py-2 mx-2 rounded-lg font-bold cursor-pointer"
              onClick={handleGptToggle}
            >
              {showGptView ? languageWords[language].homePage : "GPT Search"}
            </button>
            <div className="mx-2">
              <img
                src={user?.userPhoto}
                alt="user-icon"
                className="w-12 "
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
        <div className="absolute  left-[100px] z-10">
          <img src={NETFLIX_LOGO} alt="netflix-logo" className="w-52"></img>
        </div>
      )}
    </>
  );
};

export default Header;
