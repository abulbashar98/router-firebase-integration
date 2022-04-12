import React from 'react';
import useFirebase from '../hooks/useFirebase';

const Login = () => {

    const { user, signInWithGoogle } = useFirebase()



    return (
        <div>
            <h2>Please Login</h2>
            <div style={{ margin: '20px' }}>
                <button onClick={signInWithGoogle}>Sign in with Google</button>
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