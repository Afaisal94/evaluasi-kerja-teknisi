import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

function PerformanceTable(props) {
  const { bulan, tahun, data } = props;

  const getTotalPoints = (index) => {
    const mydata = data[index].kunjungans;
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
              </tr>
            </thead>
            <tbody>
              {data && data.length > 0 ? (
                <>
                  {data.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>
                        {bulan} {tahun}
                      </td>
                      <td>{item.nama}</td>
                      <td>{item.kunjungans.length}</td>
                      <td>{getTotalPoints(index)}</td>
                    </tr>
                  ))}
                </>
              ) : (
                <>
                  <tr>
                    <td colSpan={5}><center>Data tidak ditemukan</center></td>
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

export default PerformanceTable;
