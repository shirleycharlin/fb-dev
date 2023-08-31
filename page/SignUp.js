/**
 * 
 * SignUp.js
 * createUserWithEmailAndPassword function from
 * firebase/auth.
 * 
 */

import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../header-firebase';


const SignUp = () => {

    // set navigate as const to direct from SignUp.js
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            // if account created then 
            navigate("/home"); // go to home page

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            console.log("sign up failed.");
        });
    }

    //What will the screen show end user
    return(
        <main>
            <section>
                <div>
                    <div>
                        <h1>shirleycharlin Dev - Sign Up</h1>
                        <form>
                            <div>
                                {/* input field for the users email */}
                                <label htmlFor="email-address">Email</label>
                                <input type="email" label="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email Address"/>

                            </div>
                            <div>
                                {/* input field for the users password */}
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input type="password" label="Create Password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password"/>
                            </div>

                            <button type="submit" onClick={onSubmit}>Sign Up</button>
                        </form>
                        {
                            /*                           
                            If it is existing user then
                            lol the NavLink element is so much easier to direct to another page.
                            */
                        }
                        <p>
                            If you already have an account with us please login instead! {' '}
                            <NavLink to="/login">Login here</NavLink> 
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )

}

export default SignUp;



