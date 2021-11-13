import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 3000,
  timeoutErrorMessage: 'Server is not responding. Please try after sometime.',
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  config => {
    // Do something before request is sent
    const user = sessionStorage.getItem('user');
    if (user) {
      const accessToken = JSON.parse(user)?.accessToken;
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  error =>
    // Do something with request error
    Promise.reject(error),
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  response =>
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    response,
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log(error.response);

    return Promise.reject(new Error(error.response.data));
  },
);

export default axiosInstance;
