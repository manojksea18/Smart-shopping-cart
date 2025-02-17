import React, { useEffect, useState } from 'react';
import { FiSearch } from "react-icons/fi"; // Import icons

import { db, collection, getDocs } from '../src/firebase'; // Import Firebase setup

const Cart = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]); // For search filtering
    const [activeCarts, setActiveCarts] = useState([]);
    const [inactiveCarts, setInactiveCarts] = useState([]);
    const [availableCarts, setAvailableCarts] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); // Store search input
    const [selectedUser, setSelectedUser] = useState(null);// store selected user for details view 
    const[showModal, setShowModal] = useState(false); //Modal visibility


  
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
          setFilteredUsers(userList); // Initialize filtered users
          setActiveCarts(active);
          setInactiveCarts(inactive);
          setAvailableCarts(available);

        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };
  
      fetchUsers();
    }, []);
    
    useEffect(()=>{
      setFilteredUsers(
        users.filter(
          (user)=>
            user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.phone?.includes(searchQuery)

        )
      );
    }, [searchQuery,users]);

    //anamika le gareko 

    


  return (
    <div className=' h-screen bg-gray-50'>
      {/* Page Header */}

        <h1 className='text-2xl font-bold mb-4 h-20 bg-white p-4 text-gray-800 shadow'>  Cart Management
        </h1>

      {/* Search Bar */}
       <div className="px-4">
      <input
      type="text"
      placeholder="Search users, cart ID..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full p-2 mb-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
    />
  </div>



          {/* Filter Buttons */}
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
    <div className="flex space-x-4 justify-center">
      <button
        className="p-3 text-base font-medium rounded-lg bg-blue-500 text-white hover:bg-blue-600 hover:shadow-md transform hover:scale-105 transition-all duration-300"
        onClick={() => setUsers(activeCarts)}
      >
        Show Active Carts
      </button>
      <button
        className="p-3 text-base font-medium rounded-lg bg-orange-500 text-white hover:bg-orange-600 hover:shadow-md transform hover:scale-105 transition-all duration-300"
        onClick={() => setUsers(inactiveCarts)}
      >
        Show Inactive Carts
      </button>
      <button
        className="p-3 text-base font-medium rounded-lg bg-green-500 text-white hover:bg-green-600 hover:shadow-md transform hover:scale-105 transition-all duration-300"
        onClick={() => setUsers(availableCarts)}
      >
        Show Available Carts
      </button>
    </div>
  </div>

  {/* Table Section */}
  <div className="bg-white rounded-lg shadow-md overflow-hidden mt-10">
    <table className="table-auto w-full text-left">
      <thead className="bg-gray-200 h-12 shadow-md">
        <tr>
          <th className="p-4">User Name</th>
          <th className="p-4">Phone Number</th>
          <th className="p-4">Cart Sessions</th>
          <th className="p-4">Payment Methods</th>
          <th className="p-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <tr
              key={user.id}
              className="border-b border-gray-300 bg-gray-100 hover:bg-gray-200 transition-all duration-200"
            >
              <td className="p-4">{user.name || "N/A"}</td>
              <td className="p-4">{user.phone || "N/A"}</td>
              <td className="p-4">
                {user.cart ? (
                  <>
                    <span className="font-semibold">
                      Active Cart: {user.cart.cartId}
                    </span>
                    <br />
                    <span>
                      ({user.cart.items} items | NPR {user.cart.total})
                    </span>
                  </>
                ) : (
                  "No active cart"
                )}
              </td>
              <td
                className={`p-4 ${
                  user.paymentMethod === "eSewa"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                {user.paymentMethod || "Cash"}
              </td>
              <td className="p-4">
                <button
                  className="text-blue-600 hover:underline hover:text-blue-800 transition-all"
                  onClick={() => {
                    setSelectedUser(user);
                    setShowModal(true);
                  }}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan="5"
              className="p-4 text-center text-gray-600 italic"
            >
              No users found.
            </td>
          </tr>
        )}
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
      
       {/* Modal with Animation */}
      {showModal && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm animate-fade-in hover:scale-105 transition-transform duration-300
 "
        onClick={()=>setShowModal(false)}> {/*click out side to close */}
          
          <div className="bg-white p-6 rounded shadow-lg w-96 relative animate-slide-up">

          <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition-all duration-300 ease-in-out transform hover:scale-100 active:scale-90"
              onClick={() => setShowModal(false)}
            >
              ✖
            </button>

            <h2 className="text-xl font-bold mb-4 text-center text-gray-700">User Details</h2>
            <p className='text-base font-medium mb-2  '><strong>Name: </strong>{selectedUser.name|| "N/A"}</p>
            <p className='text-base font-medium mb-2  '><strong> Phone: </strong>{selectedUser.phone|| "N/A"}</p>
            <p className='text-base font-medium mb-2 '><strong>Email: </strong>{selectedUser.email|| "N/A"}</p>
            <p className='text-base font-medium mb-2 '><strong> Address: </strong>{selectedUser.address|| "N/A"}</p>
            <p className='text-base font-medium mb-2 '>
              <strong> Cart Details:</strong>{ " " }
              {selectedUser.cart
              ?`Cart ID :${selectedUser.cart.cartId} (${selectedUser.cart.items} items | NPR ${selectedUser.Cart.total})`
            :"No active cart"
            }
            </p>
            <p>
              <strong>Payment Method:</strong> {" "}
              {selectedUser.paymentMethod || "Cash"}
            </p>
            <p className='mt-2'><strong >Total Bill:</strong> NPR {selectedUser.cart?.total || 0}</p>
            <div className = "flex justify-end mt-4">
              <button 
              className='bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition'
              onClick={()=>setShowModal(false)}>

                Close

              </button>
            </div>
          </div>
        </div>
      )}
  </div>
  )
}

export default Cart;