import { apiRequest, axiosInstance } from "../axios";

export const login = async (req) => {
  return await apiRequest(() => axiosInstance.post("auth/login", req));

};

export const register = async (req) => {
  return await apiRequest(() => axiosInstance.post("auth/register", req));
};
