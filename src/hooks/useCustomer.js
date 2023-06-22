import axios from "axios";
import { BaseApiUrl } from "../utils/BaseApiUrl";

const getCustomer = async () => {
  const response = await axios.get(`${BaseApiUrl}/customer`);
  return response.data;
};

const getCustomerById = async (id) => {
  const response = await axios.get(`${BaseApiUrl}/customer/${id}`);
  return response.data;
};

const deleteCustomer = async ({ id }) => {
  await axios.delete(`${BaseApiUrl}/customer/${id}`);
  return id;
};

const createCustomer = async ({ nama, email, alamat, telepon }) => {
  const response = await axios.post(`${BaseApiUrl}/customer`, {
    nama, email, alamat, telepon
  });
  return response.data;
};

const updateCustomer = async ({ id, nama, email, alamat, telepon }) => {
  const response = await axios.patch(`${BaseApiUrl}/customer/${id}`, {
    nama, email, alamat, telepon
  });
  return response.data;
};

export {
  getCustomer,
  deleteCustomer,
  getCustomerById,
  createCustomer,
  updateCustomer
};
