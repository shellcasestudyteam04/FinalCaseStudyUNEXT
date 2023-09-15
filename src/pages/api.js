import axios from 'axios';

 

// Create an instance of Axios with a base URL

const api = axios.create({

  baseURL: 'https://localhost:7022', // Replace with your .NET backend's localhost URL

});

 

// Define custom headers or interceptors if needed

// api.defaults.headers.common['Authorization'] = 'Bearer your-token';

 

export default api;