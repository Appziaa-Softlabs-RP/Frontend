import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import noImage from "../../assets/images/image-not-available.jpg";
import { enviroment } from "../../enviroment";
import ApiService from "../../services/ApiService";
import styles from "./SubSubCategoryShop.module.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { Header } from "../Header/Header";
import { PageHeader } from "../PageHeader/PageHeader";
import { Footer } from "../Footer/Footer";

export const SubSubCategoryShop = () => {
  const { subCategorySlug } = useParams();

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const payload = {
      store_id: parseInt(enviroment.STORE_ID),
      subCategorySlug: subCategorySlug
    };
    ApiService.CategoryBySubProdBySlug(payload)
      .then((res) => {
        setData(res?.payload_SubCategoryByProductBySlug);
      })
      .catch((err) => { });
  }, [navigate]);

  return (
    <div className="bg-white h-100">
      <div className="hideInDesktop">
        <PageHeader title="Explore Categories" />
      </div>

      {/* Desktop Structure */}
      <div className="hideInMobile">
        <Header />
      </div>
      <div className="container mx-auto p-0 p-md-2">
        <div
          className={`${styles.dataBox} col-12 d-inline-flex flex-column py-2`}
        >
          <div className="titlesWrapper">
            <h5
              className={`titleMainSmall col-12`}
            >
              Deals for you
            </h5>
            <p
              className={`subTitleLarge col-12`}
            >
              {data?.subCategory?.name}
            </p>
          </div>
          <div
            className={`${styles.lookingContainer} col-12 px-2 d-inline-flex flex-wrap align-items-stretch p-0 row-gap-3`}
          >
            {data?.products?.length > 0 ? (
              <div
                className="d-inline-flex col-12 flex-wrap"
              >
                {data?.products?.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      {item.name !== "" && (
                        <div
                          className={`${styles.productCardBox} px-2 flex-shrink-0 mb-3 col-10 col-sm-6 col-md-4 col-lg-3 mx-auto`}
                          key={index}
                          role="button"
                        >
                          <ProductCard item={item} index={index} />
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            ) : (
              <div className="col-12 d-inline-flex flex-column align-items-center justify-content-center">
                <h5 className="col-12 fs-3 text-center text-secondary py-5 my-5" style={{
                  minHeight: "50vh"
                }}>No products found</h5>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};