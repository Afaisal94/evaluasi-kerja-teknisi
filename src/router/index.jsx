import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, NotFound } from "../pages";
import {
  AddCustomer,
  AddJenisPekerjaan,
  AddKunjungan,
  AddTeknisi,
  DashboardMaster,
  DetailKunjungan,
  EditCustomer,
  EditJenisPekerjaan,
  EditKunjungan,
  EditTeknisi,
  ListCustomer,
  ListJenisPekerjaan,
  ListKunjungan,
  ListTeknisi,
  Performance,
  ListEvaluasi,
  AddEvaluasi,
  EditEvaluasi,
} from "../pages/master";
import {
  AddKunjunganTeknisi,
  DashboardAdmin,
  DetailKunjunganTeknisi,
  EditKunjunganTeknisi,
  EditProfile,
  ListKunjunganTeknisi,
  PerformanceTeknisi,
  ViewProfile,
} from "../pages/admin";
import { ProtectedAdmin, ProtectedMaster } from "../components";

export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Admin Master */}

          <Route
            path="/dashboard-master"
            element={
              <ProtectedMaster>
                <DashboardMaster />
              </ProtectedMaster>
            }
          />

          <Route
            path="/list-teknisi"
            element={
              <ProtectedMaster>
                <ListTeknisi />
              </ProtectedMaster>
            }
          />
          <Route
            path="/add-teknisi"
            element={
              <ProtectedMaster>
                <AddTeknisi />
              </ProtectedMaster>
            }
          />
          <Route
            path="/edit-teknisi/:id"
            element={
              <ProtectedMaster>
                <EditTeknisi />
              </ProtectedMaster>
            }
          />

          <Route
            path="/list-customer"
            element={
              <ProtectedMaster>
                <ListCustomer />
              </ProtectedMaster>
            }
          />
          <Route
            path="/add-customer"
            element={
              <ProtectedMaster>
                <AddCustomer />
              </ProtectedMaster>
            }
          />
          <Route
            path="/edit-customer/:id"
            element={
              <ProtectedMaster>
                <EditCustomer />
              </ProtectedMaster>
            }
          />

          <Route
            path="/list-kunjungan"
            element={
              <ProtectedMaster>
                <ListKunjungan />
              </ProtectedMaster>
            }
          />
          <Route
            path="/add-kunjungan"
            element={
              <ProtectedMaster>
                <AddKunjungan />
              </ProtectedMaster>
            }
          />
          <Route
            path="/edit-kunjungan/:id"
            element={
              <ProtectedMaster>
                <EditKunjungan />
              </ProtectedMaster>
            }
          />
          <Route
            path="/detail-kunjungan/:id"
            element={
              <ProtectedMaster>
                <DetailKunjungan />
              </ProtectedMaster>
            }
          />

          <Route
            path="/list-jenispekerjaan"
            element={
              <ProtectedMaster>
                <ListJenisPekerjaan />
              </ProtectedMaster>
            }
          />
          <Route
            path="/add-jenispekerjaan"
            element={
              <ProtectedMaster>
                <AddJenisPekerjaan />
              </ProtectedMaster>
            }
          />
          <Route
            path="/edit-jenispekerjaan/:id"
            element={
              <ProtectedMaster>
                <EditJenisPekerjaan />
              </ProtectedMaster>
            }
          />

          <Route
            path="/performance"
            element={
              <ProtectedMaster>
                <Performance />
              </ProtectedMaster>
            }
          />

          <Route
            path="/list-evaluasi"
            element={
              <ProtectedMaster>
                <ListEvaluasi />
              </ProtectedMaster>
            }
          />

          <Route
            path="/add-evaluasi"
            element={
              <ProtectedMaster>
                <AddEvaluasi />
              </ProtectedMaster>
            }
          />

          <Route
            path="/edit-evaluasi/:id"
            element={
              <ProtectedMaster>
                <EditEvaluasi />
              </ProtectedMaster>
            }
          />

          {/* Teknisi */}
          <Route
            path="/dashboard-admin"
            element={
              <ProtectedAdmin>
                <DashboardAdmin />
              </ProtectedAdmin>
            }
          />

          <Route
            path="/view-profile"
            element={
              <ProtectedAdmin>
                <ViewProfile />
              </ProtectedAdmin>
            }
          />
          <Route
            path="/edit-profile"
            element={
              <ProtectedAdmin>
                <EditProfile />
              </ProtectedAdmin>
            }
          />

          <Route
            path="/list-kunjungan-teknisi"
            element={
              <ProtectedAdmin>
                <ListKunjunganTeknisi />
              </ProtectedAdmin>
            }
          />
          <Route
            path="/add-kunjungan-teknisi"
            element={
              <ProtectedAdmin>
                <AddKunjunganTeknisi />
              </ProtectedAdmin>
            }
          />
          <Route
            path="/edit-kunjungan-teknisi/:id"
            element={
              <ProtectedAdmin>
                <EditKunjunganTeknisi />
              </ProtectedAdmin>
            }
          />
          <Route
            path="/detail-kunjungan-teknisi/:id"
            element={
              <ProtectedAdmin>
                <DetailKunjunganTeknisi />
              </ProtectedAdmin>
            }
          />
          <Route
            path="/performance-teknisi"
            element={
              <ProtectedAdmin>
                <PerformanceTeknisi />
              </ProtectedAdmin>
            }
          />

          {/* Auth */}
          <Route path="/login/:role" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
