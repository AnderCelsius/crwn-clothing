import { createContext, useEffect, useState } from "react";
import { firebase } from "../utils/firebase/firebase.component";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  const { createUserDocumentFromAuth } = firebase;

  useEffect(() => {
    const unsubscribe = firebase.onAuthStateChangedListner((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children} </UserContext.Provider>;
};
