import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { useEffect, useState } from "react";


const AuthProvider = ({ children }) => {
  // check that is that user is created or not?

  const [user, setUser] = useState(null);

  // loading

  const [loading, setLoading] = useState(true);
  // create user function
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // create sign in info

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // loged in user observer

  const loggedOut = (auth) => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    // callback functions

    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    loggedOut,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
