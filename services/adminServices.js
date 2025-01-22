// Import the Axios instance configured for API requests
import axios from 'axios';

// Define the base URL for restaurant-related API endpoints
const adminURL = "http://localhost:8080/admin/";


// Function to add a product by sending a POST request
 export const addAdmin = async (adminId) => {
    try{
  const response = await axios.post(
    adminURL + "add", 
    adminId
  );

  // Return the HTTP status code of the response
  return response.status;
}
catch(error){
    console.error("Error adding admin:",error);
    throw error;
}
};


export const getAll =async ()=>{
  try{
  const response = await axios.get(
    adminURL 

  );
  return response.status;
}
catch(error){
  console.error("Error fetching all admins", error);
  throw error;
}
};

export const getById = async (adminId) => {
  try {
    console.log("adminId:", adminId);  // Log the adminId being passed
    const response = await axios.get(adminURL,adminId);
    return response.data;
  } catch (error) {
    console.error("Error fetching admin data:", error);
    throw error;
  }
};

export const login = async (username, password) => {
  try {
    // Send the login request with the username and password
    const response = await axios.post(
      adminURL + "login", // Login endpoint on the backend
      {
        username,
        password,
      }
    );

    // Assuming the backend sends back a JWT token upon successful login
    const token = response.data.token;

    // You can store the token in local storage, session storage, or in-memory
    localStorage.setItem('authToken', token); // Or any other storage option

    // Return the HTTP status code or token
    return {
      status: response.status,
      token: token,
    };
  } catch (error) {
    console.error("Error during login:", error);
    throw error; // You can handle this error in your UI components
  }
};



