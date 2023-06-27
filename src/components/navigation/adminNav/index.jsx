import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
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
          <Link to={"/dashboard-admin"} className="nav-link">
            <i className="nav-icon fas fa-book"></i>
            <p>Dashboard</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/list-kunjungan-teknisi"} className="nav-link">
            <i className="nav-icon fas fa-book"></i>
            <p>Data Kunjungan</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/performance-teknisi"} className="nav-link">
            <i className="nav-icon fas fa-book"></i>
            <p>Data Performance</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNav;
