import React, { useEffect, useState } from "react";
import axios from "axios";
import "./sitemap.css"; // Create a CSS file to style your sitemap
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Aside } from "../Aside/Aside";
import { Link } from "react-router-dom";

const Sitemap = () => {
  const [asideOpen, setAsideOpen] = useState(false);

  const [data, setData] = useState({
    brands: [],
    verticals: [],
    products: [],
    staticRoutes: [],
    ageGroupList: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const storeId = process.env.REACT_APP_STORE_ID;

      // Fetch age Group List
      const ageGroupResponse = await axios.post(
        "https://rewardsplus.in/api/store/ageGroupList",
        { store_id: storeId }
      );

      // Fetch brands
      const brandResponse = await axios.post(
        "https://rewardsplus.in/api/store/getAllBrands",
        { store_id: storeId }
      );
      const brands = brandResponse?.data?.payload_getAllBrands;

      // Fetch verticals and categories
      const verticalWithCatResponse = await axios.post(
        "https://rewardsplus.in/api/store/verticalWithCatList",
        { store_id: storeId }
      );
      const verticalsWithCat =
        verticalWithCatResponse?.data?.payload_verticalWithCatList?.vertical;

      // Fetch products
      const productResponse = await axios.post(
        "https://rewardsplus.in/api/store/getAllProduct",
        { store_id: storeId }
      );
      const products = productResponse?.data?.payload_getAllProducts;

      // Static routes
      const staticRoutes = [
        "/home",
        "/login",
        "/register",
        "/verify",
        "/shop-offers",
        "/offers",
        "/checkout",
        "/my-account",
        "/my-orders",
        "/order-details",
        "/my-address",
        "/privacy",
        "/terms",
        "/return-policy",
        "/about-us",
        "/faq",
        "/payments",
        "/Cancellation-policy",
        "/press",
      ];

      setData({
        brands,
        verticals: verticalsWithCat,
        products,
        staticRoutes,
        ageGroupList: ageGroupResponse?.data?.payload_ageGroupList?.age_group,
      });
    };

    fetchData();
  }, []);

  return (
    <>
      <Header asideOpen={asideOpen} setAsideOpen={setAsideOpen} />
      <Aside asideOpen={asideOpen} setAsideOpen={setAsideOpen} />
      <div className="sitemap">
        <h1>Sitemap</h1>

        <div className="sitemap-section">
          <h2>Verticals</h2>
          {data.verticals.map((vertical, index) => (
            <div key={index}>
              <h3>
                <Link to={`/store/${vertical.name_url}`}>{vertical.name}</Link>
              </h3>
              <ul>
                {vertical.catList.map((cat, catIndex) => (
                  <li key={catIndex}>
                    <a
                      href={`/store-product/vertical/${vertical.name_url}/category/${cat.name_url}`}
                    >
                      {cat.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="sitemap-section">
          <h2>Brands</h2>
          <ul>
            {data.brands.map((brand, index) => (
              <li key={index}>
                <Link to={`/store-product/brand/${brand.brand_id}`}>
                  {brand.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sitemap-section">
          <h2>Age Groups</h2>
          <ul>
            {data.ageGroupList?.map((ageGroup, index) => (
              <li key={index}>
                <Link to={`/store/age/${ageGroup.name_url}`}>{ageGroup.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sitemap-section">
          <h2>Static Routes</h2>
          <ul>
            {data.staticRoutes.map((route, index) => (
              <li key={index}>
                <Link to={route}>{route}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sitemap-section">
          <h2>Products</h2>
          <ul>
            {data.products.map((product, index) => (
              <li key={index}>
                <Link to={`/product/${product.name_url}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sitemap;
