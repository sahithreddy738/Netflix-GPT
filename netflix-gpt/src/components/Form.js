import React, { useRef, useState } from "react";
import { checkValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/slices/userSlice";


const Form = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const inputUsernameRef = useRef(null);
  const inputEmailRef = useRef(null);
  const inputPasswordRef = useRef(null);
  const toggleSignIn = () => setIsSignIn(!isSignIn);
  const handleClick = () => {
    const message = checkValidation(
      inputEmailRef.current.value,
      inputPasswordRef.current.value,
      inputUsernameRef.current && inputUsernameRef.current.value
    );
    setErrorMessage(message);
    if (message) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        inputEmailRef.current.value,
        inputPasswordRef.current.value
      )
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: inputUsernameRef.current.value,
            photoURL: `Netflix_user.webp`,
          }).then(() => {
            const { displayName, photoURL, email, uid } = auth.currentUser;
            dispatch(
              addUser({
                userName: displayName,
                userId: uid,
                userEmail: email,
                userPhoto: photoURL,
              })
            );
          });
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        inputEmailRef.current.value,
        inputPasswordRef.current.value
      )
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-3/4 left-[50px] px-8 py-10 absolute top-32 bg-black text-white  rounded-lg opacity-90 bg-gradient-to-l  from-black md:w-4/12 md:left-1/3 md:px-16 md:py-14"
    >
      <h1 className="text-3xl m-0 text-white font-bold mt-2 mb-6 md:text-4xl">
        {isSignIn ? "Sign In" : "Sign Up"}
      </h1>
      {!isSignIn ? (
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border border-gray-400 rounded-lg bg-black p-4 my-4"
          ref={inputUsernameRef}
        ></input>
      ) : (
        <></>
      )}
      <input
        type="text"
        placeholder="Email"
        ref={inputEmailRef}
        className="w-full border border-gray-400 rounded-lg bg-black  p-4 my-4"
      ></input>
      <input
        type="password"
        placeholder="Password"
        ref={inputPasswordRef}
        className="w-full border border-gray-400 rounded-lg bg-black  p-4 my-4"
      ></input>
      <h1 className="font-bold text-red-500 my-2">{errorMessage}</h1>
      <button
        className="bg-red-600 rounded-lg w-full p-2 my-4 font-bold text-lg"
        onClick={handleClick}
      >
        {isSignIn ? "Sign in" : "Sign up"}
      </button>
      <div className="w-full space-x-2 flex flex-row md:space-x-2 md:mt-2">
        <p className="text-md md:text-lg text-gray-400">
          {isSignIn ? "New to Netflix?" : "Already registered?"}
        </p>
        <p
          className="text-white text-md md:text-lg cursor-pointer font-bold"
          onClick={toggleSignIn}
        >
          {isSignIn ? "Sign up now." : "Sign in now."}
        </p>
      </div>
    </form>
  );
};

export default Form;
