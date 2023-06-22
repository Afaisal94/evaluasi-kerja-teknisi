import axios from "axios";
import { BaseApiUrl } from "../utils/BaseApiUrl";

const getTeknisi = async () => {
  const response = await axios.get(`${BaseApiUrl}/teknisi`);
  return response.data;
};

const getTeknisiById = async (id) => {
  const response = await axios.get(`${BaseApiUrl}/teknisi/${id}`);
  return response.data;
};

const deleteTeknisi = async ({ id }) => {
  await axios.delete(`${BaseApiUrl}/teknisi/${id}`);
  return id;
};

const createTeknisi = async ({ nama, email, password, alamat, telepon, foto }) => {
  const formData = new FormData();
  formData.append("nama", nama);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("alamat", alamat);
  formData.append("telepon", telepon);
  formData.append("foto", foto);

  const response = await axios.post(`${BaseApiUrl}/teknisi`, formData, {
    headers: {
      "Content-type": "multipart/form-data",
    },
  });
  return response.data;
};

const updateTeknisi = async ({ id, nama, email, password, alamat, telepon, foto }) => {
  const formData = new FormData();
  formData.append("nama", nama);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("alamat", alamat);
  formData.append("telepon", telepon);
  formData.append("foto", foto);

  const response = await axios.put(`${BaseApiUrl}/teknisi/${id}`, formData, {
    headers: {
      "Content-type": "multipart/form-data",
    },
  });
  return response.data;
};

export {
  getTeknisi,
  deleteTeknisi,
  getTeknisiById,
  createTeknisi,
  updateTeknisi
};
