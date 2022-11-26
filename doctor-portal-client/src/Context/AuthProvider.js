import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider();

    const facebookProvider = new FacebookAuthProvider();

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    };

    const facebookSignIn = () => {
        return signInWithPopup(auth, facebookProvider)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user obserbing');
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();

    }, [])

    const authInfo = {
        createUser, signIn, user, logOut, updateUser, loading, googleSignIn,
        githubSignIn, facebookSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;