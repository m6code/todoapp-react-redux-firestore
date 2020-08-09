import React from 'react';
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom"

const SignIn = () => {
    const firebase = useFirebase();
    const history = useHistory();

    const signInwithGoogle = () => {
        firebase.login({
            provider: "google",
            type: "popup",
        }).then(() => {
            history.push("/todos");
        });
    };

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={(e) => {
                e.preventDefault();
                signInwithGoogle();
            }}>
                Sign In with Google
            </button>
        </div>
    )
}


export default SignIn