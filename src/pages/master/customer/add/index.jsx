import React, { useState } from "react";
import { MasterLayout } from "../../../../components";
import { useNavigate } from "react-router-dom";
import { createCustomer } from "../../../../hooks/useCustomer";

function AddCustomer() {
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [telepon, setTelepon] = useState("");
  const [alamat, setAlamat] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    createCustomer({ nama, email, telepon, alamat })
      .then((res) => {
        setLoading(false);
        navigate("/list-customer");
      })
      .catch((error) => {
        setLoading(false);
      });
  };
  return (
    <MasterLayout>
      <div className="container-fluid px-4">
        <h1 className="mt-4 titleCenter">Tambah Data Customer</h1>
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

            <br />
            <button type="submit" className="btn btn-primary">
              {loading ? "Loading .." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </MasterLayout>
  );
}

export default AddCustomer;
