import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

function PerformanceByTeknisi(props) {
  const { bulan, tahun, data, evaluasi } = props;

  const getTotalPoints = () => {
    const mydata = data?.kunjungans;
    const myPoints = mydata.map((item) => item.jenispekerjaan.points);
    const totalPoints = myPoints.reduce((acc, points) => acc + points, 0);
    return totalPoints;
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={10}>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Periode</th>
                <th>Nama Teknisi</th>
                <th>Total Kunjungan</th>
                <th>Total Points</th>
                <th>Hasil Evaluasi</th>
              </tr>
            </thead>
            <tbody>
              {data ? (
                <>
                  <tr>
                    <td>1</td>
                    <td>
                      {bulan} {tahun}
                    </td>
                    <td>{data?.nama}</td>
                    <td>{data?.kunjungans.length}</td>
                    <td>{getTotalPoints()}</td>
                    <td>{evaluasi?.hasil}</td>
                  </tr>
                </>
              ) : (
                <>
                  <tr>
                    <td colSpan={6}><center>Data tidak ditemukan</center></td>
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

export default PerformanceByTeknisi;
