import React, { useEffect } from "react";
import { NETFLIX_LOGO, SIGNOUT_ICON } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
      if(currentUser) {
        const { displayName, uid, email, photoURL } =currentUser ;
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
    })
    return ()=>unsubscribe()
  },[])

  const handleSignout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Sign Out Error', error);
    }
  };
  return (
    <>
      {user ? (
        <div className="flex justify-between w-full absolute z-10">
          <div className="mx-4">
            <img src={NETFLIX_LOGO} alt="netflix-logo" className="w-44"></img>
          </div>

          <div className="flex flex-row items-center">
            <div className="mx-2">
              <img src={user?.userPhoto} alt="user-icon" className="w-12"></img>
            </div>
            <div className="mx-2">
              <img
                src={SIGNOUT_ICON}
                alt="signout-icon"
                className="w-8 cursor-pointer"
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
