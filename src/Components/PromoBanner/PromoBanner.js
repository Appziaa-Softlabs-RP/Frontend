import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React, { useEffect, useState } from "react";
import ReactOwlCarousel from "react-owl-carousel";
import styles from "./PromoBanner.module.css";

import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../store";
import { PromoBannerLoader } from "../Loader/Loader";

export const PromoBanner = ({ type }) => {
  const [loading, setLoading] = useState(true);
  const promoBanners = useAppStore((state) => state.promoBanners);
  const offerBanners = useAppStore((state) => state.offerBanners);
  const [allBanner, setAllBanner] = useState([]);
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
      if (window !== undefined) window.open(item?.site_link, "_blank");
    } else if (item?.category_id && item?.vertical_id) {
      navigate(
        `/store-product/vertical/${item?.vertical_name_url}/category/${item?.category_name_url}`
      );
    } else if (item?.product_id) {
      navigate(`/product/${item?.product_name_url}/${item?.product_id}`);
    }
  };

  return (
    <div className="">
      <div>
        {loading ? (
          <PromoBannerLoader />
        ) : (
          <div>
            {allBanner?.length > 0 && (
              <div className={`col-12 d-inline-flex flex-column mt-3`}>
                <div className="container-fluid px-4">
                  <div className={`col-12 d-inline-flex flex-column py-3`}>
                    <ReactOwlCarousel
                      className={`${styles.bannerContainer} brandSilder col-12 d-inline-block owl-theme`}
                      margin={20}
                      nav={true}
                      loop={true}
                      dots={false}
                      responsive={{
                        0: {
                          items: 1,
                        },
                        700: {
                          items: 2,
                        },
                        1000: {
                          items: 3,
                        },
                      }}
                      stagePadding={0}
                    >
                      {allBanner.map((item, index) => {
                        return (
                          <div
                            onClick={() => redirectToLink(item)}
                            key={index}
                            className={`${styles.promoBanner}`}
                            style={{
                              cursor: "pointer",
                              maxWidth: "100%",
                              overflow: "hidden",
                            }}
                          >
                            <img
                              src={item?.image}
                              alt={item?.name}
                              className=" col-12 d-inline-block"
                              style={{
                                height: "38rem",
                                borderRadius: "0px !important",
                              }}
                            />
                          </div>
                        );
                      })}
                    </ReactOwlCarousel>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

    </div>
  );
};