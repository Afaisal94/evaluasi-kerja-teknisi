import axios from "axios";
import { BaseApiUrl } from "../utils/BaseApiUrl";

const getPerformance = async ({ bulan, tahun }) => {
  const response = await axios.post(`${BaseApiUrl}/performance`, {
    bulan,
    tahun,
  });
  return response.data;
};

const getPerformanceById = async ({ id, bulan, tahun }) => {
  const response = await axios.post(`${BaseApiUrl}/performance/single`, {
    id,
    bulan,
    tahun,
  });
  return response.data;
};

export { getPerformance, getPerformanceById };
