import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  const nama = localStorage.getItem("nama");
  return (
    <div className="sb-sidenav-menu">
      <div className="nav">
        <div className="sb-sidenav-menu-heading"></div>
        <center>{nama}</center>
        <div className="sb-sidenav-menu-heading">MENU UTAMA</div>
        <Link to={"/dashboard-admin"} className="nav-link">
          <div className="sb-nav-link-icon">
            <i className="fas fa-table"></i>
          </div>
          <h6>Dashboard</h6>
        </Link>
        {/* <Link to={"/view-profile"} className="nav-link">
          <div className="sb-nav-link-icon">
            <i className="fas fa-table"></i>
          </div>
          Profile
        </Link> */}
        <Link to={"/list-kunjungan-teknisi"} className="nav-link">
          <div className="sb-nav-link-icon">
            <i className="fas fa-table"></i>
          </div>
          Data Kunjungan
        </Link>
        <Link to={"/performance-teknisi"} className="nav-link">
          <div className="sb-nav-link-icon">
            <i className="fas fa-table"></i>
          </div>
          Data Performance
        </Link>
      </div>
    </div>
  );
};

export default AdminNav;
