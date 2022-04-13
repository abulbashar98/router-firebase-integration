import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import app from '../../firebase.init';


const auth = getAuth(app)


const Login = () => {

    const [signInWithGoogle] = useSignInWithGoogle(auth)


    return (
        <div>
            <h2>Please Login</h2>
            <div style={{ margin: '20px' }}>
                <button onClick={() => signInWithGoogle()}>Sign in with Google</button>
            </div>
            <form >
                <input type="email" name="" id="" placeholder='your email' />
                <br />
                <input type="password" name="" id="" placeholder='your password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;