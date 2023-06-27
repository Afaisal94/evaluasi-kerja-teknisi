import React, { useState } from "react";
import { Col, Container, Row, Button, Modal } from "react-bootstrap";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getTeknisi } from "../../../hooks/useTeknisi";
import { createEvaluasi } from "../../../hooks/useEvaluasi";

function EvaluasiTable(props) {
  const { bulan, namaBulan, tahun, data } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const queryClient = useQueryClient();
  const [teknisiId, setTeknisiId] = useState("");
  const [hasil, setHasil] = useState("");

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
      await queryClient.invalidateQueries({ queryKey: ["evaluasi"] });
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
    handleClose();
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={10}>
          <Button className="btn btn-sm btn-success mb-3" onClick={handleShow}>
            Tambah Data Evaluasi
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                Tambah Data Evaluasi ({namaBulan} {tahun})
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
            </Modal.Body>
          </Modal>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Periode</th>
                <th>Nama Teknisi</th>
                <th>Hasil Evaluasi</th>
              </tr>
            </thead>
            <tbody>
              {data && data.length > 0 ? (
                <>
                  {data.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>
                        {namaBulan} {tahun}
                      </td>
                      <td>{item?.user?.nama}</td>
                      <td>{item?.hasil}</td>
                    </tr>
                  ))}
                </>
              ) : (
                <>
                  <tr>
                    <td colSpan={5}>
                      <center>Data tidak ditemukan</center>
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
}

export default EvaluasiTable;
