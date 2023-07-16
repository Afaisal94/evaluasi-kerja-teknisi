import React, { useState } from "react";
import { MasterLayout } from "../../../../components";
import { useNavigate } from "react-router-dom";
import { createJenisPekerjaan } from "../../../../hooks/useJenisPekerjaan";

function AddJenisPekerjaan() {
  const navigate = useNavigate();
  const [jenisPekerjaan, setJenisPekerjaan] = useState("");
  const [points, setPoints] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    createJenisPekerjaan({ jenisPekerjaan, points })
      .then((res) => {
        setLoading(false);
        navigate("/list-jenispekerjaan");
      })
      .catch((error) => {
        setLoading(false);
      });
  };
  return (
    <MasterLayout>
      <div className="container-fluid px-4">
        <h1 className="mt-4 titleCenter">Tambah Data Jenis Pekerjaan</h1>
        <ol className="breadcrumb mb-4 mt-4"></ol>
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label>Jenis Pekerjaan</label>
              <input
                type="text"
                className="form-control"
                value={jenisPekerjaan}
                onChange={(e) => setJenisPekerjaan(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label>Points</label>
              <input
                type="number"
                className="form-control"
                value={points}
                onChange={(e) => setPoints(e.target.value)}
                required
              />
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

export default AddJenisPekerjaan;
