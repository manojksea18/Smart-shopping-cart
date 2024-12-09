import React from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Index(){
    return(
        <Router>
            <div className="flex">
                <Sidebar/>
                <div className="flex-1 p-10 bg-gray-100">
                <Routes>
                <Route path='/' element={<Dashboard/>}/>
            </Routes>
                </div>
            </div>
           
        </Router>
    )
}

export default Index;