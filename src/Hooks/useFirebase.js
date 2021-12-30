import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import firebaseInitializeApp from "../Firebase/firebaseInitializeApp";

// firebaseInitializeApp();

const useFirebase = () => {

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }

    return (
        signInUsingGoogle
    );
};

export default useFirebase;