import React, { Component } from "react";
import Callculator from "./kalkulator/ParentCal";
import DataKaryawan from "./datatabel/parentData";
import Login from "./FormLogin/LoginForm";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const Path = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/calculator"
          element={
            <PrivateRoute>
              <Callculator />
            </PrivateRoute>
          }
        />
        <Route
          path="/tabel"
          element={
            <PrivateRoute>
              <DataKaryawan />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

const PrivateRoute = (props) => {
  const token = localStorage.getItem("token");
  if (!token) 
    return <Navigate to="/login" />;
    return props.children;
  
}
export default Path;
