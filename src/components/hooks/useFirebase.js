import { useState, useEffect } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase.init";


const auth = getAuth(app)

const useFirebase = () => {

    const googleProvider = new GoogleAuthProvider();


    const [user, setUser] = useState({})

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {

                const user = result.user;
                setUser(user)
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])





    return {
        user,
        setUser,
        handleSignOut,
        signInWithGoogle
    };

}

export default useFirebase;