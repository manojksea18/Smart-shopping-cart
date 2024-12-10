import React from 'react'

const  Cart=()=> {
  return (
    <div className=' h-screen bg-gray-100'>
        <h1 className='text-2xl font-bold mb-4 h-20 bg-white p-4'>Cart Management</h1>
        <input
        type='text'
        placeholder='Search users ,cart ID...'
        className='w-full p-2 mb-4 border rounded'/>
        <div className='h-10 bg-gray-200'>
      <tr className='mt-10 h-10'>
                <th className='p-3'> Active Cards</th>
                <th className='p-3'> Inactive Cards</th>
                <th className='p-3'> Availabe Cards</th>
            </tr>
            </div>
      <div className='bg-white rounded shadow overflow-hidden mt-10'>
     <table className='table-auto w-full text-left'>
        <thead className='bg-gray-100 h-10'>
            
    
            <tr className=''>
                <th className='p-4'>User Name </th>
                <th className='p-4'>Phone Number </th>
                <th className='p-4'>Cart Sessions </th>
                <th className='p-4'>Payment Methods </th>
                <th className='p-4'>Actions</th>

            </tr>
            
        </thead>
        <tbody>
            <tr>
                <td className='p-4'> Manoj Khati</td>
                <td className="p-4">9841234567</td>
                <td className="p-4">Active Cart: 4001 (5 items | NPR 4,500)</td>
                <td className="p-4 text-green-600">eSewa</td>
                <td className='p-4'>
                    <button className='text-blue-600'>View Details</button>
                </td>
            </tr>
            <tr>
                <td className='p-4'> Gagan Pradhan</td>
                <td className="p-4">9841234777</td>
                <td className="p-4">Active Cart: 4002 (7 items | NPR 8,500)</td>
                <td className="p-4 text-yellow-600">Cash</td>
                <td className='p-4'>
                    <button className='text-blue-600'>View Details</button>
                </td>
            </tr>
            <tr>
                <td className='p-4'> Anamika Rai</td>
                <td className="p-4">9841234888</td>
                <td className="p-4">Active Cart: 4003 (7 items | NPR 7,500)</td>
                <td className="p-4 text-green-600 ">esewa</td>
                <td className='p-4'>
                    <button className='text-blue-600'>View Details</button>
                </td>
            </tr>
            <tr>
                <td className='p-4'>Suman Pokharel</td>
                <td className="p-4">9841234999</td>
                <td className="p-4">Active Cart: 4004 (6 items | NPR 6,500)</td>
                <td className="p-4 text-yellow-600">Cash</td>
                <td className='p-4'>
                    <button className='text-blue-600'>View Details</button>
                </td>
            </tr>
        </tbody>
    </table>
      </div>
    </div>
  )
}

export default Cart;