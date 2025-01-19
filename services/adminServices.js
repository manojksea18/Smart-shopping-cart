// Import the Axios instance configured for API requests
import axios from 'axios';

// Define the base URL for restaurant-related API endpoints
const adminURL = "http://localhost:8080/admin/";



// Function to add a product by sending a POST request
 export const addAdmin = async (adminD) => {
    try{
  const response = await axios.post(
    adminURL + "add", 
    adminD 
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

export const getById =async (adminD)=>{
  try{
  const response = await axios.get(
    adminURL +"id",
    adminD

  );
  return response.status;
}
catch(error){
  console.error("Error fetching all admins", error);
  throw error;
}
};



