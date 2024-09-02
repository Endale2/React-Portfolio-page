// src/services/userService.js
export const fetchUser = async () => {
  try {
    const response = await axiosInstance.get('https://post-generator-backend-1.onrender.com/auth/user'); // Fetch user data from the endpoint
    return response.data;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    throw error;
  }
};
