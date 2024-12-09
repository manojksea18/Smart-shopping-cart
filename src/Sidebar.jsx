import React from 'react';
import { Link } from "react-router-dom";

const Sidebar =()=> {
  return (
    <div className='w-64 h-screen border-r shadow-md bg-gray-200 '>
      <div className='p-5 text-lg font-bold '>
        Admin Dashboard
      </div>
      <nav>
        <Link to='/' className='flex flex-col space-y-2 p-4'>
        Dashboard
        </Link>
        <Link to ='cart-management'>
        Cart Management
        </Link>
        <a href='#'> Users</a>
        <a href='#'> Reports</a>
        <a href='#'> Settings</a>


      </nav>
        </div>
  )
}
 export default Sidebar;