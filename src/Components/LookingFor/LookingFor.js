import React, { useEffect, useState } from "react";
import ReactOwlCarousel from "react-owl-carousel";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContextProvider";
import styles from "./LookingFor.module.css";

import { useAppStore } from "../../store";
import { LookingForBannerLoader } from "../Loader/Loader";

export const LookingFor = () => {
  const categories = useAppStore((state) => state.categories);
  const [loading, setLoading] = useState(true);
  const appData = useApp();
  const navigate = useNavigate();
  let windowWidth = appData.appData.windowWidth;

  const subCatProduts = (categorySlug, verticalSlug) => {
    navigate(
      `/store-product/vertical/${verticalSlug}/category/${categorySlug}`
    );
  };

  useEffect(() => {
    if (categories.length > 0) {
      setLoading(false);
    }
  }, [categories]);

  return (
    <React.Fragment>
      {loading ? (
        <LookingForBannerLoader />
      ) : (
        <div className={`${styles.shopAgeBox} px-3 col-12 d-inline-flex mb-3`}>
          <div
            className={`${
              windowWidth === "mobile" && "p-0"
            } container d-flex flex-column m-auto`}
          >
            <h5
              className={`${styles.categoryHeaderTitle} col-12 d-inline-flex justify-content-center mt-4 mb-3 fs-2`}
            >
              ✨ Shop by Category ✨
            </h5>
            <div className="col-12 d-inline-flex">
              <ReactOwlCarousel
                className={`carousel-looking-for col-12 d-inline-block owl-theme`}
                margin={10}
                dots={false}
                items={8}
                stagePadding={0}
                nav={true}
              >
                {categories?.map((item, idx) => {
                  return (
                    <div
                      className={`${styles.thumbItem} col-12 d-inline-flex flex-column gap-2 mouse-cursor`}
                      key={idx}
                      onClick={() =>
                        subCatProduts(
                          item?.category?.name_url,
                          item?.verticalSlug
                        )
                      }
                    >
                      <img
                        src={item?.category?.image}
                        alt={item?.category?.name}
                        className="object-fit-cover col-12 d-inline-block"
                      />
                      <p
                        className={`${styles.thumbName} text-truncate col-12 text-center mb-0`}
                      >
                        {item?.category?.name}
                      </p>
                    </div>
                  );
                })}
              </ReactOwlCarousel>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
