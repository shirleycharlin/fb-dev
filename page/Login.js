/**
 * 
 * Login.js
 * signInUserWithEmailAndPassword function from
 * firebase/auth.
 * 
 */

import React, {useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../header-firebase";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //auth = getAuth(); 
    // try-catch exception to validate user login
    const onLogin = (e) => {

        // event prevent default
        // Prevent the form from submitting
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) =>{

            // sign in user
            const user = userCredential.user;
            // Go to home page
            navigate("/");
            console.log(user);
            console.log("ok liao");

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            console.log("Sian lah, login page got error");
        });

    }
    // End of onLogin

    // Start user interface
    return(
        <main>
            <section className="mainBodySection">
                <div>
                    <p>@shirleycharlin Dev - Login</p>
                    <form>
                        <div>
                            <label htmlFor="email-adress">
                                Email Address
                            </label>
                            <input id="email-address" name="email" type="email" required placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="password">
                                Password
                            </label>
                            <input id="password" name="password" type="password" required placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <div>
                            <button onClick={onLogin}>Login</button>
                        </div>
                    </form>
                    <p className="text-sm text-white text-center">
                        No Account yet? {' '}
                        <NavLink to="/signUp">Sign Up Here</NavLink>
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Login