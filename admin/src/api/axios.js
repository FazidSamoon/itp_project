import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${
    JSON.parse(localStorage.getItem("user"))?.token
  }`;
  return config;
});

export const apiRequest = async (request) => {
  const response = await request()
    .then((res) => ({
      ...res.data,
      success: true,
    }))
    .catch((error) => {
      const message = error.response.data.message;
      return {
        ...error.response,
        success: false,
        message: message,
      };
    });
  return response;
};
