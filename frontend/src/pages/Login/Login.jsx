/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getAuth } from "firebase/auth";

import "./styles.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            const res = await axios.post(
                "http://localhost:5000/api/login",
                { username, password },
                { withCredentials: true }
            );
            
            navigate("/Dashboard");
        } catch (err) {
            console.error("Login failed:",err.message);
        }
    }

    const signInWithGoogle = async () => {
        const auth = getAuth(app); // Get Firebase Auth instance
        const provider = new GoogleAuthProvider(); // Create GoogleAuthProvider instance

        try {
            const result = await signInWithPopup(auth, provider);
            const idToken = await result.user.getIdToken(); // Get ID Token from the result

            const response = await fetch('http://localhost:5000/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // so that session cookie is sent
                body: JSON.stringify({ idToken }),
            });

            const data = await response.json();
            console.log(data); // You can handle the response as needed
            navigate("/Dashboard"); // Redirect to the Dashboard after successful login

        } catch (error) {
            console.error('Google Sign-In Error:', error); // Handle any errors from Google Sign-In
        }
    };
  
    return (
        <>
            <div className ="login page">
                <div className ="logincard">
                    <h2>Login</h2>
                    <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

                    <button onClick={handleLogin}>Login</button> 
                    <button onClick={signInWithGoogle}> Log in with Google</button>

                </div>
            </div>
        </>
    );
}
export default Login;
