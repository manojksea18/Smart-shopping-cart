import React, { useEffect, useState } from 'react';
import { db, collection, getDocs } from '../src/firebase'; // Import Firebase setup

const Cart = () => {
    const [users, setUsers] = useState([]);
    const [activeCarts, setActiveCarts] = useState([]);
    const [inactiveCarts, setInactiveCarts] = useState([]);
    const [availableCarts, setAvailableCarts] = useState([]);
  
    // Fetch cart details from Firestore
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const usersCollection = collection(db, "users"); // Reference to Firestore collection
          const userSnapshot = await getDocs(usersCollection); // Fetch documents
          const userList = userSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setUsers(userList);


          const active = userList.filter(user => user.cart && user.cart.items > 0);
          const inactive = userList.filter(user => user.cart && user.cart.items === 0);
          const available = userList.filter(user => !user.cart);
          setActiveCarts(active);
          setInactiveCarts(inactive);
          setAvailableCarts(available);

        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };
  
      fetchUsers();
    }, []);


  return (
    <div className=' h-screen bg-gray-100'>
        <h1 className='text-2xl font-bold mb-4 h-20 bg-white p-4'>Cart Management</h1>
        <input
        type='text'
        placeholder='Search users ,cart ID...'
        className='w-full p-2 mb-4 border rounded'/>
        <div className='h-10 bg-gray-200'>
      <tr className='mt-10 h-10'>
                <th className='p-3'> <button onClick={() => setUsers(activeCarts)}>Show Active Carts</button></th>
                <th className='p-3'> <button onClick={() => setUsers(inactiveCarts)}>Show Inactive Carts</button></th>
                <th className='p-3'> <button onClick={() => setUsers(availableCarts)}>Show Available Carts</button></th>
            </tr>
            </div>
      <div className='bg-white rounded shadow overflow-hidden mt-10'>
     <table className='table-auto w-full text-left'>
        <thead className='bg-gray-100 h-10 shadow-md'>
            
    
            <tr className=''>
                <th className='p-4 '>User Name </th>
                <th className='p-4'>Phone Number </th>
                <th className='p-4'>Cart Sessions </th>
                <th className='p-4'>Payment Methods </th>
                <th className='p-4'>Actions</th>

            </tr>
            
        </thead>
        <tbody>
     {users.map((user) => (
    <tr key={user.id} className="border-black shadow-md bg-purple-100">
      <td className="p-4 mt-2">{user.name || "N/A"}</td>
      <td className="p-4 mt-2">{user.phone || "N/A"}</td>
      <td className="p-4 mt-2">
        {user.cart ? (
          <>
            <span className="font-semibold">Active Cart: {user.cart.cartId}</span>
            <br />
            <span>({user.cart.items} items | NPR {user.cart.total})</span>
          </>
        ) : (
          "No active cart"
        )}
      </td>
      <td
        className={`p-4 mt-2 ${
          user.paymentMethod === "eSewa" ? "text-green-600" : "text-yellow-600"
        }`}
      >
        {user.paymentMethod || "N/A"}
      </td>
      <td className="p-4">
        <button className="text-blue-600 hover:underline">View Details</button>
      </td>
    </tr>
  ))}
</tbody>


          {/* <tbody>
            {users.map(user =>(
            <tr key={user.id}>
                <td className='p-4'>{user.name || "N/A"}</td>
                <td className="p-4">{user.phone || "N/A"}</td>
                <td className="p-4">{user.cart ? `Active Cart:${user.cart.cartId} ($(user.cart.items}items | NPR ${user.cart.total})`:"No active cart"}</td>
                <td className={`p-4 ${user.paymentMethod === "eSewa"? "text-green-600" : "text-yellow-600" }`} >
                                      {user.paymentMethod || "N/A"}

                    <button className='text-blue-600'>View Details</button>
                </td>
            </tr>
            ))}
          </tbody>
          <tbody>
            {users.map(user =>(
            <tr key={user.id}>
                <td className='p-4'>{user.name || "N/A"}</td>
                <td className="p-4">{user.phone || "N/A"}</td>
                <td className="p-4">{user.cart ? `Active Cart:${user.cart.cartId} ($(user.cart.items}items | NPR ${user.cart.total})`:"No active cart"}</td>
                <td className={`p-4 ${user.paymentMethod === "eSewa"? "text-green-600" : "text-yellow-600" }`} >
                                      {user.paymentMethod || "N/A"}

                    <button className='text-blue-600'>View Details</button>
                </td>
            </tr>
            ))}
          </tbody>
          <tbody>
            {users.map(user =>(
            <tr key={user.id}>
                <td className='p-4'>{user.name || "N/A"}</td>
                <td className="p-4">{user.phone || "N/A"}</td>
                <td className="p-4">{user.cart ? `Active Cart:${user.cart.cartId} ($(user.cart.items}items | NPR ${user.cart.total})`:"No active cart"}</td>
                <td className={`p-4 ${user.paymentMethod === "eSewa"? "text-green-600" : "text-yellow-600" }`} >
                                      {user.paymentMethod || "N/A"}

                    <button className='text-blue-600'>View Details</button>
                </td>
            </tr>
            ))}
          </tbody> */}
            {/* <tr>
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
             */}
    </table>
      </div>
    </div>
  )
}

export default Cart;