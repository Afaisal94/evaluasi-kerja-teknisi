import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedAdmin({ children }) {
  // Get Token from LocalStorage

  // Check Token Exist
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login/admin" replace />;
  }

//   if (localStorage.getItem("role") != "teknisi") {
//     return <Navigate to="/login/master" replace />;
//   }

  return children;
}
export default ProtectedAdmin;
