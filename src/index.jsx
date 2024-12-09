import React from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Cart";

function Index(){
    return(
        <Router>
            <div className="flex">
                <Sidebar/>
                <div className="flex-1 p-10 bg-gray-100">
                <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/cart-management' element={<Cart />}/>
            </Routes>
                </div>
            </div>
           
        </Router>
    )
}

export default Index;