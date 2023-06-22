import axios from "axios";
import { BaseApiUrl } from "../utils/BaseApiUrl";


const getKunjungan = async () => {
  const response = await axios.get(`${BaseApiUrl}/kunjungan`);
  return response.data;
};

const getKunjunganById = async (id) => {
  const response = await axios.get(`${BaseApiUrl}/kunjungan/${id}`);
  return response.data;
};

const getKunjunganByTeknisiId = async (id) => {
  const response = await axios.get(`${BaseApiUrl}/kunjungan/teknisi/${id}`);
  return response.data;
};

const deleteKunjungan = async ({ id }) => {
  await axios.delete(`${BaseApiUrl}/kunjungan/${id}`);
  return id;
};

const createKunjungan = async ({ tanggal, customerId, teknisiId, jenisPekerjaanId, counter, keterangan }) => {
  const response = await axios.post(`${BaseApiUrl}/kunjungan`, {
    tanggal, customerId, teknisiId, jenisPekerjaanId, counter, keterangan
  });
  return response.data;
};

const updateKunjungan = async ({ id, customerId, teknisiId, jenisPekerjaanId, counter, keterangan }) => {
  const response = await axios.put(`${BaseApiUrl}/kunjungan/${id}`, {
    customerId, teknisiId, jenisPekerjaanId, counter, keterangan
  });
  return response.data;
};

export {
  getKunjungan,
  getKunjunganByTeknisiId,
  deleteKunjungan,
  getKunjunganById,
  createKunjungan,
  updateKunjungan
};
