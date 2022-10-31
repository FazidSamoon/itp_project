import { apiRequest, axiosInstance } from "../axios";

export const getAllCustomers = async () => {
    const response = await apiRequest(() => axiosInstance.get("customer"))
    return response
}

export const createCustomer = async (data) => {
    return await apiRequest(() => axiosInstance.post("customer", data))
}

export const updateCustomer = async (data, id) => {
    return await apiRequest(() => axiosInstance.patch("customer/" + id, data))
}

export const getOneCustomer = async (id) => {
    return await apiRequest(() => axiosInstance.get("customer/" + id))
}

export const deleteCustomerDetails = async (id) => {
    return await apiRequest(() => axiosInstance.delete("customer/" + id))
}