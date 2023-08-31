/**
 * 
 * Home.js
 * signInUserWithEmailAndPassword function from
 * firebase/auth.
 * 
 */

import React, {useState, useEffect} from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {auth} from '../header-firebase';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        signOut(auth).then(()=>{
            navigate('Login');
            console.log("Signed out liao!")
    }).catch((error) => {
        // An error happened.
        console.log("Jalat I catch an error leh.")
    });

    }

    
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              console.log("uid", uid)
              console.log(uid,"is here.")
                // navigate to where?
                // stay on home page
            } else {
              // User is signed out
              console.log("user is logged out")
              navigate('Login');
            }
          });
         
    }, [])


    // return
    return(
        <nav>
            <section className="mainBodySection">
                <h1>@shirleycharlin Dev - Home</h1>
            </section>
            <div>
                <button onClick={handleLogout}>Log out</button>
            </div>
        </nav>  
    )
}

export default Home;