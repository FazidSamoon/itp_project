import { apiRequest, axiosInstance } from "../axios";

export const createMenuItem = async (menu) => {
  try {
    const response = await apiRequest(() => axiosInstance.post("menu", menu));
    return response;
  } catch (error) {}
};
export const getAllMenuItems = async () => {
  const response = await apiRequest(() => axiosInstance.get("menu"));

  return response;
};

export const updateMenuItem = async (menu, id) => {
  const response = await apiRequest(() =>
    axiosInstance.patch("menu/" + id, menu)
  );

  return response;
};

export const deleteMenuItem = async (id) => {
  const response = await apiRequest(() => axiosInstance.delete("menu/" + id));
  return response;
};

export const getOneMenu = async (id) => {
  const response = await apiRequest(() => axiosInstance.get("menu/" + id));
  return response;
};
