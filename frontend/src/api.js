// src/api.js
import axios from 'axios';

// Base configuration for API calls
const api = axios.create({
  baseURL: 'https://hms-backend-seven.vercel.app/api/v1', // Your backend URL
  withCredentials: true, // Important for sending cookies cross-origin
  headers: {
    'Content-Type': 'application/json',
  }
});

// User-related API calls
export const userApi = {
  // Login API
  login: (data) => api.post('/user/login', data),
  
  // Patient Registration
  patientRegister: (data) => api.post('/user/patient/register', data),
  
  // Get User Details
  getUserDetails: () => api.get('/user/patient/me'),
  
  // Logout
  logout: () => api.get('/user/patient/logout')
};

// Appointment-related API calls
export const appointmentApi = {
  // Book Appointment
  bookAppointment: (data) => api.post('/appointment/post', data),
  
  // Get All Appointments
  getAllAppointments: () => api.get('/appointment/getall')
};

// Add more API services as needed...

export default api;