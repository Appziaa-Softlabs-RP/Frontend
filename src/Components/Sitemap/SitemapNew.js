import React, { useEffect, useState } from "react";
import axios from "axios";
import "./sitemap.css"; // Create a CSS file to style your sitemap

const Sitemap = () => {
  const [data, setData] = useState({
    brands: [],
    verticals: [],
    products: [],
    staticRoutes: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const storeId = process.env.REACT_APP_STORE_ID;

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
      });
    };

    fetchData();
  }, []);

  return (
    <div className="sitemap">
      <h1>Sitemap</h1>

      <div className="sitemap-section">
        <h2>Static Routes</h2>
        <ul>
          {data.staticRoutes.map((route, index) => (
            <li key={index}>
              <a href={route}>{route}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="sitemap-section">
        <h2>Brands</h2>
        <ul>
          {data.brands.map((brand, index) => (
            <li key={index}>
              <a href={`/store-product/brand/${brand.brand_id}`}>
                {brand.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="sitemap-section">
        <h2>Verticals</h2>
        {data.verticals.map((vertical, index) => (
          <div key={index}>
            <h3>{vertical.name}</h3>
            <ul>
              <li>
                <a href={`/store/${vertical.name_url}`}>{vertical.name}</a>
              </li>
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
        <h2>Products</h2>
        <ul>
          {data.products.map((product, index) => (
            <li key={index}>
              <a href={`/product/${product.name_url}`}>{product.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sitemap;
