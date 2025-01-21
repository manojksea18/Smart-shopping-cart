import React, { useState } from "react";

const LoginPage=()=>{

    
      return (
        <div className="mt-12 w-1/2 h-screen  mx-auto p-6 border border-gray-300 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <div  className="text-left">
          <label htmlFor="username" className="block font-medium mb-1">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="name"
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
            // style={styles.input}
            className="w-full px-3 py-2 border border-gray-300 rounded "

          />
        </div>
        <div className="text-left">
          <label htmlFor="password" className="block font-medium mb-1">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            // style={styles.input}
            className="w-full px-3 py-2 border border-gray-300 rounded  "
          />
        </div>
        <button
        type="submit" 
        className='px-4 py-2 font-semibold rounded bg-blue-400 mt-5'>
        Submit</button>
          
        </div>
      )
    }
    


export default LoginPage;
