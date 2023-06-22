import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedMaster({ children }) {
  // Get Token from LocalStorage

  // Check Token Exist
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login/master" replace />;
  }

  //   if (localStorage.getItem("role") != "master") {
  //     return <Navigate to="/login/admin" replace />;
  //   }

  return children;
}
export default ProtectedMaster;
