import axios from "axios";
import { BaseApiUrl } from "../utils/BaseApiUrl";

const getEvaluasi = async () => {
  const response = await axios.get(`${BaseApiUrl}/evaluasi`);
  return response.data;
};

const getEvaluasiByPeriode = async ({ bulan, tahun }) => {
  const response = await axios.get(
    `${BaseApiUrl}/evaluasi?bulan=${bulan}&tahun=${tahun}`
  );
  return response.data;
};

const getEvaluasiByTeknisiId = async ({ teknisiId, bulan, tahun }) => {
  const response = await axios.get(
    `${BaseApiUrl}/evaluasi/teknisi/${teknisiId}?bulan=${bulan}&tahun=${tahun}`
  );
  return response.data;
};

const getEvaluasiById = async (id) => {
  const response = await axios.get(`${BaseApiUrl}/evaluasi/${id}`);
  return response.data;
};

const deleteEvaluasi = async ({ id }) => {
  await axios.delete(`${BaseApiUrl}/evaluasi/${id}`);
  return id;
};

const createEvaluasi = async ({ bulan, tahun, teknisiId, hasil }) => {
  const response = await axios.post(`${BaseApiUrl}/evaluasi`, {
    bulan,
    tahun,
    teknisiId,
    hasil,
  });
  return response.data;
};

const updateEvaluasi = async ({ id, bulan, tahun, teknisiId, hasil }) => {
  const response = await axios.patch(`${BaseApiUrl}/evaluasi/${id}`, {
    bulan,
    tahun,
    teknisiId,
    hasil,
  });
  return response.data;
};

export {
  getEvaluasi,
  getEvaluasiByPeriode,
  getEvaluasiByTeknisiId,
  deleteEvaluasi,
  getEvaluasiById,
  createEvaluasi,
  updateEvaluasi,
};
