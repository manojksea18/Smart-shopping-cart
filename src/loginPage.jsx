import React, { useState } from "react";
import axios from "axios";
import { login } from "../services/adminServices";
import { Navigate, useNavigate } from "react-router-dom";

// import { useAuth } from '../AuthContext';
// import { useNavigate } from 'react-router-dom';

const LoginPage=()=>{

    const[username ,setUsername]=useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication status
    const [loading, setLoading] = useState(false); // Track loading state
    const navigate = useNavigate(); // For navigation after successful login

    // const auth = useAuth();
    // const navigate = useNavigate();
    
    const handleLogin = async(e) =>{
        e.preventDefault();
        setError("");
        setLoading(true);
        // const username = 'admin';  // The username entered by the user
        // const password = 'admin@123'; 

    try {
      const response = await login(username, password);

        if(response.status === 200){
            console.log("Login successful", response.token);
            localStorage.setItem("token", response.data);
            setIsAuthenticated(true); // Update authentication state
            alert("Login successful!");
            navigate('/dash');
        } 
        else{
            setError("Invalid username or password");
        }
    } catch(err){
        console.error("Error during login:", err);
        setError("Failed to log in. Please check your credentials.");

    }finally {
        setLoading(false);
      }
    };
     // Logout function
  
    
    
      return (
        <div className="mt-12 w-1/2 h-screen  mx-auto p-6 border border-gray-300 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}

            <form onSubmit={handleLogin}>
            <div  className="text-left">
          <label htmlFor="username" className="block font-medium mb-1">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded "

          />
        </div>
        <div className="text-left">
          <label htmlFor="password" className="block font-medium mb-1">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded  "
          />
        </div>
        <button
        type="submit"
        disabled={loading} 
        className='px-4 py-2 font-semibold rounded bg-blue-400 mt-5'>
        Submit</button>
        </form>
  
       

        </div>
      )
    }
    


export default LoginPage;
