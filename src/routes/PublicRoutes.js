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
import { MyOrders } from "../pages/MyOrders/MyOrders";
import { ShopOffers } from "../pages/ShopOffers/ShopOffers";
import { OrderDetails } from "../pages/OrderDetails/OrderDetails";
import { MyAddress } from "../pages/MyAddress/MyAddress";
import { AddAddress } from "../pages/AddAddress/AddAddress";
import { CategoryPage } from "../pages/CategoryPage/CategoryPage";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify" element={<VerifyOtp />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/shop-offers" element={<ShopOffers />} />
      <Route path="/store/:category" element={<SubCategoryPage />} />
      <Route path="/store-product/:category" element={<CategoryPage />} />
      <Route path="/store/age/:category" element={<CategoryPage />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/checkout" element={<ShoppingCart />} />
      <Route
        path="/my-account"
        element={<ProtectedRoutes element={<MyAccount />} />}
      />
      <Route
        path="/my-orders"
        element={<ProtectedRoutes element={<MyOrders />} />}
      />
      <Route
        path="/order-details"
        element={<ProtectedRoutes element={<OrderDetails />} />}
      />
      <Route
        path="/my-address"
        element={<ProtectedRoutes element={<MyAddress />} />}
      />
      <Route
        path="/add-new-address"
        element={<ProtectedRoutes element={<AddAddress />} />}
      />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
