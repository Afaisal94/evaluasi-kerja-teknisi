import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getTeknisi } from "../../../hooks/useTeknisi";
import { createEvaluasi } from "../../../hooks/useEvaluasi";

function ModalAddEvaluasi(props) {
  const { bulan, tahun } = props;
  const [teknisiId, setTeknisiId] = useState("");
  const [hasil, setHasil] = useState("");

  const queryClient = useQueryClient();
  const { data: teknisi } = useQuery({
    queryKey: ["teknisi"],
    queryFn: getTeknisi,
  });

  const { mutate } = useMutation({
    mutationFn: async () => {
      await createEvaluasi({
        bulan,
        tahun,
        teknisiId,
        hasil,
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["teknisi"] });
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await mutate({
      bulan,
      tahun,
      teknisiId,
      hasil,
    });
  };
  return (
    <>
      <div
        class="modal fade"
        id="AddEvaluasi"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Tambah Data Evaluasi ({bulan} {tahun})
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label>Nama Teknisi</label>
                  <select
                    className="form-control"
                    onChange={(e) => setTeknisiId(e.target.value)}
                  >
                    <option value="">Pilih Teknisi</option>
                    {teknisi?.map((item, index) => (
                      <option key={item?.id} value={item?.id}>
                        {item?.nama}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group mb-3">
                  <label>Hasil Evaluasi</label>
                  <select
                    className="form-control"
                    onChange={(e) => setHasil(e.target.value)}
                  >
                    <option value="">Pilih Hasil</option>
                    <option value="Sangat Baik">Sangat Baik</option>
                    <option value="Baik">Baik</option>
                    <option value="Cukup">Cukup</option>
                    <option value="Kurang">Kurang</option>
                    <option value="Buruk">Buruk</option>
                  </select>
                </div>

                <br />
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalAddEvaluasi;
