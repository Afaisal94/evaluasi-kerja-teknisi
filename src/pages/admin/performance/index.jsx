import React, { useEffect, useState } from "react";
import { AdminLayout, PerformanceByTeknisi } from "../../../components";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPerformanceById } from "../../../hooks/usePerformance";
import { getEvaluasiByTeknisiId } from "../../../hooks/useEvaluasi";

function PerformanceTeknisi() {
  const id = localStorage.getItem("userId");
  const teknisiId = id;
  const navigate = useNavigate();
  const [bulan, setBulan] = useState(0);
  const [tahun, setTahun] = useState(2023);
  const [namaBulan, setNamaBulan] = useState('');
  const [tableShow, setTableShow] = useState(false);

  const { data:performance } = useQuery({
    queryKey: ["performance", { id, bulan, tahun }],
    queryFn: async () => await getPerformanceById({ id, bulan, tahun }),
  });

  const { data:evaluasi } = useQuery({
    queryKey: ["evaluasiByTeknisi", { teknisiId, bulan, tahun }],
    queryFn: async () => await getEvaluasiByTeknisiId({ teknisiId, bulan, tahun }),
  });

  const convertMonth = (bulan) => {
    const date = new Date();
    date.setMonth(bulan - 1);
    return date.toLocaleString('en-US', { month: 'long' });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setNamaBulan(convertMonth(bulan))
    setTableShow(true);
    console.log(data)
  };

  return (
    <AdminLayout>
      <div className="container-fluid px-4">
        <h1 className="mt-4 titleCenter">Data Performance</h1>
        <ol className="breadcrumb mb-4 mt-4"></ol>
        <div className="row justify-content-md-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label>Bulan</label>
                <select
                  className="form-control"
                  onChange={(e) => setBulan(e.target.value)}
                >
                  <option value="">Pilih Bulan</option>
                  <option value="1">Januari</option>
                  <option value="2">Februari</option>
                  <option value="3">Maret</option>
                  <option value="4">April</option>
                  <option value="5">Mei</option>
                  <option value="6">Juni</option>
                  <option value="7">Juli</option>
                  <option value="8">Agustus</option>
                  <option value="9">September</option>
                  <option value="10">Oktober</option>
                  <option value="11">November</option>
                  <option value="12">Desember</option>
                </select>
              </div>
              <div className="form-group mb-3">
                <label>Tahun</label>
                <input
                  type="number"
                  className="form-control"
                  value={tahun}
                  onChange={(e) => setTahun(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>

        {tableShow ? (
          <div className="row justify-content-md-center">
            <div className="col-md-10">
              <PerformanceByTeknisi
                bulan={namaBulan}
                tahun={tahun}
                data={performance}
                evaluasi={evaluasi}
              />
            </div>
          </div>
        ) : null}

      </div>
    </AdminLayout>
  );
}

export default PerformanceTeknisi;
