import React, { useEffect, useState } from "react";
import { MasterLayout } from "../../../../components";
import { useNavigate, useParams } from "react-router-dom";
import { getTeknisiById, updateTeknisi } from "../../../../hooks/useTeknisi";

function EditTeknisi() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telepon, setTelepon] = useState("");
  const [alamat, setAlamat] = useState("");
  const [foto, setFoto] = useState("");
  const [fotoUrl, setFotoUrl] = useState("");
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTeknisiById(id).then((res) => {
      setNama(res.nama);
      setEmail(res.email);
      setPassword("");
      setTelepon(res.telepon);
      setAlamat(res.alamat);
      setFotoUrl(res.fotoUrl);
    });
  }, []);

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFoto(image);
    setPreview(URL.createObjectURL(image));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    updateTeknisi({ id, nama, email, password, telepon, alamat, foto })
      .then((res) => {
        setLoading(false);
        navigate("/list-teknisi");
      })
      .catch((error) => {
        setLoading(false);
      });
  };
  return (
    <MasterLayout>
      <div className="container-fluid px-4">
        <h1 className="mt-4 titleCenter">Edit Data Teknisi</h1>
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
              <label>
                Password (Kosongkan Jika tidak ingin mengganti password)
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
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
              <label>Foto &nbsp;</label>

              {fotoUrl ? (
                <>
                  <label> (Kosongkan Jika tidak ingin mengganti foto)</label>
                </>
              ) : (
                <>
                  <div className="alert alert-danger" role="alert">
                    Foto Masih Kosong
                  </div>
                </>
              )}

              <input
                type="file"
                className="form-control"
                onChange={loadImage}
              />
            </div>
            {preview ? (
              <figure>
                <img
                  src={preview}
                  className="img-thumbnail"
                  style={{ width: "100px" }}
                />
              </figure>
            ) : (
              ""
            )}
            <br />
            <button type="submit" className="btn btn-primary mb-3">
              {loading ? 'Loading ..' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </MasterLayout>
  );
}

export default EditTeknisi;
