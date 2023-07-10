import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <body
      style={{
        height: "100vh",
        backgroundImage: "linear-gradient(to top, #a3bded 0%, #6991c7 100%)",
      }}
    >
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div className="text-center">
          <h1
            style={{
              fontSize: "40px",
            }}
          >
            Sistem Manajemen Pemeliharaan & Evaluasi Untuk Teknisi Mesin Fotocopy
          </h1>
          <h4>PT. Sarana Solusindo Prima</h4>
          <div className="mt-4">
            <Link to={"/login/master"} className="btn btn-lg btn-primary m-2">
              Login Sebagai Master
            </Link>
            <Link to={"/login/admin"} className="btn btn-lg btn-success m-2">
              Login Sebagai Teknisi
            </Link>
          </div>
        </div>
      </Container>
    </body>
  );
}

export default Home;
