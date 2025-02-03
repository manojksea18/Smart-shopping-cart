// import { defaults } from 'chart.js'
import React, { useEffect, useState } from 'react';
import { db, collection, getDocs } from '../src/firebase'; // Import Firebase setup
const Users =() => {

    const[users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]); // For search filtering
    const [searchQuery, setSearchQuery] = useState(""); // Store search input
    const [activeCarts, setActiveCarts] = useState([]);
    const [inactiveCarts, setInactiveCarts] = useState([]);
    const [availableCarts, setAvailableCarts] = useState([]);
      


    useEffect(()=>{
        const fetchUser = async()=>{
            try{
                const querySnapshot = getDocs(collection(db,"users"));// Fetch from "users" collection
                const usersData = (await querySnapshot).docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data(),
                }));
                setUsers(usersData);

                const active = usersData.filter(user => user.cart && user.cart.items > 0);
                const inactive = usersData.filter(user => user.cart && user.cart.items === 0);
                const available = usersData.filter(user => !user.cart);
                setFilteredUsers(usersData);
                setActiveCarts(active);
                setInactiveCarts(inactive);
                setAvailableCarts(available);


            } catch(error){
                console.error("Error fetching users:", error);
            }

        };
        fetchUser();
    },[]);
     useEffect(()=>{
          setFilteredUsers(
            users.filter(
              (user)=>
                user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
              user.phone?.includes(searchQuery)
    
            )
          );
        }, [searchQuery,users]);
  return (
    
        <div className=' h-screen bg-gray-100'>
            <h1 className=' text-2xl font-bold mb-4 h-20 bg-white p-4 text-gray-700'>Users Management</h1>

            {/* Search Bar */}
        <div>
        <input
        type='text'
        placeholder='Search users, cart ID...'
        value={searchQuery}
        onChange={(e)=> setSearchQuery(e.target.value)}
        className='w-full p-2 mb-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400'/>
        </div>


        <div className=' bg-gray-200'>
        <table>
            <tr className='mt-10  p-3 '>
                <th > <button className='p-3 text-base font-medium rounded-lg transition-all duration-300  text-gray-700 hover:bg-purple-200 hover:text-black hover:shadow-md transform hover:scale-110' onClick={() => setUsers(activeCarts)}>Show Active Carts</button></th>
                <th > <button className='p-3 ml-5 text-base font-medium rounded-lg transition-all duration-300  text-gray-700 hover:bg-purple-200 hover:text-black hover:shadow-md transform hover:scale-110' onClick={() => setUsers(inactiveCarts)}>Show Inactive Carts</button></th>
                <th > <button className='p-3 ml-5 text-base font-medium rounded-lg transition-all duration-300  text-gray-700 hover:bg-purple-200 hover:text-black hover:shadow-md transform hover:scale-110' onClick={() => setUsers(availableCarts)}>Show Available Carts</button></th>
            </tr>
            </table>
            
     
            

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
                {filteredUsers.length > 0?(
                    filteredUsers.map((user)=>(

                
                <tr className='bg-purple-100'>
                <td className='p-4'> {user.name}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">{user.phone}</td>
                <td className="p-4 ">{user.registrationDate}</td>
                <td className='p-4'>
                    <button className='text-blue-600'>Edit</button>
                </td>               
                 </tr>
                   ))
                ) : (
                   <tr>
                <td colSpan="5" className="p-4 text-center">
                  No users found
                </td>
              </tr>
              )}
              </tbody>
               {/* <tbody>
                {users.length > 0?(
                    users.map((user)=>(

                <tr>
                <td className='p-4'> {user.name}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">{user.phone}</td>
                <td className="p-4 ">{user.registrationDate}</td>
                <td className='p-4'>
                    <button className='text-blue-600'>Edit</button>
                </td>               
                 </tr>
                   ))
                ) : (
                   <tr>
                <td colSpan="5" className="p-4 text-center">
                  No users found
                </td>
              </tr>
              )}
            </tbody>   
            <tbody>
                {users.length > 0?(
                    users.map((user)=>(

                <tr>
                <td className='p-4'> {user.name}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">{user.phone}</td>
                <td className="p-4 ">{user.registrationDate}</td>
                <td className='p-4'>
                    <button className='text-blue-600'>Edit</button>
                </td>               
                 </tr>
                   ))
                ) : (
                   <tr>
                <td colSpan="5" className="p-4 text-center">
                  No users found
                </td>
              </tr>
              )}
            </tbody>  
            <tbody>
                {users.length > 0?(
                    users.map((user)=>(

                <tr>
                <td className='p-4'> {user.name}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">{user.phone}</td>
                <td className="p-4 ">{user.registrationDate}</td>
                <td className='p-4'>
                    <button className='text-blue-600'>Edit</button>
                </td>               
                 </tr>
                   ))
                ) : (
                   <tr>
                <td colSpan="5" className="p-4 text-center">
                  No users found
                </td>
              </tr>
              )}
            </tbody>     */}
                 {/* <tr>
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
            */}
            </table>
        </div>

        <thead>

        </thead>
        </div>
      
  
  )
}

export default Users;