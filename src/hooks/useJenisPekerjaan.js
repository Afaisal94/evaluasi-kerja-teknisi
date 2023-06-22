import axios from "axios";
import { BaseApiUrl } from "../utils/BaseApiUrl";

const getJenisPekerjaan = async () => {
  const response = await axios.get(`${BaseApiUrl}/jenispekerjaan`);
  return response.data;
};

const getJenisPekerjaanById = async (id) => {
  const response = await axios.get(`${BaseApiUrl}/jenispekerjaan/${id}`);
  return response.data;
};

const deleteJenisPekerjaan = async ({ id }) => {
  await axios.delete(`${BaseApiUrl}/jenispekerjaan/${id}`);
  return id;
};

const createJenisPekerjaan = async ({ jenisPekerjaan, points }) => {
  const response = await axios.post(`${BaseApiUrl}/jenispekerjaan`, {
    jenisPekerjaan, points
  });
  return response.data;
};

const updateJenisPekerjaan = async ({ id, jenisPekerjaan, Points }) => {
  const response = await axios.patch(`${BaseApiUrl}/jenispekerjaan/${id}`, {
    jenisPekerjaan, Points
  });
  return response.data;
};

export {
  getJenisPekerjaan,
  deleteJenisPekerjaan,
  getJenisPekerjaanById,
  createJenisPekerjaan,
  updateJenisPekerjaan
};
