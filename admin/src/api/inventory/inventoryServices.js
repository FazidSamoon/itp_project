import { apiRequest, axiosInstance } from "../axios";

export const getAllInventories = async () => {
  try {
    const response = await apiRequest(() => axiosInstance.get("inventory"));
    return response;
  } catch (error) {}
};

export const createInventory = async (req) => {
  const day = new Date().getTime();
  const data = { ...req, receivedDate: day };
  try {
    const response = await apiRequest(() =>
      axiosInstance.post("inventory", data)
    );
    return response;
  } catch (error) {}
};

export const getOneInventory = async (id) => {
  return await apiRequest(() => axiosInstance.get(`inventory/` + id));
};

export const editInventory = async (data, id) => {
  return await apiRequest(() => axiosInstance.patch("inventory/" + id, data));
};

export const getAllReleaseRequests = async () => {
  return await apiRequest(() => axiosInstance.get('inventory/requestStock'))
}

export const deleteInventoryDetails = async (id) => {
  return await apiRequest(() => axiosInstance.delete(`inventory/` + id))
}

export const makeReleaseRequest = async(data, id) => {
  return await apiRequest(() => axiosInstance.post("inventory/request/" + id, data))
}

export const manageInventoryRequests = async(data, id) => {
  return await apiRequest(() => axiosInstance.post("/inventory/approve/" + id , data ))
}
