import React from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Routes, Route,useLocation } from "react-router-dom";
import Cart from "./Cart";
import Users from "./Users";
import Setting from "./Setting";
import LoginPage from "./loginPage";


const Index = () => {
    return (
        <Router>
          <MainLayout />
        </Router>
      );
    };
    const MainLayout = () => {
        const location = useLocation();
      
        // Pages where the Sidebar should not appear
        const noSidebarRoutes = ['/'];

    return(
            <div className="flex">
                {/* Conditionally Render Sidebar */}
               {!noSidebarRoutes.includes(location.pathname) && <Sidebar />}
                <div className="flex-1 p-10 bg-gray-100">
                <Routes>
                <Route path='/' element={<LoginPage />}/>
                <Route path='/dash' element={<Dashboard/>}/>
                <Route path='/cart-management' element={<Cart />}/>
                <Route path='/users-management' element={<Users />}/>
                <Route path='/settings' element={<Setting  />}/> 

            </Routes>
                </div>
            </div>
           
    )
}

export default Index;