import React from "react";
import { Link } from "react-router-dom";

const MasterNav = () => {
  const nama = localStorage.getItem("nama");
  return (
    <div className="sb-sidenav-menu">
      <div className="nav">
        <div className="sb-sidenav-menu-heading"></div>
        <center>{nama}</center>
        <div className="sb-sidenav-menu-heading">MENU UTAMA</div>
        <Link to={"/dashboard-master"} className="nav-link">
          <div className="sb-nav-link-icon">
            <i className="fas fa-table"></i>
          </div>
          <h6>Dashboard</h6>
        </Link>
        <Link to={"/list-teknisi"} className="nav-link">
          <div className="sb-nav-link-icon">
            <i className="fas fa-table"></i>
          </div>
          <h6>Data Teknisi</h6>
        </Link>
        <Link to={"/list-customer"} className="nav-link">
          <div className="sb-nav-link-icon">
            <i className="fas fa-table"></i>
          </div>
          <h6>Data Customer</h6>
        </Link>
        <Link to={"/list-kunjungan"} className="nav-link">
          <div className="sb-nav-link-icon">
            <i className="fas fa-table"></i>
          </div>
          <h6>Data Kunjungan</h6>
        </Link>
        <Link to={"/list-jenispekerjaan"} className="nav-link">
          <div className="sb-nav-link-icon">
            <i className="fas fa-table"></i>
          </div>
          <h6>Jenis Pekerjaan</h6>
        </Link>
        <Link to={"/performance"} className="nav-link">
          <div className="sb-nav-link-icon">
            <i className="fas fa-table"></i>
          </div>
          <h6>Data Performance</h6>
        </Link>
      </div>
    </div>
  );
};

export default MasterNav;
