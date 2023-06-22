import React, { useEffect, useState } from "react";
import { AdminLayout } from "../../../../components";
import { Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getKunjunganByTeknisiId,
  deleteKunjungan,
} from "../../../../hooks/useKunjungan";
import Swal from "sweetalert2";

function ListKunjunganTeknisi() {
  const id = parseInt(localStorage.getItem("userId"));
  const queryClient = useQueryClient();
  const [kunjungan, setKunjungan] = useState([])

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["kunjungan", id],
    queryFn: async () => await getKunjunganByTeknisiId(id),
  });

  const { mutate } = useMutation({
    mutationFn: async (id) => {
      await deleteKunjungan({ id });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["kunjungan"] });
    },
  });

  const HandleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutate(id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <AdminLayout>
      <div className="container-fluid px-4">
        <h1 className="mt-4 titleCenter">Data Kunjungan</h1>
        <ol className="breadcrumb mb-4 mt-4">
          <li className="breadcrumb-item active">
            <Link to={"/add-kunjungan-teknisi"} className="btn btn-success">
              Tambah Data
            </Link>
          </li>
        </ol>
        <div className="row">
          <table className="table table-bordered table-striped">
            <thead className="table-light">
              <tr>
                <th>No</th>
                <th>Tanggal Kunjungan</th>
                <th>Nama Customer</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={4}>
                    <center>
                      <h4>Loading ...</h4>
                    </center>
                  </td>
                </tr>
              ) : null}

              {isError ? (
                <tr>
                  <td colSpan={4}>
                    <center>
                      <h4>{error.message}</h4>
                    </center>
                  </td>
                </tr>
              ) : null}

              {!isLoading && !isError && data.length ? (
                <>
                  {data.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{new Date(item.tanggal).toLocaleString()}</td>
                      <td>{item.customer.nama}</td>
                      <td>
                        <Link
                          to={`/detail-kunjungan-teknisi/${item.id}`}
                          className="btn btn-sm btn-primary m-1"
                        >
                          Detail
                        </Link>
                        <Link
                          to={`/edit-kunjungan-teknisi/${item.id}`}
                          className="btn btn-sm btn-success m-1"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => {
                            HandleDelete(item.id);
                          }}
                          className="btn btn-sm btn-danger m-1"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                <tr>
                  <td colSpan={4}><center>Data tidak ditemukan</center></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}

export default ListKunjunganTeknisi;
