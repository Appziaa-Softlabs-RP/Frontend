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
import { SearchPage } from "../pages/SearchPage/SearchPage";
import { Privacy } from "../pages/Privacy/Privacy";
import { Terms } from "../pages/Terms/Terms";
import { Return } from "../pages/Return/Return";
import { Payments } from "../pages/Payments/Payments";
import { AboutUs } from "../pages/AboutUs/AboutUs";
import { Faq } from "../pages/Faq/Faq";
import { Cancellation } from "../pages/Cancellation/Cancellation";
import { Press } from "../pages/Press/Press";
import { BrandCategoryPage } from "../pages/CategoryPage/brandCategoryPage";

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
      <Route
        path="/store-product/brand/:brandId"
        element={<BrandCategoryPage />}
      />
      <Route path="/store/age/:category" element={<CategoryPage />} />
      <Route path="/search-product/:category" element={<SearchPage />} />
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
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/return-policy" element={<Return />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/Cancellation-policy" element={<Cancellation />} />
      <Route path="/press" element={<Press />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
