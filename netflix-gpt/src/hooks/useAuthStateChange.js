import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebaseConfig";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/slices/userSlice";
import { useNavigate } from "react-router-dom";

const useAuthStateChange=() => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
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
}

export default useAuthStateChange;