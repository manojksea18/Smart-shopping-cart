import React from 'react'
const Setting=()=> {
  return (
    <div className='p-6 space-y-6 h-screen'>
      <h2 className='text-lg font-bold p-6 bg-white'>Settings</h2>
      <div  className='p-10 bg-white rounded shadow space-y-4'>
        <h3 className='font-bold text-lg'>Profile settings</h3>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label>Name</label>
            <input
            type='text'
            value="Manoj Khati"
            className='w-full p-2 border-gray-300 rounded'
            disabled
            />
          </div>
          <div>
            <label>Email</label>
            <input
            type='email'
            value="manojkhati321@gmail.com"
            className='w-full p-2 border-gray-300 rounded'
            disabled
            />
          </div>

        </div>

      </div>
       {/* Security Settings Section */}
       <div className='p-5 bg-white rounded shadow space-y-4'>
        <h3 className='text-lg font-bold'>Security Settings</h3>
        <div>
          <div>
            <label className=' w-screen-2 border border-gray-300'>Current Password</label>
          </div>
        </div>
        
       </div>

      
    </div>
  )
}

export default Setting;