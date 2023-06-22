import React from "react";
import "./../../../assets/scss/styles.scss";
import "./../../../assets/scss/_variables.scss";
import AdminNav from "../../navigation/adminNav";
import { useNavigate } from "react-router-dom";

const AdminLayout = (props) => {
  const navigate = useNavigate();
  const nama = localStorage.getItem("nama");

  const UserLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("nama");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div>
      <nav className="sb-topnav navbar navbar-expand navbar-light bg-light">
        {/* Navbar Brand */}
        <a className="navbar-brand ps-3" href="#">
          <h2 style={{ textShadow: "1px 1px green" }}>PANEL TEKNISI</h2>
        </a>
        {/* Sidebar Toggle */}
        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
          href="#!"
        >
          <i className="fas fa-bars"></i>
        </button>
        {/* Navbar Search */}
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div className="input-group"></div>
        </form>
        {/* Navbar Logout */}
        <button
          className="btn btn-sm btn-secondary m-5"
          onClick={() => UserLogout()}
        >
          Sign Out
        </button>
      </nav>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <AdminNav />
          </nav>
        </div>
        <div id="layoutSidenav_content">
          <main>{props.children}</main>
          <footer className="py-4 bg-light mt-auto"></footer>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
