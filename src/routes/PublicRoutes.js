import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { VerifyOtp } from "../pages/VerifyOtp/VerifyOtp";
import { ProductPage } from "../pages/ProductPage/ProductPage";
import { SubCategoryPage } from "../pages/SubCategoryPage/SubCategoryPage";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { MyAccount } from "../pages/MyAccount/MyAccount";
import { Offers } from "../pages/Offers/Offers";
import { ShoppingCart } from "../pages/ShoppingCart/ShoppingCart";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify" element={<VerifyOtp />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/store/:category" element={<SubCategoryPage />} />
      <Route path="/offers" element={<Offers />} />
      <Route
        path="/my-account"
        element={<ProtectedRoutes element={<MyAccount />} />}
      />
      <Route
        path="/checkout"
        element={<ProtectedRoutes element={<ShoppingCart />} />}
      />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
