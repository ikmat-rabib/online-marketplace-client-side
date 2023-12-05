import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios from "axios";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext(null);

const auth = getAuth(app);


// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                // get access token
                axios.post('https://assignment-11-server-puce-iota.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                        if (res.data.success) {
                            Navigate(location?.state ? location?.state : '/')
                        }
                    })

            })
            .catch(error => {
                console.log(error);
            })
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);

    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user on auth changed', currentUser);
            const userEmail = currentUser?.email || user?.email
            const loggedUser = { email: userEmail }

            setUser(currentUser)
            setLoading(false)

            if (currentUser) {

                axios.post('https://assignment-11-server-puce-iota.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('tkn res', res.data);
                    })
            }
            else {
                axios.post('https://assignment-11-server-puce-iota.vercel.app/logout', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
            }
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        logOut,
        signIn,
        handleGoogleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;