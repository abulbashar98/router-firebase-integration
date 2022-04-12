import { useState } from "react"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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



    return { user, setUser, signInWithGoogle };

}

export default useFirebase;