import React, { useEffect, useState } from "react";
import { AdminLayout } from "../../../../components";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getKunjunganById } from "../../../../hooks/useKunjungan";

function DetailKunjunganTeknisi() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ["kunjungan", id],
    queryFn: async () => await getKunjunganById(id),
  });

  return (
    <AdminLayout>
      <div className="container-fluid px-4">
        <h1 className="mt-4 titleCenter">Detail Data Kunjungan</h1>
        <ol className="breadcrumb mb-4 mt-4"></ol>
        <div className="row">
          <table className="table table-bordered table-striped">
            <tbody>
              <tr>
                <td>Tanggal</td>
                <td>{new Date(data?.tanggal).toLocaleString()}</td>
              </tr>
              <tr>
                <td>Nama Customer</td>
                <td>{data?.customer.nama}</td>
              </tr>
              <tr>
                <td>Nama Teknisi</td>
                <td>{data?.user.nama}</td>
              </tr>
              <tr>
                <td>Jenis Pekerjaan</td>
                <td>{data?.jenispekerjaan?.jenisPekerjaan}</td>
              </tr>
              <tr>
                <td>Counter</td>
                <td>{data?.counter}</td>
              </tr>
              <tr>
                <td>Keterangan</td>
                <td>{data?.keterangan}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}

export default DetailKunjunganTeknisi;
