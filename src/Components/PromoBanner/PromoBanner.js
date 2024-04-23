import React, { useEffect, useState } from "react";
import styles from "./PromoBanner.module.css";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useApp } from "../../context/AppContextProvider";

import { useAppStore } from "../../store";
import { PromoBannerLoader } from "../Loader/Loader";
import { useNavigate } from "react-router-dom";

export const PromoBanner = ({ type }) => {
  const [loading, setLoading] = useState(true);
  const promoBanners = useAppStore((state) => state.promoBanners);
  const offerBanners = useAppStore((state) => state.offerBanners);
  const [allBanner, setAllBanner] = useState([]);
  const appData = useApp();
  let windowWidth = appData.appData.windowWidth;
  const navigate = useNavigate();

  useEffect(() => {
    if (type === "Promo Banner") {
      setAllBanner(promoBanners);
      setLoading(false);
    } else if (type === "Offers") {
      setAllBanner(offerBanners);
      setLoading(false);
    }
  }, [promoBanners, offerBanners]);

  const redirectToLink = (item) => {
    if (item?.site_link) {
      window.location.href(item?.site_link);
    } else if (item?.product_id) {
      navigate(`/product?id=${item?.product_id}`);
    }
    //else if (item?.category_id && item?.vertical_id) {
    //  navigate(
    //   `/store-product/vertical/${item?.vertical_id}/category/${item?.category_id}`
    //  );
    //}
  };

  return (
    <React.Fragment>
      {windowWidth === "mobile" ? (
        <React.Fragment>
          {allBanner?.length > 0 && (
            <div className={`col-12 d-inline-flex flex-column p-3`}>
              <div
                className={`${
                  type === "Promo Banner"
                    ? styles.categoryBox
                    : type === "Offers"
                    ? styles.offersBox
                    : ""
                } col-12 d-inline-flex flex-column p-3`}
              >
                {type === "Promo Banner" && (
                  <h5
                    className={`${styles.exploreByCategoryHeader} col-12 d-inline-flex mt-0 mb-3 fs-2`}
                  >
                    Promo for you
                  </h5>
                )}
                <ReactOwlCarousel
                  className={`${styles.bannerContainer} col-12 d-inline-block owl-theme`}
                  margin={10}
                  loop={false}
                  dots={false}
                  items={1}
                  stagePadding={15}
                >
                  {allBanner?.map((item, index) => {
                    return (
                      <div
                        className={styles.item}
                        onClick={() => redirectToLink(item)}
                        key={index}
                      >
                        <img
                          src={item?.image}
                          alt={item?.name}
                          className="object-fit-cover col-12 d-inline-block"
                        />
                      </div>
                    );
                  })}
                </ReactOwlCarousel>
              </div>
            </div>
          )}
        </React.Fragment>
      ) : windowWidth === "desktop" ? (
        <React.Fragment>
          {loading ? (
            <PromoBannerLoader />
          ) : (
            <React.Fragment>
              {allBanner?.length > 0 && (
                <div className={`col-12 d-inline-flex flex-column mt-3`}>
                  <div className="container">
                    <div className={`col-12 d-inline-flex flex-column py-3`}>
                      {type === "Promo Banner" && (
                        <h5
                          className={`${styles.categoryHeaderTitle} col-12 d-inline-flex justify-content-center mt-0 mb-3 fs-2 `}
                        >
                          ✨ Promos for you ✨
                        </h5>
                      )}
                      <ReactOwlCarousel
                        className={`${styles.bannerContainer} brandSilder col-12 d-inline-block owl-theme`}
                        margin={10}
                        nav={true}
                        loop={true}
                        dots={false}
                        items={`${
                          type === "Promo Banner"
                            ? 3
                            : type === "Offers"
                            ? 1
                            : ""
                        }`}
                        stagePadding={0}
                      >
                        {allBanner.map((item, index) => {
                          return (
                            <div
                              className={styles.item}
                              onClick={() => redirectToLink(item)}
                              key={index}
                            >
                              <img
                                src={item?.image}
                                alt={item?.name}
                                className="object-fit-cover col-12 d-inline-block"
                              />
                            </div>
                          );
                        })}
                      </ReactOwlCarousel>
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          )}
        </React.Fragment>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};
