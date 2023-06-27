import React from "react";
import { Link } from "react-router-dom";

const MasterNav = () => {
  return (
    <nav className="mt-2">
      <ul
        className="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        role="menu"
        data-accordion="false"
      >
        <li className="nav-header">MAIN MENU</li>
        <li className="nav-item">
          <Link to={"/dashboard-master"} className="nav-link">
            <i className="nav-icon fas fa-book"></i>
            <p>Dashboard</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/list-teknisi"} className="nav-link">
            <i className="nav-icon fas fa-book"></i>
            <p>Data Teknisi</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/list-customer"} className="nav-link">
            <i className="nav-icon fas fa-book"></i>
            <p>Data Customer</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/list-kunjungan"} className="nav-link">
            <i className="nav-icon fas fa-book"></i>
            <p>Data Kunjungan</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/list-jenispekerjaan"} className="nav-link">
            <i className="nav-icon fas fa-book"></i>
            <p>Jenis Pekerjaan</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/performance"} className="nav-link">
            <i className="nav-icon fas fa-book"></i>
            <p>Data Performance</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/list-evaluasi"} className="nav-link">
            <i className="nav-icon fas fa-book"></i>
            <p>Data Evaluasi</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MasterNav;
