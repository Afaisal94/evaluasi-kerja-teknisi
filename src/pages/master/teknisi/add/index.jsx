import React, { useEffect, useState } from "react";
import { MasterLayout } from "../../../../components";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createTeknisi } from "../../../../hooks/useTeknisi";

function AddTeknisi() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telepon, setTelepon] = useState("");
  const [alamat, setAlamat] = useState("");
  const [foto, setFoto] = useState("");
  const [preview, setPreview] = useState("");

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFoto(image);
    setPreview(URL.createObjectURL(image));
  };

  const { mutate } = useMutation({
    mutationFn: async () => {
      await createTeknisi({ nama, email, password, telepon, alamat, foto });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["teknisi"] });
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log({ nama, email, password, telepon, alamat, foto })
    await mutate({ nama, email, password, telepon, alamat, foto });
    navigate("/list-teknisi");
  };
  return (
    <MasterLayout>
      <div className="container-fluid px-4">
        <h1 className="mt-4 titleCenter">Tambah Data Teknisi</h1>
        <ol className="breadcrumb mb-4 mt-4"></ol>
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label>Nama</label>
              <input
                type="text"
                className="form-control"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label>Password</label>
              <input
                type="text"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label>No Telepon</label>
              <input
                type="text"
                className="form-control"
                value={telepon}
                onChange={(e) => setTelepon(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label>Alamat</label>
              <textarea
                className="form-control"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                required
              >
                {" "}
              </textarea>
            </div>
            <div className="form-group mb-3">
              <label>Foto</label>
              <input
                type="file"
                className="form-control"
                onChange={loadImage}
              />
            </div>
            {preview ? (
              <figure>
                <img src={preview} className="img-thumbnail" style={{width: '100px'}} />
              </figure>
            ) : (
              ""
            )}
            <br />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </MasterLayout>
  );
}

export default AddTeknisi;
