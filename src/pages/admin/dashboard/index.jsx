import React from "react";
import { AdminLayout } from "../../../components";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getTeknisiById } from "../../../hooks/useTeknisi";

function DashboardAdmin() {
  const id = localStorage.getItem("userId");
  const { data } = useQuery({
    queryKey: ["teknisi", id],
    queryFn: async () => await getTeknisiById(id),
  });
  return (
    <AdminLayout>
      <div className="container-fluid px-4">
        <h1 className="mt-4">Dashboard Teknisi</h1>
        <ol className="breadcrumb mb-4 mt-4"></ol>
        <div className="row">
          
        </div>
      </div>
    </AdminLayout>
  );
}

export default DashboardAdmin;
