import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { VerifyOtp } from "../pages/VerifyOtp/VerifyOtp";
import { ProductPage } from "../pages/ProductPage/ProductPage";
import { SubCategoryPage } from "../pages/SubCategoryPage/SubCategoryPage";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify" element={<VerifyOtp />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/store/:category" element={<SubCategoryPage />} />
      {/* <Route
        path="/purchase-history"
        element={<ProtectedRoutes element={<Courses />} />}
      /> */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
