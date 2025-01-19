import React from 'react'
const Setting=()=> {
  return (
    <div className='p-6 space-y-6 h-screen'>
      <h2 className='text-lg font-bold p-6 bg-white'>Settings</h2>
      <div  className='p-10 bg-white rounded shadow space-y-4'>
        <h3 className='font-bold text-lg'>Profile settings</h3>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label className=' w-screen-2 border border-gray-300' >Name</label>
            <input
            type='text'
            // value=""
            placeholder='name'

            className='w-full p-2 border-gray-300 rounded'
            
            />
          </div>
          <div>
            <label className=' w-screen-2 border border-gray-300'>Email</label>
            <input
            type='email'
            // value=""
            placeholder='email'
            className='w-full p-2 border-gray-300 rounded'
            
            />
          </div>

        </div>

      </div>
       {/* Security Settings Section */}
       <div className='p-5 bg-white rounded shadow space-y-4'>
        <h3 className='text-lg font-bold'>Security Settings</h3>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label className=' w-screen-2 border border-gray-300'>Current Password</label>
            <input
            type='password'
            placeholder='********'
            className='w-full p-2 border border-gray-300 rounded'/>
          </div>
          <div>
            <label className=' w-screen-2 border border-gray-300'>New Password</label>
            <input
            type='password'
            placeholder='Enter new password'
            className='w-full p-2 border border-gray-300 rounded'/>
          </div>
          <div>
            <label className=' w-screen-2 border border-gray-300'>Conform New Password</label>
            <input
            type='password'
            placeholder='conform new password'
            className='w-full p-2 border border-gray-300 rounded'/>
          </div>
          <button className='mt-6 h-10 text-white bg-blue-600 rounded hover:bg-blue-700'> Save Changes</button>

        </div>
       </div>
       <div className='p-4  bg-white rounded shadow flex justify-between items-center'> 
        <h3 className='text-lg font-bold '>Two-Factor Authentication</h3>
        <button className='px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700'>Enable</button>
        </div>

      
    </div>
  )
}

export default Setting;