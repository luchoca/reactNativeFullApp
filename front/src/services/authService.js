import axios from 'axios';

const API_URL = 'http://localhost:3000/auth'; // Cambia esto si tu servidor está en una URL diferente

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// export const login = async (userData) => {
//   try {
//     const response = await axios.post(`${API_URL}/login`, userData);
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
export const login = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
