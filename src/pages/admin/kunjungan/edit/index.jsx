import React, { useEffect, useState } from "react";
import { AdminLayout } from "../../../../components";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getKunjunganById,
  updateKunjungan,
} from "../../../../hooks/useKunjungan";
import { getCustomer } from "../../../../hooks/useCustomer";
import { getJenisPekerjaan } from "../../../../hooks/useJenisPekerjaan";

function EditKunjunganTeknisi() {
  const { id } = useParams();
  const userId = parseInt(localStorage.getItem("userId"));
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [customerId, setCustomerId] = useState(0);
  const teknisiId = userId;
  const [jenisPekerjaanId, setJenisPekerjaanId] = useState(0);
  const [counter, setCounter] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [customer, setCustomer] = useState([]);
  const [jenisPekerjaan, setJenisPekerjaan] = useState([]);

  const { data: kunjungan } = useQuery({
    queryKey: ["kunjungan", id],
    queryFn: async () => await getKunjunganById(id),
  });

  useEffect(() => {
    if (kunjungan) {
      setCustomerId(kunjungan.customerId);
      setJenisPekerjaanId(kunjungan.jenisPekerjaanId);
      setCounter(kunjungan.counter);
      setKeterangan(kunjungan.keterangan);
    }
  }, [kunjungan]);

  useEffect(() => {
    getCustomer().then((res) => {
      setCustomer(res);
    });

    getJenisPekerjaan().then((res) => {
      setJenisPekerjaan(res);
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    updateKunjungan({
      id,
      customerId,
      teknisiId,
      jenisPekerjaanId,
      counter,
      keterangan,
    }).then((res) => {
      console.log(res);
    });
    navigate("/list-kunjungan-teknisi");
  };
  return (
    <AdminLayout>
      <div className="container-fluid px-4">
        <h1 className="mt-4 titleCenter">Edit Data Kunjungan</h1>
        <ol className="breadcrumb mb-4 mt-4"></ol>
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label>Nama Customer</label>
              <select
                className="form-control"
                onChange={(e) => setCustomerId(e.target.value)}
              >
                <option value={kunjungan?.customerId}>
                  {kunjungan?.customer.nama}
                </option>

                {customer?.map((item) => (
                  <option key={item?.id} value={item?.id}>
                    {item?.nama}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group mb-3">
              <label>Jenis Pekerjaan</label>
              <select
                className="form-control"
                onChange={(e) => setJenisPekerjaanId(e.target.value)}
              >
                <option value={kunjungan?.jenisPekerjaanId}>
                  {kunjungan?.jenispekerjaan.jenisPekerjaan}
                </option>

                {jenisPekerjaan?.map((item) => (
                  <option key={item?.id} value={item?.id}>
                    {item?.jenisPekerjaan}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group mb-3">
              <label>Counter</label>
              <input
                type="text"
                className="form-control"
                value={counter}
                onChange={(e) => setCounter(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label>Keterangan</label>
              <textarea
                className="form-control"
                value={keterangan}
                onChange={(e) => setKeterangan(e.target.value)}
              ></textarea>
            </div>

            <br />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}

export default EditKunjunganTeknisi;
