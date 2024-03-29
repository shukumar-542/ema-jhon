import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const authContext = createContext(null);
const auth = getAuth(app)


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        return signOut(auth)
    }
    //on Auth observer 
    useEffect(()=>{
        const unSubscriber = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            return unSubscriber();
        }
    },[]) 
    
    const authInfo ={
        user,
        createUser,
        signInUser,
        logOut,
        loading
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;