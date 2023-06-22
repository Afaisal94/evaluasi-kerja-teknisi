import React, { useEffect, useState } from "react";
import { AdminLayout } from "../../../../components";
import { useNavigate } from "react-router-dom";
import { useQueries, useMutation, useQueryClient } from "@tanstack/react-query";
import { createKunjungan } from "../../../../hooks/useKunjungan";
import { getCustomer } from "../../../../hooks/useCustomer";
import { getJenisPekerjaan } from "../../../../hooks/useJenisPekerjaan";

function AddKunjunganTeknisi() {
  const userId = parseInt(localStorage.getItem("userId"));
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [customerId, setCustomerId] = useState(0);
  const teknisiId = userId;
  const [jenisPekerjaanId, setJenisPekerjaanId] = useState(0);
  const [counter, setCounter] = useState("");
  const [keterangan, setKeterangan] = useState("");

  const [customer, jenisPekerjaan] = useQueries({
    queries: [
      {
        queryKey: ["customer"],
        queryFn: getCustomer,
      },

      {
        queryKey: ["jenisPekerjaan"],
        queryFn: getJenisPekerjaan,
      },
    ],
  });

  const { mutate } = useMutation({
    mutationFn: async () => {
      await createKunjungan({
        customerId,
        teknisiId,
        jenisPekerjaanId,
        counter,
        keterangan,
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["kunjungan"] });
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await mutate({
      customerId,
      teknisiId,
      jenisPekerjaanId,
      counter,
      keterangan,
    });
    navigate("/list-kunjungan-teknisi");
  };
  return (
    <AdminLayout>
      <div className="container-fluid px-4">
        <h1 className="mt-4 titleCenter">Tambah Data Kunjungan</h1>
        <ol className="breadcrumb mb-4 mt-4"></ol>
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label>Nama Customer</label>
              <select
                className="form-control"
                onChange={(e) => setCustomerId(e.target.value)}
              >
                <option value="">Pilih Customer</option>
                {customer.data?.map((item, index) => (
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
                <option value="">Pilih Jenis Pekerjaan</option>
                {jenisPekerjaan.data?.map((item, index) => (
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

export default AddKunjunganTeknisi;
