import React, { useRef } from 'react'
import {auth} from "../firebase.js";
import "./SignUpScreen.css";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from '@firebase/auth';


function SignUpScreen(props) {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const register = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
        )
        .then((authUser) =>{
            console.log(authUser);
            props.onTrigger(authUser);
        })
        .catch((error) =>{
            alert(error.message);
        });
    }
    const signIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
        )
        .then((authUser) =>{
            console.log(authUser);
            props.onTrigger(authUser);
        })
        .catch((error) =>{
            alert(error.message);
        });
    }

    return (
        <div className="SignupScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email" />
                <input ref={passwordRef} placeholder="Password" type="password" />
                <button type="Submit" onClick={signIn}>Sign In</button> 
                <h4><span className="SignupScreen_grey">New to Netflix? </span><span onClick={register} className="SignupScreen_link">Sign up now.</span></h4>
            </form>
        </div>
    )
}

export default SignUpScreen
