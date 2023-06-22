import React, { useEffect, useState } from "react";
import { MasterLayout } from "../../../../components";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getJenisPekerjaanById, updateJenisPekerjaan } from "../../../../hooks/useJenisPekerjaan";

function EditJenisPekerjaan() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [jenisPekerjaan, setJenisPekerjaan] = useState("");
  const [points, setPoints] = useState("");

  const { data } = useQuery({
    queryKey: ["jenisPekerjaan", id],
    queryFn: async () => await getJenisPekerjaanById(id),
  });

  useEffect(() => {
    if (data) {
      setJenisPekerjaan(data.jenisPekerjaan);
      setPoints(data.points);
    }
  }, [data]);

  const { mutate } = useMutation({
    mutationFn: async () => {
      await updateJenisPekerjaan({ id, jenisPekerjaan, points });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["jenisPekerjaan"] });
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await mutate({ id, jenisPekerjaan, points });
    navigate("/list-jenispekerjaan");
  };
  return (
    <MasterLayout>
      <div className="container-fluid px-4">
        <h1 className="mt-4 titleCenter">Edit Data Jenis Pekerjaan</h1>
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
              Submit
            </button>
          </form>
        </div>
      </div>
    </MasterLayout>
  );
}

export default EditJenisPekerjaan;
