// import { defaults } from 'chart.js'
import React from 'react'

const Users =() => {
  return (
    
        <div className=' h-screen bg-gray-100'>
            <h1 className=' font-bold text-lg'>Users Management</h1>
            <input
        type='text'
        placeholder='Search users ,cart ID...'
        className='w-full mt-3 p-2 mb-4 border rounded'/>
        <div className='h-10 bg-gray-200'>
        <tr className='mt-10'>
                <th className='p-3'> Active Cards</th>
                <th className='p-3'> Inactive Cards</th>
                <th className='p-3'> Availabe Cards</th>
            </tr>
        </div>
        <div className=' bg-white rounded shadow overflow-hidden mt-10'>
            <table className='table-auto w-full text-left'>
                <thead className='bg-gray-100 h-10'>
                    <tr>
                <th className='p-4'>User Name </th>
                <th className='p-4'>Email </th>
                <th className='p-4'>Phone Number </th>
                <th className='p-4'>Registration Date </th>
                <th className='p-4'>Actions</th> 
                    </tr>
                </thead>

            <tbody>
                <tr>
                <td className='p-4'> Manoj Khati</td>
                <td className="p-4">manojkhati321@gmail.com</td>
                <td className="p-4">9867978561</td>
                <td className="p-4 ">15 jan 024</td>
                <td className='p-4'>
                    <button className='text-blue-600'>Edit</button>
                </td>               
                 </tr>
                 <tr>
                <td className='p-4'> Aanamika Rai</td>
                <td className="p-4">aanamikarai21@gmail.com</td>
                <td className="p-4">9867978500</td>
                <td className="p-4 ">16 jan 024</td>
                <td className='p-4'>
                    <button className='text-blue-600'>Edit</button>
                </td>               
                 </tr>
                 <tr>
                <td className='p-4'> Gagan Pradhan</td>
                <td className="p-4">pradhanagagan2002@gmail.com</td>
                <td className="p-4">9867978511</td>
                <td className="p-4 ">17 jan 024</td>
                <td className='p-4'>
                    <button className='text-blue-600'>Edit</button>
                </td>               
                 </tr>
                 <tr>
                <td className='p-4'> Suman Pokhrel</td>
                <td className="p-4">pokherlsuman01@gmail.com</td>
                <td className="p-4">9867978522</td>
                <td className="p-4 ">18 jan 024</td>
                <td className='p-4'>
                    <button className='text-blue-600'>Edit</button>
                </td>               
                 </tr>
            </tbody>
            </table>
        </div>

        <thead>

        </thead>
        </div>
      
  
  )
}

export default Users;