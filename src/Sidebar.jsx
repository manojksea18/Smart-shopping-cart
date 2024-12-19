import React from 'react';
import { Link } from "react-router-dom";

const Sidebar =()=> {
  return (
    <div className='  mt-5 w-64 max-h-full border-r shadow-md bg-white '>
      <div className='p-5 text-lg font-bold '>
        Admin Dashboard
      </div>
      <nav className='flex flex-col space-x-2 p-3' >
        <Link to='/' className=' hover:bg-gray-200 p-1 rounded'>
        Dashboard
        </Link>
        <Link to ='cart-management' className=' hover:bg-gray-200 p-2 rounded'>
        Cart Management
        </Link>
        <Link to ='users-management' className=' hover:bg-gray-200 p-2 rounded'>
        Users 
        </Link>
        <Link to ='settings' className=' hover:bg-gray-200 p-2 rounded'>
        setting 
        </Link>
        <a href='#'className=' hover:bg-gray-200 p-2 rounded'> Reports</a>


      </nav>
        </div>
  )
}
 export default Sidebar;