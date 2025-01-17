// Import the Axios instance configured for API requests
import axios from "axios";
import axiosInstance from "./RequestInstance";

// Define the base URL for restaurant-related API endpoints
const adminURL = "http://localhost:8080/admin/add";







// Function to add a product by sending a POST request
export const addAdmin = async (adminD) => {
  // Send a POST request to create a new product with the provided data
  const response = await axiosInstance.post(
    adminURL + "addadmin", // Concatenate base URL with the endpoint for creating a product
    adminD // The data for creating the product
  );

  // Return the HTTP status code of the response
  return response.status;
};





