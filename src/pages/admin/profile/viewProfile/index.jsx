import React from "react";
import { AdminLayout } from "../../../../components";
import { Link, useNavigate } from "react-router-dom";
import imageThumb from "./../../../../assets/img/Foto.jpg";
import { useQuery } from "@tanstack/react-query";
import { getTeknisiById } from "../../../../hooks/useTeknisi";

function ViewProfile() {
  const id = localStorage.getItem("userId");
  const { data } = useQuery({
    queryKey: ["teknisi", id],
    queryFn: async () => await getTeknisiById(id),
  });
  return (
    <AdminLayout>
      <div className="container-fluid px-4">
        <h1 className="mt-4">Dashboard Teknisi</h1>
        <ol className="breadcrumb mb-4 mt-4"></ol>
        <div className="row">
          <div className="col-md-4">
            {data?.fotoUrl ? (
              <>
                <img className="img-thumbnail" src={data?.fotoUrl} />
              </>
            ) : (
              <>
                <img className="img-thumbnail" src={imageThumb} />
              </>
            )}
          </div>
          <div className="col-md-6">
            <center>
              <h3>Profile Teknisi</h3>
            </center>
            <br />
            <table className="table table-bordered table-striped">
              <tbody>
                <tr>
                  <td>Nama</td>
                  <td>{data?.nama}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{data?.email}</td>
                </tr>
                <tr>
                  <td>No Telepon</td>
                  <td>{data?.telepon}</td>
                </tr>
                <tr>
                  <td>Alamat</td>
                  <td>{data?.alamat}</td>
                </tr>
              </tbody>
            </table>
            <br />
            <Link to={"/edit-profile"} className="btn btn-primary w-100">
              Edit
            </Link>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default ViewProfile;
