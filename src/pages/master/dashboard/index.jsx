import React from "react";
import { MasterLayout } from "../../../components";
import { useQuery } from "@tanstack/react-query";
import { getCustomer } from "../../../hooks/useCustomer";
import { getTeknisi } from "../../../hooks/useTeknisi";
import { getKunjungan } from "../../../hooks/useKunjungan";

function DashboardMaster() {
  const { isLoadingTeknisi, data:teknisi } = useQuery({
    queryKey: ["teknisi"],
    queryFn: getTeknisi,
  });
  const { isLoadingCustomer, data:customer } = useQuery({
    queryKey: ["customer"],
    queryFn: getCustomer,
  });
  const { isLoadingKunjungan, data:kunjungan } = useQuery({
    queryKey: ["kunjungan"],
    queryFn: getKunjungan,
  });
  return (
    <MasterLayout>
      <div className="container-fluid px-4">
        <h1 className="mt-4 titleCenter">Dashboard Master</h1>
        <ol className="breadcrumb mb-4 mt-4"></ol>

        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">DATA TEKNISI</h5>
                <h2 className="card-text">
                  {isLoadingTeknisi ? 'Loading ..' : teknisi?.length }
                </h2>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">DATA CUSTOMER</h5>
                <h2 className="card-text">
                  {isLoadingCustomer ? 'Loading ..' : customer?.length }
                </h2>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">DATA KUNJUNGAN</h5>
                <h2 className="card-text">
                  {isLoadingKunjungan ? 'Loading ..' : kunjungan?.length }
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
}

export default DashboardMaster;
